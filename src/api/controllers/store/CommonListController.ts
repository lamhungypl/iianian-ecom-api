import 'reflect-metadata';
import {
  Get,
  JsonController,
  Res,
  Req,
  QueryParam,
  Body,
  Post,
} from 'routing-controllers';
import { BannerService } from '../../services/bannerService';
import { MAILService } from '../../../auth/mail.services';
import { classToPlain } from 'class-transformer';
import { CategoryService } from '../../services/categoryService';
import {
  // FindManyProductOptions,
  ProductService,
} from '../../services/ProductService';
import arrayToTree from 'array-to-tree';
import { ProductRelated } from '../../models/ProductRelated';
import { ProductRelatedService } from '../../services/ProductRelatedService';
import { ProductImageService } from '../../services/ProductImageService';
import { CustomerWishlistService } from '../../services/CustomerWishlistService';
import jwt from 'jsonwebtoken';
import { CountryService } from '../../services/countryService';
import { ContactService } from '../../services/ContactService';
import { ContactRequest } from './requests/ContactRequest';
import { Contact } from '../../models/Contact';
import { EmailTemplateService } from '../../services/emailTemplateService';
import { ZoneService } from '../../services/zoneService';
import { LanguageService } from '../../services/languageService';
import { ProductDiscountService } from '../../services/ProductDiscountService';
import { ProductSpecialService } from '../../services/ProductSpecialService';
import { ProductToCategoryService } from '../../services/ProductToCategoryService';
import { isNumber, orderBy, pickBy, parseInt as _parseInt } from 'lodash';
import {
  Brackets,
  FindConditions,
  FindManyOptions,
  Like,
  ObjectLiteral,
  SelectQueryBuilder,
} from 'typeorm';
import { Product } from '../../models/ProductModel';
import { Category } from 'src/api/models/categoryModel';
import { Country } from '../../models/country';
import { Zone } from 'src/api/models/zone';
import { Banner } from 'src/api/models/banner';
import { Language } from 'src/api/models/language';
import { ProductToCategory } from 'src/api/models/ProductToCategory';

@JsonController('/list')
export class CommonListController {
  constructor(
    private bannerService: BannerService,
    private categoryService: CategoryService,
    private productRelatedService: ProductRelatedService,
    private productService: ProductService,
    private productImageService: ProductImageService,
    private languageService: LanguageService,
    private customerWishlistService: CustomerWishlistService,
    private countryService: CountryService,
    private contactService: ContactService,
    private emailTemplateService: EmailTemplateService,
    private zoneService: ZoneService,
    private productDiscountService: ProductDiscountService,
    private productSpecialService: ProductSpecialService,
    private productToCategoryService: ProductToCategoryService
  ) {}

