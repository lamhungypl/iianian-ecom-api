import 'reflect-metadata';
import {
  Get,
  JsonController,
  Authorized,
  QueryParam,
  Res,
  Delete,
  Body,
  Req,
  Post,
  Param,
  Put,
} from 'routing-controllers';
import {
  // FindManyProductOptions,
  ProductService,
} from '../services/ProductService';
import { ProductToCategoryService } from '../services/ProductToCategoryService';
import { ProductImageService } from '../services/ProductImageService';
import { Product } from '../models/ProductModel';
import { ProductDiscount } from '../models/ProductDiscount';
import { ProductSpecial } from '../models/ProductSpecial';
import { classToPlain } from 'class-transformer';
import { DeleteProductRequest } from './requests/deleteProductRequest';
import { AddProductRequest } from './requests/createProductRequest';
import { UpdateProductRequest } from './requests/updateProductRequest';
import { ProductToCategory } from '../models/ProductToCategory';
import { ProductImage } from '../models/ProductImage';
import { CategoryService } from '../services/categoryService';
import { OrderProductService } from '../services/OrderProductService';
import { OrderService } from '../services/OrderService';
import { ProductRelated } from '../models/ProductRelated';
import { ProductRelatedService } from '../services/ProductRelatedService';
import { UpdateTodayDealsParam } from './requests/UpdateTodayDealsParam';
import { ProductViewLogService } from '../services/ProductViewLogService';
import { ProductDiscountService } from '../services/ProductDiscountService';
import { ProductSpecialService } from '../services/ProductSpecialService';
import moment from 'moment';
import { FindManyOptions, Like } from 'typeorm';
import { isNumber, pickBy, parseInt as _parseInt } from 'lodash';
import { Response } from 'express';
import fs from 'fs';
import { ProductViewLog } from '../models/productViewLog';

