import 'reflect-metadata';
import {
  Get,
  Body,
  QueryParam,
  Put,
  JsonController,
  Res,
  Req,
  Param,
} from 'routing-controllers';
import { classToPlain } from 'class-transformer';
import { ProductToCategoryService } from '../../services/ProductToCategoryService';
import {
  // FindManyProductOptions,
  ProductService,
} from '../../services/ProductService';
import { CategoryService } from '../../services/categoryService';
import { ProductRelatedService } from '../../services/ProductRelatedService';
import { UpdateFeatureProduct } from './requests/UpdateFeatureProductRequest';
import { ProductImageService } from '../../services/ProductImageService';
import { ProductViewLog } from '../../models/productViewLog';
import { ProductViewLogService } from '../../services/ProductViewLogService';
import jwt from 'jsonwebtoken';
import { CustomerService } from '../../services/CustomerService';
import { ProductDiscountService } from '../../services/ProductDiscountService';
import { ProductSpecialService } from '../../services/ProductSpecialService';
import { CategoryPathService } from '../../services/CategoryPathService';
import { ProductRatingService } from '../../services/RatingService';
import { isNumber, pickBy, parseInt as _parseInt } from 'lodash';
import { FindManyOptions, Like } from 'typeorm';
import { Product } from '../../models/ProductModel';
import { Category } from 'src/api/models/categoryModel';
import { ProductRating } from 'src/api/models/ProductRating';

@JsonController('/product-store')
export class ProductController {
  constructor(
    private productService: ProductService,
    private productToCategoryService: ProductToCategoryService,
    private categoryService: CategoryService,
    private productRelatedService: ProductRelatedService,
    private productImageService: ProductImageService,
    private customerService: CustomerService,
    private productViewLogService: ProductViewLogService,
    private productDiscountService: ProductDiscountService,
    private productSpecialService: ProductSpecialService,
    private categoryPathService: CategoryPathService,
    private productRatingService: ProductRatingService
  ) {}

