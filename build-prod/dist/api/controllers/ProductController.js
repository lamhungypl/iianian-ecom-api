'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProductController = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const routing_controllers_1 = require('routing-controllers');
const ProductService_1 = require('../services/ProductService');
const ProductToCategoryService_1 = require('../services/ProductToCategoryService');
const ProductImageService_1 = require('../services/ProductImageService');
const ProductModel_1 = require('../models/ProductModel');
const ProductDiscount_1 = require('../models/ProductDiscount');
const ProductSpecial_1 = require('../models/ProductSpecial');
const class_transformer_1 = require('class-transformer');
const deleteProductRequest_1 = require('./requests/deleteProductRequest');
const createProductRequest_1 = require('./requests/createProductRequest');
const updateProductRequest_1 = require('./requests/updateProductRequest');
const ProductToCategory_1 = require('../models/ProductToCategory');
const ProductImage_1 = require('../models/ProductImage');
const categoryService_1 = require('../services/categoryService');
const OrderProductService_1 = require('../services/OrderProductService');
const OrderService_1 = require('../services/OrderService');
const ProductRelated_1 = require('../models/ProductRelated');
const ProductRelatedService_1 = require('../services/ProductRelatedService');
const UpdateTodayDealsParam_1 = require('./requests/UpdateTodayDealsParam');
const ProductViewLogService_1 = require('../services/ProductViewLogService');
const ProductDiscountService_1 = require('../services/ProductDiscountService');
const ProductSpecialService_1 = require('../services/ProductSpecialService');
const moment_1 = tslib_1.__importDefault(require('moment'));
const typeorm_1 = require('typeorm');
const lodash_1 = require('lodash');
const fs_1 = tslib_1.__importDefault(require('fs'));
let ProductController = class ProductController {
  constructor(
    productService,
    productToCategoryService,
    productImageService,
    categoryService,
    orderProductService,
    orderService,
    productRelatedService,
    productViewLogService,
    productDiscountService,
    productSpecialService
  ) {
    this.productService = productService;
    this.productToCategoryService = productToCategoryService;
    this.productImageService = productImageService;
    this.categoryService = categoryService;
    this.orderProductService = orderProductService;
    this.orderService = orderService;
    this.productRelatedService = productRelatedService;
    this.productViewLogService = productViewLogService;
    this.productDiscountService = productDiscountService;
    this.productSpecialService = productSpecialService;
  }
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
  productList(
    limit,
    offset,
    keyword,
    sku,
    status,
    // @QueryParam('price') price: number,
    count,
    response
  ) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const relation = ['productToCategory', 'relatedproduct'];
      const options = Object.assign(
        Object.assign(
          {},
          lodash_1.pickBy(
            {
              take: (limit && lodash_1.parseInt(limit)) || undefined,
              skip: (offset && lodash_1.parseInt(offset)) || undefined,
            },
            value => lodash_1.isNumber(value)
          )
        ),
        {
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
          where: lodash_1.pickBy(
            {
              name: (keyword && typeorm_1.Like(`%${keyword}%`)) || undefined,
              sku: (sku && typeorm_1.Like(`%${sku}%`)) || undefined,
              isActive: (status && parseInt(status)) || 1,
            },
            value => value != null
          ),
        }
      );
      if (count) {
        const productCount = yield this.productService.productCount(options);
        const successRes = {
          status: 1,
          message: 'Successfully got count ',
          data: productCount,
        };
        return response.status(200).send(successRes);
      }
      const productLists = yield this.productService.productList(options);
      const productList = productLists.map(value =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const defaultValue = yield this.productImageService.findOne({
            where: {
              productId: value.productId,
              defaultImage: 1,
            },
          });
          const temp = value;
          const nowDate = new Date();
          const todaydate =
            nowDate.getFullYear() +
            '-' +
            (nowDate.getMonth() + 1) +
            '-' +
            nowDate.getDate();
          const productSpecial = yield this.productSpecialService.findSpecialPrice(
            value.productId,
            todaydate
          );
          const productDiscount = yield this.productDiscountService.findDiscountPrice(
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
        })
      );
      const results = yield Promise.all(productList);
      const successResponse = {
        status: 1,
        message: 'Successfully got the complete product list. ',
        data: class_transformer_1.classToPlain(results),
      };
      return response.status(200).send(successResponse);
    });
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
  addProduct(product, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      //console.log(product);
      // let productOptions = [];
      // let optionValue = [];
      const newProduct = new ProductModel_1.Product();
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
      newProduct.dateAvailable = moment_1
        .default(product.dateAvailable)
        .toISOString();
      newProduct.metaTagTitle = product.metaTagTitle;
      newProduct.condition = product.condition;
      newProduct.manufacturerId = product.model;
      newProduct.isActive = product.status;
      newProduct.isFeatured = 0;
      newProduct.todayDeals = 0;
      newProduct.sortOrder = product.sortOrder;
      const saveProduct = yield this.productService.create(newProduct);
      // Add related product
      if (product.relatedProductId) {
        const relatedProduct = product.relatedProductId;
        for (const relatedproduct of relatedProduct) {
          const newRelatedProduct = new ProductRelated_1.ProductRelated();
          newRelatedProduct.productId = saveProduct.productId;
          newRelatedProduct.relatedProductId = relatedproduct;
          this.productRelatedService.create(newRelatedProduct);
        }
      }
      // save category
      if (product.categoryId) {
        const category = product.categoryId;
        for (const categoryId of category) {
          const newProductToCategory = new ProductToCategory_1.ProductToCategory();
          newProductToCategory.productId = saveProduct.productId;
          newProductToCategory.categoryId = categoryId;
          newProductToCategory.isActive = 1;
          this.productToCategoryService.create(newProductToCategory);
        }
      }
      // Save products Image
      const productImage = product.image;
      for (const imageRow of productImage) {
        const imageData = JSON.stringify(imageRow);
        const imageResult = JSON.parse(imageData);
        const newProductImage = new ProductImage_1.ProductImage();
        newProductImage.productId = saveProduct.productId;
        newProductImage.image = imageResult.image;
        newProductImage.containerName = imageResult.containerName;
        newProductImage.defaultImage = imageResult.defaultImage;
        this.productImageService.create(newProductImage);
      }
      // Product Discount
      if (product.productDiscount) {
        const productDiscount = product.productDiscount;
        for (const discount of productDiscount) {
          const discountData = new ProductDiscount_1.ProductDiscount();
          discountData.productId = saveProduct.productId;
          discountData.quantity = discount.discountQuantity;
          discountData.priority = discount.discountPriority;
          discountData.price = discount.discountPrice;
          discountData.dateStart = moment_1
            .default(discount.discountDateStart)
            .toISOString();
          discountData.dateEnd = moment_1
            .default(discount.discountDateEnd)
            .toISOString();
          yield this.productDiscountService.create(discountData);
        }
      }
      // Product Special
      if (product.productSpecial) {
        const productSpecial = product.productSpecial;
        for (const special of productSpecial) {
          const specialPriceData = new ProductSpecial_1.ProductSpecial();
          specialPriceData.productId = saveProduct.productId;
          specialPriceData.priority = special.specialPriority;
          specialPriceData.price = special.specialPrice;
          specialPriceData.dateStart = moment_1
            .default(special.specialDateStart)
            .toISOString();
          specialPriceData.dateEnd = moment_1
            .default(special.specialDateEnd)
            .toISOString();
          yield this.productSpecialService.create(specialPriceData);
        }
      }
      if (saveProduct) {
        const successResponse = {
          status: 1,
          message: 'Successfully created Product',
          data: saveProduct,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to create Product',
        };
        return response.status(400).send(errorResponse);
      }
    });
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
  updateProduct(product, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      //console.log(product);
      const updateProduct = yield this.productService.findOne({
        where: {
          productId: product.productId,
        },
      });
      if (!updateProduct) {
        const errorResponse = {
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
      updateProduct.dateAvailable = moment_1
        .default(product.dateAvailable)
        .toISOString();
      updateProduct.metaTagTitle = product.metaTagTitle;
      updateProduct.manufacturerId = product.model;
      updateProduct.condition = product.condition;
      updateProduct.isActive = product.status;
      updateProduct.sortOrder = product.sortOrder;
      const saveProduct = yield this.productService.create(updateProduct);
      // delete previous category
      this.productToCategoryService.delete({
        productId: saveProduct.productId,
      });
      // save category
      if (product.categoryId) {
        const category = product.categoryId;
        for (const categoryId of category) {
          const newProductToCategory = new ProductToCategory_1.ProductToCategory();
          newProductToCategory.productId = saveProduct.productId;
          newProductToCategory.categoryId = categoryId;
          newProductToCategory.isActive = 1;
          this.productToCategoryService.create(newProductToCategory);
        }
      }
      const findProduct = yield this.productRelatedService.findOne({
        where: {
          productId: saveProduct.productId,
        },
      });
      if (findProduct) {
        // delete previous related product
        this.productRelatedService.delete({ productId: saveProduct.productId });
        // update related product
        if (product.relatedProductId) {
          const relatedProduct = product.relatedProductId;
          for (const relatedproduct of relatedProduct) {
            const newRelatedProduct = new ProductRelated_1.ProductRelated();
            newRelatedProduct.productId = saveProduct.productId;
            newRelatedProduct.relatedProductId = relatedproduct;
            this.productRelatedService.create(newRelatedProduct);
          }
        }
      } else {
        // update related product
        if (product.relatedProductId) {
          const relatedProduct = product.relatedProductId;
          for (const relatedproduct of relatedProduct) {
            const newRelatedProduct = new ProductRelated_1.ProductRelated();
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
        const productImage = product.image;
        for (const imageRow of productImage) {
          const imageData = JSON.stringify(imageRow);
          const imageResult = JSON.parse(imageData);
          const newProductImage = new ProductImage_1.ProductImage();
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
        const productDiscount = product.productDiscount;
        for (const discount of productDiscount) {
          const discountData = new ProductDiscount_1.ProductDiscount();
          discountData.productId = saveProduct.productId;
          discountData.quantity = discount.discountQuantity;
          discountData.priority = discount.discountPriority;
          discountData.price = discount.discountPrice;
          discountData.dateStart = moment_1
            .default(discount.discountDateStart)
            .toISOString();
          discountData.dateEnd = moment_1
            .default(discount.discountDateEnd)
            .toISOString();
          yield this.productDiscountService.create(discountData);
        }
      }
      // Delete the Product special price
      this.productSpecialService.delete({ productId: saveProduct.productId });
      // Product Special
      if (product.productSpecial) {
        const productSpecial = product.productSpecial;
        for (const special of productSpecial) {
          const specialPriceData = new ProductSpecial_1.ProductSpecial();
          specialPriceData.productId = saveProduct.productId;
          specialPriceData.customerGroupId = special.customerGroupId;
          specialPriceData.priority = special.specialPriority;
          specialPriceData.price = special.specialPrice;
          specialPriceData.dateStart = moment_1
            .default(special.specialDateStart)
            .toISOString();
          specialPriceData.dateEnd = moment_1
            .default(special.specialDateEnd)
            .toISOString();
          yield this.productSpecialService.create(specialPriceData);
        }
      }
      if (saveProduct) {
        const successResponse = {
          status: 1,
          message: 'Successfully updated Product',
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to updated Product',
        };
        return response.status(400).send(errorResponse);
      }
    });
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
  productDetail(id, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const productDetail = yield this.productService.findOneById(id, {
        relations: ['productImage'],
      });
      const productDetails = class_transformer_1.classToPlain(productDetail);
      const productToCategory = yield this.productToCategoryService
        .list({
          select: ['categoryId', 'productId'],
          where: { productId: productDetails.productId },
        })
        .then(val => {
          const category = val.map(value =>
            tslib_1.__awaiter(this, void 0, void 0, function* () {
              const categoryNames = yield this.categoryService.findOne({
                where: {
                  categoryId: value.categoryId,
                },
              });
              const JsonData = JSON.stringify(categoryNames);
              const ParseData = JSON.parse(JsonData);
              const temp = value;
              temp.categoryName = ParseData.name;
              return temp;
            })
          );
          const results = Promise.all(category);
          return results;
        });
      const relatedProductData = yield this.productRelatedService
        .list({ where: { productId: productDetails.productId } })
        .then(val => {
          const relatedProduct = val.map(value =>
            tslib_1.__awaiter(this, void 0, void 0, function* () {
              const productId = value.relatedProductId;
              const product = yield this.productService.findOne({
                select: ['productId', 'name'],
                where: { productId },
                relations: ['productImage'],
              });
              return class_transformer_1.classToPlain(product);
            })
          );
          const resultData = Promise.all(relatedProduct);
          return resultData;
        });
      const productSpecialData = yield this.productSpecialService.list({
        select: [
          'productSpecialId',
          'priority',
          'price',
          'dateStart',
          'dateEnd',
        ],
        where: { productId: productDetails.productId },
      });
      const productDiscountData = yield this.productDiscountService.list({
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
      const finalResult = Object.assign(Object.assign({}, productDetails), {
        Category: productToCategory,
        relatedProducts: relatedProductData,
        productSpecial: productSpecialData,
        productDiscount: productDiscountData,
      });
      const successResponse = {
        status: 1,
        message: 'Successfully get productDetail',
        data: finalResult,
      };
      return response.status(200).send(successResponse);
    });
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
  topSellingProductList(request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const data = yield this.productService.recentProductSelling(4);
      const promise = data.map(result =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const product = yield this.productService.findOne({
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
          const productImage = yield this.productImageService.list({
            select: ['productId', 'image', 'containerName'],
            where: {
              productId: result.product,
              defaultImage: 1,
            },
          });
          // temp.product = product;
          // temp.productImage = productImage;
          return Object.assign(Object.assign({}, result), {
            product,
            productImage,
          });
        })
      );
      const value = yield Promise.all(promise);
      const successResponse = {
        status: 1,
        message: 'Successfully get Top Selling Product..!',
        data: value,
      };
      return response.status(200).send(successResponse);
    });
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
  sellingProduct(request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const limit = 3;
      const orderList = yield this.orderProductService.list({ take: limit });
      const promises = orderList.map(result =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const order = yield this.orderService.list({
            select: ['invoiceNo', 'invoicePrefix', 'orderId', 'orderStatusId'],
            where: { orderId: result.orderId },
          });
          // const temp: any = result;
          // temp.order = order;
          const productImage = yield this.productImageService.list({
            where: {
              productId: result.productId,
              defaultImage: 1,
            },
          });
          // temp.productImage = product;
          return Object.assign(Object.assign({}, result), {
            order,
            productImage,
          });
        })
      );
      const results = yield Promise.all(promises);
      const successResponse = {
        status: 1,
        message: 'successfully listed recently selling products..!',
        data: results,
      };
      return response.status(200).send(successResponse);
    });
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
  updateTodayDeals(id, updateTodayDealsParam, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const product = yield this.productService.findOne({
        where: {
          productId: id,
        },
      });
      if (!product) {
        const errorResponse = {
          status: 0,
          message: 'Invalid productId',
        };
        return response.status(400).send(errorResponse);
      }
      product.todayDeals = updateTodayDealsParam.todayDeals;
      const productSave = yield this.productService.create(product);
      if (productSave) {
        const successResponse = {
          status: 1,
          message: 'product updated successfully .',
          data: productSave,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to update product',
        };
        return response.status(400).send(errorResponse);
      }
    });
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
  productViewLogList(limit, offset, count, request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const select = [];
      const whereConditions = [];
      const search = [];
      const options = {
        take: limit,
        skip: offset,
      };
      if (count) {
        const viewLogsCount = yield this.productViewLogService.count(options);
        const successresponse = {
          status: 1,
          message: 'Successfully got view log count',
          data: viewLogsCount,
        };
        return response.status(200).send(successresponse);
      }
      const viewLogs = yield this.productViewLogService.list(options);
      const successResponse = {
        status: 1,
        message: 'Successfully got view log List',
        data: viewLogs,
      };
      return response.status(200).send(successResponse);
    });
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
  customerProductView(id, limit, offset, count, request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const select = [];
      const whereConditions = [
        {
          name: 'customerId',
          value: id,
        },
      ];
      const search = [];
      const options = {
        take: limit,
        skip: offset,
        where: {
          customerId: id,
        },
      };
      if (count) {
        const viewLogCount = yield this.productViewLogService.count(options);
        const successresponse = {
          status: 1,
          message: 'Successfully got view log count',
          data: viewLogCount,
        };
        return response.status(200).send(successresponse);
      }
      const customerProductview = yield this.productViewLogService.list(
        options
      );
      const successResponse = {
        status: 1,
        message: 'Successfully got view log List',
        data: customerProductview,
      };
      return response.status(200).send(successResponse);
    });
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
  excelProductView(productId, request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const excel = require('exceljs');
      const workbook = new excel.Workbook();
      const worksheet = workbook.addWorksheet('Product Detail Sheet');
      const rows = [];
      const productid = productId.split(',');
      for (const id of productid) {
        const dataId = yield this.productService.findOneById(id);
        if (dataId === undefined) {
          const errorResponse = {
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
        const dataId = yield this.productService.findOneById(id);
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
      yield workbook.xlsx.writeFile(fileName);
      return new Promise((resolve, reject) => {
        response.download(fileName, (err, data) => {
          if (err) {
            reject(err);
          } else {
            fs_1.default.unlinkSync(fileName);
            return response.end();
          }
        });
      });
    });
  }
  // Delete Multiple Product API
  deleteMultipleProduct(productDelete, response, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const productIdNo = productDelete.productId.toString();
      const productid = productIdNo.split(',');
      for (const id of productid) {
        const dataId = yield this.productService.findOneById(id);
        if (dataId === undefined) {
          const errorResponse = {
            status: 0,
            message: 'Please choose a product for delete',
          };
          return response.status(400).send(errorResponse);
        }
      }
      for (const id of productid) {
        const orderProduct = yield this.orderProductService.findOne({
          where: { productId: id },
        });
        if (orderProduct) {
          const errorResponse = {
            status: 0,
            message: `${orderProduct.name} (${orderProduct.productId}) is ordered (${orderProduct.orderId})`,
          };
          return response.status(400).send(errorResponse);
        }
      }
      for (const id of productid) {
        const deleteProductId = parseInt(id, 10);
        yield this.productService.delete(deleteProductId);
      }
      const successResponse = {
        status: 1,
        message: 'Successfully deleted Product',
      };
      return response.status(200).send(successResponse);
    });
  }
  deleteProduct(productid, response, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const product = yield this.productService.findOneById(productid);
      if (product === undefined) {
        const errorResponse = {
          status: 0,
          message: 'Invalid productId',
        };
        return response.status(400).send(errorResponse);
      }
      const orderProduct = yield this.orderProductService.findOne({
        where: { productId: productid },
      });
      if (orderProduct) {
        const errorResponse = {
          status: 0,
          message: `${orderProduct.name} (${orderProduct.productId}) is ordered (${orderProduct.orderId})`,
        };
        return response.status(400).send(errorResponse);
      }
      const deleteProduct = yield this.productService.delete(productid);
      if (deleteProduct) {
        const successResponse = {
          status: 1,
          message: 'Successfully deleted Product',
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to delete product',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
};
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/productlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')),
    tslib_1.__param(1, routing_controllers_1.QueryParam('offset')),
    tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('sku')),
    tslib_1.__param(4, routing_controllers_1.QueryParam('status')),
    tslib_1.__param(5, routing_controllers_1.QueryParam('count')),
    tslib_1.__param(6, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      String,
      String,
      String,
      String,
      String,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'productList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Post('/add-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      createProductRequest_1.AddProductRequest,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'addProduct',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Post('/update-product/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      updateProductRequest_1.UpdateProductRequest,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'updateProduct',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/product-detail/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Number, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'productDetail',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/top-selling-productlist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Req()),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'topSellingProductList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/recent-selling-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Req()),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'sellingProduct',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Put('/update-todayDeals/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Number,
      UpdateTodayDealsParam_1.UpdateTodayDealsParam,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'updateTodayDeals',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/viewLog-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')),
    tslib_1.__param(1, routing_controllers_1.QueryParam('offset')),
    tslib_1.__param(2, routing_controllers_1.QueryParam('count')),
    tslib_1.__param(3, routing_controllers_1.Req()),
    tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Number,
      Number,
      Object,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'productViewLogList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/customerProductView-list/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.QueryParam('limit')),
    tslib_1.__param(2, routing_controllers_1.QueryParam('offset')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('count')),
    tslib_1.__param(4, routing_controllers_1.Req()),
    tslib_1.__param(5, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      Number,
      Number,
      Number,
      Object,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'customerProductView',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/product-excel-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('productId')),
    tslib_1.__param(1, routing_controllers_1.Req()),
    tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [String, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'excelProductView',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Post('/delete-product'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      deleteProductRequest_1.DeleteProductRequest,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'deleteMultipleProduct',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Delete('/delete-product/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Number, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ProductController.prototype,
  'deleteProduct',
  null
);
ProductController = tslib_1.__decorate(
  [
    routing_controllers_1.JsonController('/product'),
    tslib_1.__metadata('design:paramtypes', [
      ProductService_1.ProductService,
      ProductToCategoryService_1.ProductToCategoryService,
      ProductImageService_1.ProductImageService,
      categoryService_1.CategoryService,
      OrderProductService_1.OrderProductService,
      OrderService_1.OrderService,
      ProductRelatedService_1.ProductRelatedService,
      ProductViewLogService_1.ProductViewLogService,
      ProductDiscountService_1.ProductDiscountService,
      ProductSpecialService_1.ProductSpecialService,
    ]),
  ],
  ProductController
);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map