@JsonController('/product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private productToCategoryService: ProductToCategoryService,
    private productImageService: ProductImageService,
    private categoryService: CategoryService,
    private orderProductService: OrderProductService,
    private orderService: OrderService,
    private productRelatedService: ProductRelatedService,
    private productViewLogService: ProductViewLogService,
    private productDiscountService: ProductDiscountService,
    private productSpecialService: ProductSpecialService
  ) {}

  // Product List API
  /**
   * @api {get} /api/product/productlist Product List API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {String} sku sku
   * @apiParam (Request body) {String} status status
   * @apiParam (Request body) {Number} price=1/2 if 1->asc 2->desc
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get product list",
   *      "data":"{}"
   * }
   * @apiSampleRequest /api/product/productlist
   * @apiErrorExample {json} productList error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/productlist')
  @Authorized()
  public async productList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('sku') sku: string,
    @QueryParam('status') status: string,
    // @QueryParam('price') price: number,
    @QueryParam('count') count: number | boolean,
    @Res() response: Response
  ) {
    const relation = ['productToCategory', 'relatedproduct'];

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
        'name',
        'quantity',
        'price',
        'image',
        'imagePath',
        'isFeatured',
        'todayDeals',
        'isActive',
      ],
      relations: relation,
      where: pickBy(
        {
          name: (keyword && Like(`%${keyword}%`)) || undefined,
          sku: (sku && Like(`%${sku}%`)) || undefined,

          isActive: (status && parseInt(status)) || 1,
        },
        value => value != null
      ),
    };

    if (count) {
      const productCount = await this.productService.productCount(options);

      const successRes: any = {
        status: 1,
        message: 'Successfully got count ',
        data: productCount,
      };
      return response.status(200).send(successRes);
    }
    const productLists: Product[] = await this.productService.productList(
      options
    );

    const productList = productLists.map(async (value: Product) => {
      const defaultValue = await this.productImageService.findOne({
        where: {
          productId: value.productId,
          defaultImage: 1,
        },
      });
      const temp: any = value;
      const nowDate = new Date();
      const todaydate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      const productSpecial = await this.productSpecialService.findSpecialPrice(
        value.productId,
        todaydate
      );
      const productDiscount = await this.productDiscountService.findDiscountPrice(
        value.productId,
        todaydate
      );
      if (productSpecial !== undefined) {
        temp.pricerefer = productSpecial.price;
        temp.flag = 1;
      } else if (productDiscount !== undefined) {
        temp.pricerefer = productDiscount.price;
        temp.flag = 0;
      }
      temp.productImage = defaultValue;
      return temp;
    });
    const results = await Promise.all(productList);

    const successResponse = {
      status: 1,
      message: 'Successfully got the complete product list. ',
      data: classToPlain(results),
    };
    return response.status(200).send(successResponse);
  }

  // @Delete('/delete-product/:id')
  // @Authorized()
  // public async deleteProduct(
  //   @Body({ validate: true }) productDelete: DeleteProductRequest,
  //   @Res() response: any,
  //   @Req() request: any
  // ): Promise<Product> {
  //   const product = await this.productService.findOne({
  //     where: {
  //       productId: productDelete.productId,
  //     },
  //   });
  //   if (!product) {
  //     const errorResponse: any = {
  //       status: 0,
  //       message: 'Invalid productId',
  //     };
  //     return response.status(400).send(errorResponse);
  //   }
  //   const deleteProduct = await this.productService.delete(
  //     productDelete.productId
  //   );

  //   if (deleteProduct) {
  //     const successResponse: any = {
  //       status: 1,
  //       message: 'Successfully deleted Product',
  //     };
  //     return response.status(200).send(successResponse);
  //   } else {
  //     const errorResponse: any = {
  //       status: 0,
  //       message: 'unable to delete product',
  //     };
  //     return response.status(400).send(errorResponse);
  //   }
  // }

  // Create Product API
  /**
   * @api {post} /api/product/add-product Add Product API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {String} productName productName
   * @apiParam (Request body) {String} productDescription productDescription
   * @apiParam (Request body) {String} sku stock keeping unit
   * @apiParam (Request body) {String} upc upc
   * @apiParam (Request body) {String} image product Image
   * @apiParam (Request body) {String} metaTagTitle metaTagTitle
   * @apiParam (Request body) {String} categoryId CategoryId
   * @apiParam (Request body) {String} relatedProductId relatedProductId
   * @apiParam (Request body) {Number}  model model
   * @apiParam (Request body) {String} location location
   * @apiParam (Request body) {String} price price
   * @apiParam (Request body) {String} minimumQuantity minimumQuantity
   * @apiParam (Request body) {String} quantity quantity
   * @apiParam (Request body) {Number} subtractStock subtractStock
   * @apiParam (Request body) {Number} outOfStockStatus outOfStockStatus
   * @apiParam (Request body) {Number} requiredShipping requiredShipping
   * @apiParam (Request body) {String} dateAvailable dateAvailable
   * @apiParam (Request body) {Number} condition 1->new 2->used
   * @apiParam (Request body) {Number} status status
   * @apiParam (Request body) {Number} sortOrder sortOrder
   * @apiParam (Request body) {String} productSpecial productSpecial
   * @apiParam (Request body) {String} productDiscount productDiscount
   * @apiParamExample {json} Input
   * {
   *      "productName" : "",
   *      "productDescription" : "",
   *      "sku" : "",
   *      "image" : "",
   *      "metaTagTitle" : "",
   *      "categoryId" : "",
   *      "upc" : "",
   *      "model" : "",
   *      "price" : "",
   *      "location" : "",
   *      "minimumQuantity" : "",
   *      "quantity" : "",
   *      "subtractStock" : "",
   *      "outOfStockStatus" : "",
   *      "requiredShipping" : "",
   *      "dateAvailable" : "",
   *      "status" : "",
   *      "outOfStockStatus" : "",
   *      "sortOrder" : "",
   *      "condition" : "",
   *      "image":[
   *      {
   *      "image":""
   *      "containerName":""
   *      "defaultImage":""
   *      }
   *      ]
   *     "relatedProductId":[ ]
   *     "productSpecial":[
   *      {
   *     "customerGroupId":""
   *     "specialPriority":""
   *     "specialPrice":""
   *     "specialDateStart":""
   *     "specialDateEnd":""
   *      }]
   *     "productDiscount":[
   *      {
   *         "discountQuantity":""
   *         "discountPriority":""
   *         "discountPrice":""
   *         "discountDateStart":""
   *         "discountDateEnd"""
   *      }]
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully created new product.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product/add-product
   * @apiErrorExample {json} AddProduct error
   * HTTP/1.1 500 Internal Server Error
   */
  @Post('/add-product')
  @Authorized()
  public async addProduct(
    @Body({ validate: true }) product: AddProductRequest,
    @Res() response: any
  ): Promise<any> {
    //console.log(product);
    // let productOptions = [];
    // let optionValue = [];
    const newProduct: any = new Product();
    newProduct.name = product.productName;
    newProduct.description = product.productDescription;
    newProduct.sku = product.sku;
    newProduct.upc = product.upc;
    newProduct.location = product.location;
    newProduct.quantity = product.quantity;
    newProduct.price = product.price;
    newProduct.minimumQuantity = product.minimumQuantity;
    newProduct.subtractStock = product.subtractStock;
    newProduct.stockStatusId = product.outOfStockStatus;
    newProduct.shipping = product.requiredShipping;
    newProduct.dateAvailable = moment(product.dateAvailable).toISOString();
    newProduct.metaTagTitle = product.metaTagTitle;
    newProduct.condition = product.condition;
    newProduct.manufacturerId = product.model;
    newProduct.isActive = product.status;
    newProduct.isFeatured = 0;
    newProduct.todayDeals = 0;
    newProduct.sortOrder = product.sortOrder;
    const saveProduct = await this.productService.create(newProduct);

    // Add related product
    if (product.relatedProductId) {
      const relatedProduct: any = product.relatedProductId;
      for (const relatedproduct of relatedProduct) {
        const newRelatedProduct: any = new ProductRelated();
        newRelatedProduct.productId = saveProduct.productId;
        newRelatedProduct.relatedProductId = relatedproduct;
        this.productRelatedService.create(newRelatedProduct);
      }
    }

    // save category
    if (product.categoryId) {
      const category = product.categoryId;
      for (const categoryId of category) {
        const newProductToCategory: any = new ProductToCategory();
        newProductToCategory.productId = saveProduct.productId;
        newProductToCategory.categoryId = categoryId;
        newProductToCategory.isActive = 1;
        this.productToCategoryService.create(newProductToCategory);
      }
    }

    // Save products Image
    const productImage: any = product.image;
    for (const imageRow of productImage) {
      const imageData = JSON.stringify(imageRow);
      const imageResult = JSON.parse(imageData);
      const newProductImage = new ProductImage();
      newProductImage.productId = saveProduct.productId;
      newProductImage.image = imageResult.image;
      newProductImage.containerName = imageResult.containerName;
      newProductImage.defaultImage = imageResult.defaultImage;
      this.productImageService.create(newProductImage);
    }

    // Product Discount
    if (product.productDiscount) {
      const productDiscount: any = product.productDiscount;
      for (const discount of productDiscount) {
        const discountData: any = new ProductDiscount();
        discountData.productId = saveProduct.productId;
        discountData.quantity = discount.discountQuantity;
        discountData.priority = discount.discountPriority;
        discountData.price = discount.discountPrice;
        discountData.dateStart = moment(
          discount.discountDateStart
        ).toISOString();
        discountData.dateEnd = moment(discount.discountDateEnd).toISOString();
        await this.productDiscountService.create(discountData);
      }
    }

    // Product Special
    if (product.productSpecial) {
      const productSpecial: any[] = product.productSpecial;
      for (const special of productSpecial) {
        const specialPriceData: any = new ProductSpecial();
        specialPriceData.productId = saveProduct.productId;
        specialPriceData.priority = special.specialPriority;
        specialPriceData.price = special.specialPrice;
        specialPriceData.dateStart = moment(
          special.specialDateStart
        ).toISOString();
        specialPriceData.dateEnd = moment(special.specialDateEnd).toISOString();
        await this.productSpecialService.create(specialPriceData);
      }
    }

    if (saveProduct) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully created Product',
        data: saveProduct,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to create Product',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // update Product API
  /**
   * @api {post} /api/product/update-product/:id Update Product API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} productId productId
   * @apiParam (Request body) {String} productName productName
   * @apiParam (Request body) {String} productDescription productDescription
   * @apiParam (Request body) {String} sku stock keeping unit
   * @apiParam (Request body) {String} upc upc
   * @apiParam (Request body) {String} image product Image
   * @apiParam (Request body) {String} metaTagTitle metaTagTitle
   * @apiParam (Request body) {String} categoryId CategoryId
   * @apiParam (Request body) {String} relatedProductId relatedProductId
   * @apiParam (Request body) {Number}  model model
   * @apiParam (Request body) {String} location location
   * @apiParam (Request body) {String} price price
   * @apiParam (Request body) {String} minimumQuantity minimumQuantity
   * @apiParam (Request body) {String} quantity quantity
   * @apiParam (Request body) {Number} subtractStock subtractStock
   * @apiParam (Request body) {Number} outOfStockStatus outOfStockStatus
   * @apiParam (Request body) {Number} requiredShipping requiredShipping
   * @apiParam (Request body) {String} dateAvailable dateAvailable
   * @apiParam (Request body) {String} condition 1->new 2->used
   * @apiParam (Request body) {Number} status status
   * @apiParam (Request body) {Number} sortOrder sortOrder
   * @apiParam (Request body) {String} productSpecial productSpecial
   * @apiParam (Request body) {String} productDiscount productDiscount
   * @apiParamExample {json} Input
   * {
   *      "productName" : "",
   *      "productDescription" : "",
   *      "sku" : "",
   *      "image" : "",
   *      "metaTagTitle" : "",
   *      "categoryId" : "",
   *      "upc" : "",
   *      "model" : "",
   *      "price" : "",
   *      "location" : "",
   *      "minimumQuantity" : "",
   *      "quantity" : "",
   *      "subtractStock" : "",
   *      "outOfStockStatus" : "",
   *      "requiredShipping" : "",
   *      "dateAvailable" : "",
   *      "status" : "",
   *      "outOfStockStatus" : "",
   *      "condition" : "",
   *      "sortOrder" : "",
   *      "image":[
   *      {
   *      "image":""
   *      "containerName":""
   *      "defaultImage":""
   *      }
   *      ],
   *       "relatedProductId":[ "", ""],
   *      "productSpecial":[
   *      {
   *     "customerGroupId":""
   *     "specialPriority":""
   *     "specialPrice":""
   *     "specialDateStart":""
   *     "specialDateEnd":""
   *      }],
   *       "productDiscount":[
   *      {
   *         "discountQuantity":""
   *         "discountPriority":""
   *         "discountPrice":""
   *         "discountDateStart":""
   *         "discountDateEnd"""
   *      }]
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated product.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product/update-product/:id
   * @apiErrorExample {json} updateProduct error
   * HTTP/1.1 500 Internal Server Error
   */
  @Post('/update-product/:id')
  @Authorized()
  public async updateProduct(
    @Body({ validate: true }) product: UpdateProductRequest,
    @Res() response: any
  ): Promise<any> {
    //console.log(product);
    const updateProduct: any = await this.productService.findOne({
      where: {
        productId: product.productId,
      },
    });
    if (!updateProduct) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid productId',
      };
      return response.status(400).send(errorResponse);
    }
    updateProduct.name = product.productName;
    updateProduct.description = product.productDescription;
    updateProduct.sku = product.sku;
    updateProduct.upc = product.upc;
    updateProduct.location = product.location;
    updateProduct.quantity = product.quantity;
    updateProduct.price = product.price;
    updateProduct.minimumQuantity = product.minimumQuantity;
    updateProduct.subtractStock = product.subtractStock;
    updateProduct.stockStatusId = product.outOfStockStatus;
    updateProduct.shipping = product.requiredShipping;
    updateProduct.dateAvailable = moment(product.dateAvailable).toISOString();
    updateProduct.metaTagTitle = product.metaTagTitle;
    updateProduct.manufacturerId = product.model;
    updateProduct.condition = product.condition;
    updateProduct.isActive = product.status;
    updateProduct.sortOrder = product.sortOrder;
    const saveProduct = await this.productService.create(updateProduct);

    // delete previous category
    this.productToCategoryService.delete({ productId: saveProduct.productId });

    // save category
    if (product.categoryId) {
      const category = product.categoryId;
      for (const categoryId of category) {
        const newProductToCategory: any = new ProductToCategory();
        newProductToCategory.productId = saveProduct.productId;
        newProductToCategory.categoryId = categoryId;
        newProductToCategory.isActive = 1;
        this.productToCategoryService.create(newProductToCategory);
      }
    }

    const findProduct: any = await this.productRelatedService.findOne({
      where: {
        productId: saveProduct.productId,
      },
    });

    if (findProduct) {
      // delete previous related product
      this.productRelatedService.delete({ productId: saveProduct.productId });

      // update related product
      if (product.relatedProductId) {
        const relatedProduct: any = product.relatedProductId;
        for (const relatedproduct of relatedProduct) {
          const newRelatedProduct: any = new ProductRelated();
          newRelatedProduct.productId = saveProduct.productId;
          newRelatedProduct.relatedProductId = relatedproduct;
          this.productRelatedService.create(newRelatedProduct);
        }
      }
    } else {
      // update related product
      if (product.relatedProductId) {
        const relatedProduct: any = product.relatedProductId;
        for (const relatedproduct of relatedProduct) {
          const newRelatedProduct: any = new ProductRelated();
          newRelatedProduct.productId = saveProduct.productId;
          newRelatedProduct.relatedProductId = relatedproduct;
          this.productRelatedService.create(newRelatedProduct);
        }
      }
    }

    // Delete previous images
    this.productImageService.delete({ productId: saveProduct.productId });
    // Save products Image
    if (product.image) {
      const productImage: any = product.image;
      for (const imageRow of productImage) {
        const imageData = JSON.stringify(imageRow);
        const imageResult = JSON.parse(imageData);
        const newProductImage = new ProductImage();
        newProductImage.productId = saveProduct.productId;
        newProductImage.image = imageResult.image;
        newProductImage.containerName = imageResult.containerName;
        newProductImage.defaultImage = imageResult.defaultImage;
        this.productImageService.create(newProductImage);
      }
    }

    // Delete the product discount
    this.productDiscountService.delete({ productId: saveProduct.productId });

    // Product Discount
    if (product.productDiscount) {
      const productDiscount: any = product.productDiscount;
      for (const discount of productDiscount) {
        const discountData: any = new ProductDiscount();
        discountData.productId = saveProduct.productId;
        discountData.quantity = discount.discountQuantity;
        discountData.priority = discount.discountPriority;
        discountData.price = discount.discountPrice;
        discountData.dateStart = moment(
          discount.discountDateStart
        ).toISOString();
        discountData.dateEnd = moment(discount.discountDateEnd).toISOString();
        await this.productDiscountService.create(discountData);
      }
    }

    // Delete the Product special price
    this.productSpecialService.delete({ productId: saveProduct.productId });

    // Product Special
    if (product.productSpecial) {
      const productSpecial: any = product.productSpecial;
      for (const special of productSpecial) {
        const specialPriceData: any = new ProductSpecial();
        specialPriceData.productId = saveProduct.productId;
        specialPriceData.customerGroupId = special.customerGroupId;
        specialPriceData.priority = special.specialPriority;
        specialPriceData.price = special.specialPrice;
        specialPriceData.dateStart = moment(
          special.specialDateStart
        ).toISOString();
        specialPriceData.dateEnd = moment(special.specialDateEnd).toISOString();
        await this.productSpecialService.create(specialPriceData);
      }
    }

    if (saveProduct) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully updated Product',
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to updated Product',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // Product Details API
  /**
   * @api {get} /api/product/product-detail/:id Product Detail API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get product Detail",
   *      "data":"{}"
   * }
   * @apiSampleRequest /api/product/product-detail/:id
   * @apiErrorExample {json} productDetail error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/product-detail/:id')
  @Authorized()
  public async productDetail(
    @Param('id') id: number,
    @Res() response: Response
  ) {
    const productDetail: any = await this.productService.findOneById(id, {
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

    const productSpecialData = await this.productSpecialService.list({
      select: ['productSpecialId', 'priority', 'price', 'dateStart', 'dateEnd'],
      where: { productId: productDetails.productId },
    });

    const productDiscountData = await this.productDiscountService.list({
      select: [
        'productDiscountId',
        'quantity',
        'priority',
        'price',
        'dateStart',
        'dateEnd',
      ],
      where: { productId: productDetails.productId },
    });

    const finalResult = {
      ...productDetails,
      Category: productToCategory,
      relatedProducts: relatedProductData,
      productSpecial: productSpecialData,
      productDiscount: productDiscountData,
    };

    const successResponse: any = {
      status: 1,
      message: 'Successfully get productDetail',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
  }

  //  Top Selling Product List API
  /**
   * @api {get} /api/product/top-selling-productlist  Top selling ProductList API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get top selling product..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product/top-selling-productlist
   * @apiErrorExample {json} top selling product error
   * HTTP/1.1 500 Internal Server Error
   */
  // Order Detail Function
  @Get('/top-selling-productlist')
  @Authorized()
  public async topSellingProductList(
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const data = await this.productService.recentProductSelling(4);
    const promise = data.map(async (result: any) => {
      const product = await this.productService.findOne({
        select: [
          'productId',
          'image',
          'imagePath',
          'price',
          'name',
          'description',
        ],
        where: { productId: result.product },
      });
      // const temp: any = result;
      const productImage = await this.productImageService.list({
        select: ['productId', 'image', 'containerName'],
        where: {
          productId: result.product,
          defaultImage: 1,
        },
      });
      // temp.product = product;
      // temp.productImage = productImage;
      return { ...result, product, productImage };
    });

    const value = await Promise.all(promise);

    const successResponse: any = {
      status: 1,
      message: 'Successfully get Top Selling Product..!',
      data: value,
    };
    return response.status(200).send(successResponse);
  }

  // Recent Selling Product List
  /**
   * @api {get} /api/product/recent-selling-product  Recent Selling Product List API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "successfully listed recent product selling!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product/recent-selling-product
   * @apiErrorExample {json} Selling Product List error
   * HTTP/1.1 500 Internal Server Errorproduct
   */
  // Recent selling product function
  @Get('/recent-selling-product')
  @Authorized()
  public async sellingProduct(
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const limit = 3;
    const orderList = await this.orderProductService.list({ take: limit });
    const promises = orderList.map(async (result: any) => {
      const order = await this.orderService.list({
        select: ['invoiceNo', 'invoicePrefix', 'orderId', 'orderStatusId'],
        where: { orderId: result.orderId },
      });
      // const temp: any = result;
      // temp.order = order;
      const productImage = await this.productImageService.list({
        where: {
          productId: result.productId,
          defaultImage: 1,
        },
      });
      // temp.productImage = product;
      return { ...result, order, productImage };
    });
    const results = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'successfully listed recently selling products..!',
      data: results,
    };
    return response.status(200).send(successResponse);
  }

  // update product to Today Deals API
  /**
   * @api {put} /api/product/update-todayDeals/:id Update Today Deals API
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {number} todayDeals TodayDeals should be 0 or 1
   * @apiParamExample {json} Input
   * {
   *      "todayDeals" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated product to today Deals.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/product/update-todayDeals/:id
   * @apiErrorExample {json} todayDeals error
   * HTTP/1.1 500 Internal Server Error
   */
  @Put('/update-todayDeals/:id')
  @Authorized()
  public async updateTodayDeals(
    @Param('id') id: number,
    @Body({ validate: true }) updateTodayDealsParam: UpdateTodayDealsParam,
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

    product.todayDeals = updateTodayDealsParam.todayDeals;
    const productSave = await this.productService.create(product);
    if (productSave) {
      const successResponse: any = {
        status: 1,
        message: 'product updated successfully .',
        data: productSave,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to update product',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // Recent viewLog list API
  /**
   * @api {get} /api/product/viewLog-list Product View Log List
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully got Product view Log List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product/viewLog-list
   * @apiErrorExample {json} ViewLog List error
   * HTTP/1.1 500 Internal Server Error
   */

  @Get('/viewLog-list')
  @Authorized()
  public async productViewLogList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const select = [];
    const whereConditions = [];
    const search = [];
    const options: FindManyOptions<ProductViewLog> = {
      take: limit,
      skip: offset,
    };
    if (count) {
      const viewLogsCount = await this.productViewLogService.count(options);
      const successresponse: any = {
        status: 1,
        message: 'Successfully got view log count',
        data: viewLogsCount,
      };
      return response.status(200).send(successresponse);
    }
    const viewLogs = await this.productViewLogService.list(options);

    const successResponse: any = {
      status: 1,
      message: 'Successfully got view log List',
      data: viewLogs,
    };
    return response.status(200).send(successResponse);
  }

  // Customer product view list API
  /**
   * @api {get} /api/product/customerProductView-list/:id Customer product View List
   * @apiGroup Product
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully got Product view Log List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product/customerProductView-list/:id
   * @apiErrorExample {json} customerProductView List error
   * HTTP/1.1 500 Internal Server Error
   */

  @Get('/customerProductView-list/:id')
  @Authorized()
  public async customerProductView(
    @Param('id') id: number,
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const select = [];
    const whereConditions = [
      {
        name: 'customerId',
        value: id,
      },
    ];
    const search = [];
    const options: FindManyOptions<ProductViewLog> = {
      take: limit,
      skip: offset,
      where: {
        customerId: id,
      },
    };

    if (count) {
      const viewLogCount: number = await this.productViewLogService.count(
        options
      );

      const successresponse: any = {
        status: 1,
        message: 'Successfully got view log count',
        data: viewLogCount,
      };
      return response.status(200).send(successresponse);
    }
    const customerProductview = await this.productViewLogService.list(options);

    const successResponse: any = {
      status: 1,
      message: 'Successfully got view log List',
      data: customerProductview,
    };
    return response.status(200).send(successResponse);
  }
  // Product Details Excel Document download
  /**
   * @api {get} /api/product/product-excel-list Product Excel
   * @apiGroup Product
   * @apiParam (Request body) {String} productId productId
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully download the Product Excel List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/product/product-excel-list
   * @apiErrorExample {json} product Excel List error
   * HTTP/1.1 500 Internal Server Error
   */

  @Get('/product-excel-list')
  @Authorized()
  public async excelProductView(
    @QueryParam('productId') productId: string,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const excel = require('exceljs');
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Product Detail Sheet');
    const rows = [];
    const productid = productId.split(',');
    for (const id of productid) {
      const dataId = await this.productService.findOneById(id);
      if (dataId === undefined) {
        const errorResponse: any = {
          status: 0,
          message: 'Invalid productId',
        };
        return response.status(400).send(errorResponse);
      }
    }
    // Excel sheet column define
    worksheet.columns = [
      { header: 'Product Id', key: 'productId', size: 16, width: 15 },
      { header: 'Product Name', key: 'name', size: 16, width: 15 },
      { header: 'Description', key: 'description', size: 16, width: 30 },
      { header: 'Price', key: 'price', size: 16, width: 15 },
      { header: 'SKU', key: 'sku', size: 16, width: 15 },
      { header: 'UPC', key: 'upc', size: 16, width: 15 },
      { header: 'Quantity', key: 'quantity', size: 16, width: 15 },
      {
        header: 'Minimum Quantity',
        key: 'minimumQuantity',
        size: 16,
        width: 19,
      },
      { header: 'Subtract Stock', key: 'subtractstock', size: 16, width: 15 },
      { header: 'Manufacture Id', key: 'manufactureId', size: 16, width: 15 },
      { header: 'Meta Tag Title', key: 'metaTagTitle', size: 16, width: 15 },
    ];
    worksheet.getCell('A1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('B1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('C1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('D1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('E1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('F1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('G1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('H1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('I1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('J1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    worksheet.getCell('K1').border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    for (const id of productid) {
      const dataId = await this.productService.findOneById(id);
      const productDescription = dataId.description;
      const dataDescription = productDescription.replace(
        /(&nbsp;|(<([^>]+)>))/gi,
        ''
      );
      rows.push([
        dataId.productId,
        dataId.name,
        dataDescription.trim(),
        dataId.price,
        dataId.sku,
        dataId.upc,
        dataId.quantity,
        dataId.minimumQuantity,
        dataId.subtractStock,
        dataId.manufacturerId,
        dataId.metaTagTitle,
      ]);
    }
    // Add all rows data in sheet
    worksheet.addRows(rows);
    const fileName = './ProductExcel_' + Date.now() + '.xlsx';
    await workbook.xlsx.writeFile(fileName);
    return new Promise((resolve, reject) => {
      response.download(fileName, (err, data) => {
        if (err) {
          reject(err);
        } else {
          fs.unlinkSync(fileName);
          return response.end();
        }
      });
    });
  }

  // Delete Multiple Product API

  @Post('/delete-product')
  @Authorized()
  public async deleteMultipleProduct(
    @Body({ validate: true }) productDelete: DeleteProductRequest,
    @Res() response: any,
    @Req() request: any
  ): Promise<Product> {
    const productIdNo = productDelete.productId.toString();
    const productid = productIdNo.split(',');
    for (const id of productid) {
      const dataId = await this.productService.findOneById(id);
      if (dataId === undefined) {
        const errorResponse: any = {
          status: 0,
          message: 'Please choose a product for delete',
        };
        return response.status(400).send(errorResponse);
      }
    }
    for (const id of productid) {
      const orderProduct = await this.orderProductService.findOne({
        where: { productId: id },
      });
      if (orderProduct) {
        const errorResponse: any = {
          status: 0,
          message: `${orderProduct.name} (${orderProduct.productId}) is ordered (${orderProduct.orderId})`,
        };
        return response.status(400).send(errorResponse);
      }
    }
    for (const id of productid) {
      const deleteProductId = parseInt(id, 10);
      await this.productService.delete(deleteProductId);
    }
    const successResponse: any = {
      status: 1,
      message: 'Successfully deleted Product',
    };
    return response.status(200).send(successResponse);
  }

  @Delete('/delete-product/:id')
  @Authorized()
  public async deleteProduct(
    @Param('id') productid: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<Product> {
    const product = await this.productService.findOneById(productid);
    if (product === undefined) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid productId',
      };
      return response.status(400).send(errorResponse);
    }
    const orderProduct = await this.orderProductService.findOne({
      where: { productId: productid },
    });
    if (orderProduct) {
      const errorResponse: any = {
        status: 0,
        message: `${orderProduct.name} (${orderProduct.productId}) is ordered (${orderProduct.orderId})`,
      };
      return response.status(400).send(errorResponse);
    }
    const deleteProduct = await this.productService.delete(productid);

    if (deleteProduct) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully deleted Product',
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to delete product',
      };
      return response.status(400).send(errorResponse);
    }
  }
}