  // Product Details API
  /**
   * @api {get} /api/product-store/productdetail/:id Product Detail API
   * @apiGroup Store
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get product Detail",
   *      "data":"{}"
   * }
   * @apiSampleRequest /api/product-store/productdetail/:id
   * @apiErrorExample {json} productDetail error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/product-detail/:id')
  public async productDetail(
    @Param('id') id: number,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'productId',
      'sku',
      'upc',
      'name',
      'description',
      'location',
      'minimumQuantity',
      'quantity',
      'subtractStock',
      'metaTagTitle',
      'manufacturerId',
      'stockStatusId',
      'shipping',
      'dateAvailable',
      'sortOrder',
      'price',
      'condition',
      'rating',
      'wishListStatus',
      'isActive',
    ];

    const productDetail = await this.productService.findOneById(id, {
      relations: ['productImage'],
    });
    const productDetails = classToPlain(productDetail);

    const productToCategory = await this.productToCategoryService
      .list({
        select: ['categoryId', 'productId'],
        where: { productId: productDetails.productId },
      })
      .then(val => {
        const category = val.map(async (value: any) => {
          const categoryNames = await this.categoryService.findOne({
            where: {
              categoryId: value.categoryId,
            },
          });
          const JsonData = JSON.stringify(categoryNames);
          const ParseData = JSON.parse(JsonData);
          const temp: any = value;
          temp.categoryName = ParseData.name;
          return temp;
        });
        const results = Promise.all(category);
        return results;
      });
    const relatedProductData = await this.productRelatedService
      .list({ where: { productId: productDetails.productId } })
      .then(val => {
        const relatedProduct = val.map(async (value: any) => {
          const productId = value.relatedProductId;
          const product = await this.productService.findOne({
            select: ['productId', 'name'],
            where: { productId },
            relations: ['productImage'],
          });
          return classToPlain(product);
        });
        const resultData = Promise.all(relatedProduct);
        return resultData;
      });

    const finalResult = { ...productDetails };
    finalResult.Category = productToCategory;
    finalResult.relatedProductDetail = relatedProductData;
    const nowDate = new Date();
    const todayDate =
      nowDate.getFullYear() +
      '-' +
      (nowDate.getMonth() + 1) +
      '-' +
      nowDate.getDate();
    const productSpecial = await this.productSpecialService.findSpecialPrice(
      productDetails.productId,
      todayDate
    );
    const productDiscount = await this.productDiscountService.findDiscountPrice(
      productDetails.productId,
      todayDate
    );
    if (productSpecial !== undefined) {
      finalResult.pricerefer = productSpecial.price;
      finalResult.flag = 1;
    } else if (productDiscount !== undefined) {
      finalResult.pricerefer = productDiscount.price;
      finalResult.flag = 0;
    } else {
      finalResult.pricerefer = '';
      finalResult.flag = '';
    }

    if (request.header('authorization')) {
      let customerId;
      jwt.verify(
        request.header('authorization').split(' ')[1],
        '123##$$)(***&',
        (err, decoded) => {
          if (err) {
            //console.log(err);
          }
          //console.log('lll', decoded.id);
          customerId = decoded.id;
        }
      );
      const customerDetail = await this.customerService.findOne({
        where: { id: customerId },
      });
      const viewLog: any = new ProductViewLog();
      viewLog.productId = id;
      viewLog.customerId = customerDetail.id;
      viewLog.firstName = customerDetail.firstName;
      viewLog.lastName = customerDetail.lastName;
      viewLog.username = customerDetail.username;
      viewLog.email = customerDetail.email;
      viewLog.mobileNumber = customerDetail.mobileNumber;
      viewLog.address = customerDetail.address;
      await this.productViewLogService.create(viewLog);
    }

    const successResponse: any = {
      status: 1,
      message: 'Successfully get productDetail',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
  }

  // update Feature Product API
  /**
   * @api {put} /api/product-store/update-featureproduct/:id Update Feature Product API
   * @apiGroup Store
   * @apiParam (Request body) {number} isFeature product isFeature should be 0 or 1
   * @apiParamExample {json} Input
   * {
   *      "isFeature" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated feature Product.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product-store/update-featureproduct/:id
   * @apiErrorExample {json} isFeature error
   * HTTP/1.1 500 Internal Server Error
   */
  @Put('/update-featureproduct/:id')
  public async updateFeatureProduct(
    @Param('id') id: number,
    @Body({ validate: true }) updateFeatureProductParam: UpdateFeatureProduct,
    @Res() response: any
  ): Promise<any> {
    const product = await this.productService.findOne({
      where: {
        productId: id,
      },
    });
    if (!product) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid productId',
      };
      return response.status(400).send(errorResponse);
    }
    product.isFeatured = updateFeatureProductParam.isFeature;
    const productSave = await this.productService.create(product);
    if (productSave) {
      const successResponse: any = {
        status: 1,
        message: 'product updated successfully.',
        data: productSave,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to updated product',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // Featured Product List API
  /**
   * @api {get} /api/product-store/featureproduct-list Feature Product List
   * @apiGroup Store
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} keyword keyword search by name
   * @apiParam (Request body) {Number} sku search by sku
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get feature product List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product-store/featureproduct-list
   * @apiErrorExample {json} FeatureProduct List error
   * HTTP/1.1 500 Internal Server Error
   */

  @Get('/featureproduct-list')
  public async featureProductList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('sku') sku: string,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Product> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'productId',
        'sku',
        'upc',
        'name',
        'rating',
        'description',
        'location',
        'minimumQuantity',
        'quantity',
        'subtractStock',
        'metaTagTitle',
        'manufacturerId',
        'stockStatusId',
        'shipping',
        'dateAvailable',
        'sortOrder',
        'price',
        'isActive',
      ],

      where: pickBy(
        {
          deleteFlag: 0,
          isFeatured: 1,

          isActive: 1,
          name: (keyword && Like(`%${keyword}%`)) || undefined,
          sku: (sku && Like(`%${sku}%`)) || undefined,
        },
        value => value != null
      ),
    };

    if (count) {
      const featureProductCount = await this.productService.count(options);

      const res = {
        status: 1,
        message: 'Successfully get feature product count',
        data: featureProductCount,
      };
      return response.status(200).send(res);
    }
    const featureProduct = await this.productService.list(options);

    const promises = featureProduct.map(async (product: any) => {
      const productImage = await this.productImageService.findOne({
        select: ['productId', 'image', 'containerName', 'defaultImage'],
        where: {
          productId: product.productId,
          defaultImage: 1,
        },
      });
      const temp: any = product;
      temp.Images = productImage;
      const nowDate = new Date();
      const todayDate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      const productSpecial = await this.productSpecialService.findSpecialPrice(
        product.productId,
        todayDate
      );
      const productDiscount = await this.productDiscountService.findDiscountPrice(
        product.productId,
        todayDate
      );
      if (productSpecial !== undefined) {
        temp.pricerefer = productSpecial.price;
        temp.flag = 1;
      } else if (productDiscount !== undefined) {
        temp.pricerefer = productDiscount.price;
        temp.flag = 0;
      } else {
        temp.pricerefer = '';
        temp.flag = '';
      }
      return temp;
    });
    const finalResult = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Successfully get feature product List',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
  }

  // Today Deals Product List API
  /**
   * @api {get} /api/product-store/todayDeals-list Today Deals List
   * @apiGroup Store
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword search by name
   * @apiParam (Request body) {String} sku search by sku
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get today deals product List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product-store/todayDeals-list
   * @apiErrorExample {json} TodayDeals List error
   * HTTP/1.1 500 Internal Server Error
   */

  @Get('/todayDeals-list')
  public async todayDealsList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('sku') sku: string,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Product> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'productId',
        'sku',
        'upc',
        'name',
        'rating',
        'description',
        'location',
        'minimumQuantity',
        'quantity',
        'subtractStock',
        'metaTagTitle',
        'manufacturerId',
        'stockStatusId',
        'isFeatured',
        'todayDeals',
        'shipping',
        'dateAvailable',
        'sortOrder',
        'price',
        'isActive',
      ],

      where: pickBy(
        {
          deleteFlag: 0,
          todayDeals: 1,

          isActive: 1,
          name: (keyword && Like(`%${keyword}%`)) || undefined,
          sku: (sku && Like(`%${sku}%`)) || undefined,
        },
        value => value != null
      ),
    };

    if (count) {
      const todayDealsCount = await this.productService.count(options);
      const res: any = {
        status: 1,
        message: 'Successfully got today deals count',
        data: todayDealsCount,
      };
      return response.status(200).send(res);
    }
    const todayDeals = await this.productService.list(options);
    const promises = todayDeals.map(async (product: any) => {
      const productImage = await this.productImageService.findOne({
        select: ['productId', 'image', 'containerName', 'defaultImage'],
        where: {
          productId: product.productId,
          defaultImage: 1,
        },
      });
      const temp: any = product;
      temp.Images = productImage;
      const nowDate = new Date();
      const todayDate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      const productSpecial = await this.productSpecialService.findSpecialPrice(
        product.productId,
        todayDate
      );
      const productDiscount = await this.productDiscountService.findDiscountPrice(
        product.productId,
        todayDate
      );
      if (productSpecial !== undefined) {
        temp.pricerefer = productSpecial.price;
        temp.flag = 1;
      } else if (productDiscount !== undefined) {
        temp.pricerefer = productDiscount.price;
        temp.flag = 0;
      } else {
        temp.pricerefer = '';
        temp.flag = '';
      }
      return temp;
    });
    const finalResult = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Successfully got today deals List',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
  }

  // Get Category API
  /**
   * @api {get} /api/product-store/Get-Category Get Category API
   * @apiGroup Store
   * @apiParam (Request body) {Number} CategoryId categoryId
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "successfully got the category.",
   *      "data":"{ }"
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product-store/Get-Category
   * @apiErrorExample {json} Category error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/Get-Category')
  public async getCategory(
    @QueryParam('CategoryId') CategoryId: number,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Category> = {
      select: ['categoryId', 'name', 'parentInt', 'sortOrder'],
      where: {
        categoryId: CategoryId,
      },
    };
    const category: Category[] = await this.categoryService.list(options);
    const promise = category.map(async (result: any) => {
      const temp: any = result;
      const categoryLevel: any = await this.categoryPathService
        .list({
          select: ['level', 'pathId'],
          where: { categoryId: result.categoryId },
          order: { level: 'ASC' },
        })
        .then(values => {
          const categories = values.map(async (val: any) => {
            const categoryNames = await this.categoryService.findOne({
              where: {
                categoryId: val.pathId,
              },
            });
            const JsonData = JSON.stringify(categoryNames);
            const ParseData = JSON.parse(JsonData);
            const tempVal: any = val;
            tempVal.categoryName = ParseData.name;
            return tempVal;
          });
          const results = Promise.all(categories);
          return results;
        });
      temp.levels = categoryLevel;
      return temp;
    });
    const value = await Promise.all(promise);
    if (category) {
      const successResponse: any = {
        status: 1,
        message: 'successfully got the category. ',
        data: value,
      };
      return response.status(200).send(successResponse);
    }
  }

  // Get product rating/review API
  /**
   * @api {get} /api/product-store/Get-Product-rating Get product Rating API
   * @apiGroup Store
   * @apiParam (Request body) {Number} productId productId
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} count count in number
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "successfully got the product rating and review.",
   *      "data":"{ }"
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product-store/Get-Product-rating
   * @apiErrorExample {json} Product error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/Get-Product-rating')
  public async getProductRating(
    @QueryParam('productId') productId: number,
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'review',
      'rating',
      'createdDate',
      'firstName',
      'lastName',
      'productId',
    ];
    const relation = [];
    const WhereConditions = [
      {
        name: 'productId',
        op: 'where',
        value: productId,
      },
    ];
    const options: FindManyOptions<ProductRating> = {
      take: limit,
      skip: offset,
      select: [
        'review',
        'rating',
        'createdDate',
        'firstName',
        'lastName',
        'productId',
      ],
      where: {
        productId,
      },
    };
    if (count) {
      const ratingCount: number = await this.productRatingService.count(
        options
      );
      const successMessage = {
        status: 1,
        message: 'successfully got the product rating count',
        data: ratingCount,
      };
      return response.status(200).send(successMessage);
    }
    const rating: ProductRating[] = await this.productRatingService.list(
      options
    );
    if (rating) {
      const successResponse: any = {
        status: 1,
        message: 'successfully got the product Rating. ',
        data: rating,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 1,
        message: 'unable to get product Rating.',
      };
      return response.status(400).send(errorResponse);
    }
  }
}