  // Banner List API
  /**
   * @api {get} /api/list/banner-list Banner List
   * @apiGroup Store List
   * @apiParam (Request body) {Number} limit Limit
   * @apiParam (Request body) {Number} offset Offset
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiParamExample {json} Input
   * {
   *      "limit" : "",
   *      "offset": "",
   *      "count": "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Thank you Banner list show successfully..!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/banner-list
   * @apiErrorExample {json} Banner List error
   * HTTP/1.1 500 Internal Server Error
   */
  // Product list Function
  @Get('/banner-list')
  public async bannerList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('keyword') keyword = '',
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'bannerId',
      'title',
      'image',
      'imagePath',
      'content',
      'link',
      'position',
    ];
    const search = [
      {
        name: 'title',
        op: 'like',
        value: keyword,
      },
    ];
    const WhereConditions = [];

    const options: FindManyOptions<Banner> = {
      take: limit,
      skip: offset,

      select: [
        'bannerId',
        'title',
        'image',
        'imagePath',
        'content',
        'link',
        'position',
      ],
      where: {
        title: Like(`%${keyword}%`),
      },
    };
    if (count) {
      const bannerListCount = await this.bannerService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully got banner list count',
        data: bannerListCount,
      };
      return response.status(200).send(successResponse);
    }

    const bannerList: any = await this.bannerService.list(options);
    const successResponse: any = {
      status: 1,
      message: 'Successfully got banner list',
      data: bannerList,
    };
    return response.status(200).send(successResponse);
  }

  // Category List API
  /**
   * @api {get} /api/list/category-list Category List
   * @apiGroup Store List
   * @apiParam (Request body) {Number} limit Limit
   * @apiParam (Request body) {Number} offset Offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} sortOrder sortOrder
   * @apiParam (Request body) {Number} count count in number or boolean
   * @apiParamExample {json} Input
   * {
   *      "limit" : "",
   *      "offset": "",
   *      "keyorder": "",
   *      "sortOrder": "",
   *      "count": "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Category listed successfully..!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/category-list
   * @apiErrorExample {json} Category List error
   * HTTP/1.1 500 Internal Server Error
   */
  // Category List Function
  @Get('/category-list')
  public async CategoryList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('sortOrder') sortOrder: string,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Category> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'categoryId',
        'name',
        'image',
        'imagePath',
        'parentInt',
        'sortOrder',
        'metaTagTitle',
        'metaTagDescription',
        'metaTagKeyword',
      ],
      where: pickBy<
        | FindConditions<Category>
        | FindConditions<Category>[]
        | { [key: string]: any }
      >(
        {
          name: (keyword && Like(`%${keyword}%`)) || undefined,
        },
        value => value != null
      ),
      order: {
        name: (sortOrder === '-1' && 'DESC') || 'ASC',
      },
    };

    if (count) {
      const categoryDataCount = await this.categoryService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully get All category List',
        data: categoryDataCount,
      };
      return response.status(200).send(successResponse);
    } else {
      const categoryData = await this.categoryService.list(options);
      const categoryList = arrayToTree(categoryData, {
        parentProperty: 'parentInt',
        customID: 'categoryId',
      });
      const successResponse: any = {
        status: 1,
        message: 'Successfully got the list of categories.',
        data: categoryList,
      };
      return response.status(200).send(successResponse);
    }
  }

  // Related Product Adding API
  /**
   * @api {post} /api/list/add-related-product Add a Related Product
   * @apiGroup Store List
   * @apiParam (Request body) {Number} productId Product Id
   * @apiParam (Request body) {string} relatedProductId Related Product Id
   * @apiParamExample {json} Input
   * {
   *      "productId" : "",
   *      "relatedProductId": "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Related Product adding successfully..!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/add-related-product
   * @apiErrorExample {json} Related Product Adding error
   * HTTP/1.1 500 Internal Server Error
   */
  // Category List Function
  @Post('/add-related-product')
  public async addRelatedProduct(
    @Body({ validate: true }) productParam: any,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const productId = productParam.productId;
    const relatedProductId = productParam.relatedProductId;
    const eachData: any = relatedProductId.split(',');
    let i;
    for (i = 0; i < eachData.length; i++) {
      const relatedProduct = new ProductRelated();
      relatedProduct.productId = productId;
      relatedProduct.relatedProductId = eachData[i];
      await this.productRelatedService.create(relatedProduct);
    }
    const successResponse: any = {
      status: 1,
      message: 'Successfully added the related products.',
    };
    return response.status(200).send(successResponse);
  }

  // Product List API
  /**
   * @api {get} /api/list/productlist Product List API
   * @apiGroup Store List
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} manufacturerId manufacturerId
   * @apiParam (Request body) {String} categoryId categoryId
   * @apiParam (Request body) {Number} priceFrom price from you want to list
   * @apiParam (Request body) {Number} priceTo price to you want to list
   * @apiParam (Request body) {Number} price orderBy 0->desc 1->asc
   * @apiParam (Request body) {Number} condition  1->new 2->used
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {String} count count in boolean or number
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get product list",
   *      "data":"{}"
   * }
   * @apiSampleRequest /api/list/productlist
   * @apiErrorExample {json} productList error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/productlist')
  public async productList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('manufacturerId') manufacturerId: string,
    @QueryParam('categoryId') categoryId: string,
    @QueryParam('priceFrom') priceFrom: string,
    @QueryParam('priceTo') priceTo: string,
    @QueryParam('price') price: number,
    @QueryParam('condition') condition: number,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const products = await this.productService.repository.manager
      .createQueryBuilder(Product, 'product')
      .leftJoinAndSelect('product.productToCategory', 'productToCategory')
      .where('productToCategory.categoryId = :categoryId', { categoryId })
      .getMany();

    const relation = ['productToCategory', 'relatedproduct'];

    const options: FindManyOptions<Product> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      relations: relation,
      where: pickBy<
        | FindConditions<Product>[]
        | FindConditions<Product>
        | { [key: string]: any }
      >(
        {
          name: (keyword && Like(`%${keyword}%`)) || undefined,
          manufacturerId:
            (manufacturerId && Like(`%${manufacturerId}%`)) || undefined,
          condition: (condition && Like(`%${condition}%`)) || undefined,
          isActive: 1,
          // categoryId: categoryId || undefined,
          // 'productToCategory.categoryId': categoryId,
        },
        value => value != null
      ),
      // join: {
      //   alias: 'product',
      //   leftJoinAndSelect: {
      //     productToCategory: 'product.productToCategory',
      //   },
      // },
    };

    if (count) {
      const productCount = await this.productService.productCount(options);
      const maximumPrice: any = await this.productService.productMaxPrice();

      const res = {
        status: 1,
        message: 'Successfully got Products count',
        data: { productCount, maximumProductPrice: maximumPrice },
      };
      return response.status(200).send(res);
    }
    const productList: Product[] = await this.productService.productList(
      options
    );
    const promises = products.map(async (result: Product) => {
      const productToCategory = await this.productToCategoryService
        .list({
          select: ['categoryId', 'productId'],
          where: { productId: result.productId },
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
            const tempValue: any = value;
            tempValue.categoryName = ParseData.name;
            return tempValue;
          });
          const results = Promise.all(category);
          return results;
        });
      const productImage = await this.productImageService.findOne({
        select: ['productId', 'image', 'containerName', 'defaultImage'],
        where: {
          productId: result.productId,
          defaultImage: 1,
        },
      });
      const temp: any = result;
      temp.Images = productImage;
      temp.Category = productToCategory;
      const nowDate = new Date();
      const todaydate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      const productSpecial = await this.productSpecialService.findSpecialPrice(
        result.productId,
        todaydate
      );
      const productDiscount = await this.productDiscountService.findDiscountPrice(
        result.productId,
        todaydate
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
      if (request.header('authorization')) {
        const userId = jwt.verify(
          request.header('authorization').split(' ')[1],
          '123##$$)(***&'
        );
        const userUniqueId: any = Object.keys(userId).map((key: any) => {
          return [key, userId[key]];
        });
        //console.log(userUniqueId[0][1]);
        const wishStatus = await this.customerWishlistService.findOne({
          where: {
            productId: result.productId,
            customerId: userUniqueId[0][1],
          },
        });
        if (wishStatus) {
          result.wishListStatus = 1;
          await this.productService.create(result);
        }
      } else {
        result.wishListStatus = 0;
        await this.productService.create(result);
      }
      return temp;
    });
    const finalResult = await Promise.all(promises);
    // const maximum: any = ['Max(product.price) As maximumProductPrice'];
    const maximumPrice: any = await this.productService.productMaxPrice();
    // const productPrice: any = maximumPrice.maximumProductPrice;
    const successResponse: any = {
      status: 1,
      message: 'Successfully got the complete list of products.',
      data: {
        maximumProductPrice: maximumPrice,
        productList: finalResult,
      },
    };
    return response.status(200).send(successResponse);
  }
  // Custom Product List API
  /**
   * @api {get} /api/list/custom-product-list Custom Product List API
   * @apiGroup Store List
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} manufacturerId manufacturerId
   * @apiParam (Request body) {String} categoryId categoryId
   * @apiParam (Request body) {Number} priceFrom price from you want to list
   * @apiParam (Request body) {Number} priceTo price to you want to list
   * @apiParam (Request body) {String} price ASC OR DESC
   * @apiParam (Request body) {Number} condition  1->new 2->used
   * @apiParam (Request body) {String} keyword keyword
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get product list",
   *      "data":"{}"
   * }
   * @apiSampleRequest /api/list/custom-product-list
   * @apiErrorExample {json} productList error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/custom-product-list')
  public async customProductList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('keyword') keyword: string,
    @QueryParam('manufacturerId') manufacturerId: string,
    @QueryParam('categoryId') categoryId: string,
    @QueryParam('priceFrom') priceFrom: string,
    @QueryParam('priceTo') priceTo: string,
    @QueryParam('price') price: string,
    @QueryParam('condition') condition: number,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    // TODO

    const options1: FindManyOptions<Product> = {
      take: limit,
      skip: offset,
      relations: ['productToCategory'],
      where: {
        name: keyword,
        manufacturerId: manufacturerId,
        productToCategory: { categoryId },
      },
    };
    const options: FindManyOptions<Product> = {
      take: limit,
      skip: offset,
      // relations: ['productToCategory'],
      join: {
        alias: 'product',
        leftJoin: { productToCategory: 'product.productToCategory' },
      },
      where: (qb: SelectQueryBuilder<Product>) => {
        qb.where({
          // Filter Role fields
          name: Like(`%${keyword}%`),
          manufacturerId: manufacturerId,
        }).andWhere('productToCategory.categoryId =:categoryId', {
          categoryId,
        });
      },
    };
    console.log('options', JSON.stringify(options));

    const test = await this.productService.list(options);
    console.log({ test });

    if (count) {
      const productCount = await this.productService.productCount(options);
      const maximumPrice: any = await this.productService.productMaxPrice();

      const res = {
        status: 1,
        message: 'Successfully got Products count',
        data: { productCount, maximumProductPrice: maximumPrice },
      };
      return response.status(200).send(res);
    }

    const productList: any = await this.productService.list({
      take: 10,
      skip: 0,
    });

    // const productList: any = await this.productService.list(
    //   limit,
    //   offset,
    //   categoryId,
    //   manufacturerId,
    //   condition,
    //   keyword,
    //   priceFrom,
    //   priceTo,
    //   price
    // );
    const promises = test.map(async (result: any) => {
      const productImage = await this.productImageService.findOne({
        select: ['productId', 'image', 'containerName', 'defaultImage'],
        where: {
          productId: result.productId,
          defaultImage: 1,
        },
      });
      const temp: any = result;
      temp.Images = productImage;
      return temp;
    });
    const finalResult = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Successfully got the complete list of products.',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
  }
  // Related Product Showing API
  /**
   * @api {get} /api/list/related-product-list Related Product List
   * @apiGroup Store List
   * @apiParam (Request body) {Number} productId Product Id
   * @apiParam (Request body) {Number} count
   * @apiParamExample {json} Input
   * {
   *      "productId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Related Product List Showing Successfully..!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/related-product-list
   * @apiErrorExample {json} Related Product List error
   * HTTP/1.1 500 Internal Server Error
   */
  // Category List Function
  @Get('/related-product-list')
  public async relatedProductList(
    @QueryParam('productId') productid: number,
    @QueryParam('count') count: number | boolean,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const whereConditions = [
      {
        productId: productid,
      },
    ];
    const options: FindManyOptions<ProductRelated> = {
      where: {
        productId: productid,
      },
    };

    if (count) {
      const relatedDataCount: number = await this.productRelatedService.count(
        options
      );
      const Response: any = {
        status: 1,
        message: 'Related product list is successfully being shown. ',
        data: relatedDataCount,
      };
      return response.status(200).send(Response);
    }
    const relatedData = await this.productRelatedService.list(options);
    const promises = relatedData.map(async (results: any) => {
      const Id = results.relatedProductId;
      const product = await this.productService.findOne({
        select: [
          'productId',
          'name',
          'price',
          'description',
          'quantity',
          'rating',
        ],
        where: { productId: Id },
      });
      const Image = await this.productImageService.findOne({
        where: { productId: Id, defaultImage: 1 },
      });
      const temp: any = product;
      temp.productImage = Image;
      return temp;
    });
    const result = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Related product list is successfully being shown. ',
      data: classToPlain(result),
    };
    return response.status(200).send(successResponse);
  }

  // Country List API
  /**
   * @api {get} /api/list/country-list Country List API
   * @apiGroup Store List
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get country list",
   *      "data":{
   *      "countryId"
   *      "name"
   *      "isoCode2"
   *      "isoCode3"
   *      "addressFormat"
   *      "postcodeRequired"
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/country-list
   * @apiErrorExample {json} countryFront error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/country-list')
  public async countryList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword', { type: 'string' }) keyword = '',
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Country> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'countryId',
        'name',
        'isoCode2',
        'isoCode3',
        'postcodeRequired',
        'isActive',
      ],
      where: {
        name: Like(`%${keyword}%`),
        isActive: 1,
      },
    };

    if (count) {
      const countryCount: number = await this.countryService.count(options);
      const successResponse = {
        status: 1,
        message: 'Successfully got the count of countries.',
        data: countryCount,
      };
      return response.status(200).send(successResponse);
    }

    const countryList = await this.countryService.list(options);
    const successResponse: any = {
      status: 1,
      message: 'Successfully got the list of countries.',
      data: countryList,
    };
    return response.status(200).send(successResponse);
  }

  // Contact Us API
  /**
   * @api {post} /api/list/contact-us  Contact Us API
   * @apiGroup Store List
   * @apiParam (Request body) {String} name Name
   * @apiParam (Request body) {String} email Email
   * @apiParam (Request body) {String} phoneNumber Phone Number
   * @apiParam (Request body) {String} message Message
   * @apiParamExample {json} Input
   * {
   *      "name" : "",
   *      "email" : "",
   *      "phoneNumber" : "",
   *      "message" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Your mail send to admin..!",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/contact-us
   * @apiErrorExample {json} Contact error
   * HTTP/1.1 500 Internal Server Error
   */
  // ContactUs Function
  @Post('/contact-us')
  public async userContact(
    @Body({ validate: true }) contactParam: ContactRequest,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const contactInformation = new Contact();
    contactInformation.name = contactParam.name;
    contactInformation.email = contactParam.email;
    contactInformation.phoneNumber = contactParam.phoneNumber;
    contactInformation.message = contactParam.message;
    const informationData = await this.contactService.create(
      contactInformation
    );
    const emailContent = await this.emailTemplateService.findOneById(3);
    const message = emailContent.content
      .replace('{name}', informationData.name)
      .replace('{email}', informationData.email)
      .replace('{phoneNumber}', informationData.phoneNumber)
      .replace('{message}', informationData.message);
    const sendMailRes = MAILService.contactMail(message, emailContent.subject);
    if (sendMailRes) {
      const successResponse: any = {
        status: 1,
        message: 'Your request Successfully send',
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'Mail does not send',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // Zone List API
  /**
   * @api {get} /api/list/zone-list Zone List API
   * @apiGroup Store List
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get zone list",
   *      "data":{
   *      "countryId"
   *      "code"
   *      "name"
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/zone-list
   * @apiErrorExample {json} Zone error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/zone-list')
  public async zonelist(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Zone> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: ['zoneId', 'countryId', 'code', 'name', 'isActive'],
      relations: ['country'],
      where: {
        name: Like(`%${keyword}%`),
        isActive: 1,
      },
    };

    if (count) {
      const zoneCount: number = await this.zoneService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully get all zone List',
        data: zoneCount,
      };
      return response.status(200).send(successResponse);
    }

    const zoneList: Zone[] = await this.zoneService.list(options);

    if (zoneList) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully get all zone List',
        data: classToPlain(zoneList),
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 1,
        message: 'unable to get zone List',
      };
      return response.status(400).send(errorResponse);
    }
  }

  // Language List API
  /**
   * @api {get} /api/list/language-list Language List API
   * @apiGroup Store List
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully got language list",
   *      "data":{
   *      "languageId"
   *      "name"
   *      "status"
   *      "code"
   *      "sortOrder"
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/list/language-list
   * @apiErrorExample {json} Language error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/language-list')
  public async languageList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'languageId',
      'name',
      'code',
      'image',
      'imagePath',
      'isActive',
      'sortOrder',
      'isActive',
    ];
    const search = [
      {
        name: 'name',
        op: 'like',
        value: keyword,
      },
      {
        name: 'isActive',
        op: 'where',
        value: 1,
      },
    ];
    const WhereConditions = [];

    const options: FindManyOptions<Language> = {
      take: limit,
      skip: offset,
      select: [
        'languageId',
        'name',
        'code',
        'image',
        'imagePath',
        'isActive',
        'sortOrder',
        'isActive',
      ],
      where: {
        name: Like(`%${keyword}%`),
        isActive: 1,
      },
    };

    if (count) {
      const languageListCount: number = await this.languageService.count(
        options
      );
      const successResponse = {
        status: 1,
        message: 'successfully got the complete language list count.',
        data: languageListCount,
      };
      return response.status(200).send(successResponse);
    }

    const languageList: Language[] = await this.languageService.list(options);

    if (languageList) {
      const successResponse: any = {
        status: 1,
        message: 'successfully got the complete language list.',
        data: languageList,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to show language list',
      };
      return response.status(400).send(errorResponse);
    }
  }
}
