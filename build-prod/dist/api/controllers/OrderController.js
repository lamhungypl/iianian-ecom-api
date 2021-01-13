'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.OrderController = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const routing_controllers_1 = require('routing-controllers');
const OrderService_1 = require('../services/OrderService');
const CustomerService_1 = require('../services/CustomerService');
const UpdateOrderChangeStatus_1 = require('./requests/UpdateOrderChangeStatus');
const OrderLogService_1 = require('../services/OrderLogService');
const OrderProductService_1 = require('../services/OrderProductService');
const ProductService_1 = require('../services/ProductService');
const orderStatusService_1 = require('../services/orderStatusService');
const ProductSpecialService_1 = require('../services/ProductSpecialService');
const ProductDiscountService_1 = require('../services/ProductDiscountService');
const ProductImageService_1 = require('../services/ProductImageService');
const typeorm_1 = require('typeorm');
const lodash_1 = require('lodash');
const fs = tslib_1.__importStar(require('fs'));
const DeleteOrderRequest_1 = require('./requests/DeleteOrderRequest');
const moment_1 = tslib_1.__importDefault(require('moment'));
let OrderController = class OrderController {
  constructor(
    orderService,
    customerService,
    productService,
    orderLogService,
    orderProductService,
    productDiscountService,
    orderStatusService,
    productSpecialService,
    productImageService
  ) {
    this.orderService = orderService;
    this.customerService = customerService;
    this.productService = productService;
    this.orderLogService = orderLogService;
    this.orderProductService = orderProductService;
    this.productDiscountService = productDiscountService;
    this.orderStatusService = orderStatusService;
    this.productSpecialService = productSpecialService;
    this.productImageService = productImageService;
  }
  // order List API
  /**
   * @api {get} /api/order/orderlist Order List API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {Number} orderId search by orderId
   * @apiParam (Request body) {String} orderStatusId search by orderStatusId
   * @apiParam (Request body) {String} customerName search by customerName
   * @apiParam (Request body) {Number} totalAmount search by totalAmount
   * @apiParam (Request body) {Number} dateAdded search by dateAdded
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get order list",
   *      "data":{
   *      "orderId" : "",
   *      "orderStatusId" : "",
   *      "customerName" : "",
   *      "totalAmount" : "",
   *      "dateAdded" : "",
   *      "dateModified" : "",
   *      "status" : "",
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order/orderlist
   * @apiErrorExample {json} order error
   * HTTP/1.1 500 Internal Server Error
   */
  orderList(
    limit,
    offset,
    orderId,
    orderStatusId,
    customerName,
    dateAdded,
    count,
    totalAmount = '',
    response
  ) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
          where: lodash_1.pickBy(
            {
              orderPrefixId:
                (orderId && typeorm_1.Like(`%${orderId}%`)) || undefined,
              orderStatusId: orderStatusId || undefined,
              shippingFirstname:
                (customerName && typeorm_1.Like(`%${customerName}%`)) ||
                undefined,
              createdDate:
                (dateAdded && typeorm_1.Like(`%${dateAdded}%`)) || undefined,
              total:
                (totalAmount &&
                  typeorm_1.MoreThan(lodash_1.toNumber(totalAmount))) ||
                undefined,
            },
            value => value != null
          ),
        }
      );
      if (count) {
        const orderCount = yield this.orderService.count(options);
        const res = {
          status: 1,
          message: 'Successfully got count.',
          data: orderCount,
        };
        return response.status(200).send(res);
      }
      const orderList = yield this.orderService.list(options);
      const orderStatus = orderList.map(value =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          // OrderList API
          const status = yield this.orderStatusService.findOne({
            where: { orderStatusId: value.orderStatusId },
            select: ['orderStatusId', 'name', 'colorCode'],
          });
          const temp = value;
          temp.orderStatus = status;
          return temp;
        })
      );
      const results = yield Promise.all(orderStatus);
      const successResponse = {
        status: 1,
        message: 'Successfully got the complete order list.',
        data: results,
      };
      return response.status(200).send(successResponse);
    });
  }
  //  Order Detail API
  /**
   * @api {get} /api/order/order-detail  Order Detail API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} orderId Order Id
   * @apiParamExample {json} Input
   * {
   *      "orderId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully show the Order Detail..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/order/order-detail
   * @apiErrorExample {json} Order Detail error
   * HTTP/1.1 500 Internal Server Error
   */
  // Order Detail Function
  orderDetail(orderId, request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const orderData = yield this.orderService.list({
        where: { orderId: orderId },
        select: [
          'orderId',
          'orderStatusId',
          'telephone',
          'invoiceNo',
          'invoicePrefix',
          'orderPrefixId',
          'shippingFirstname',
          'shippingLastname',
          'shippingCompany',
          'shippingAddress1',
          'shippingAddress2',
          'shippingCity',
          'shippingZone',
          'shippingPostcode',
          'shippingCountry',
          'shippingAddressFormat',
          'paymentFirstname',
          'paymentLastname',
          'paymentCompany',
          'paymentAddress1',
          'paymentAddress2',
          'paymentCity',
          'paymentPostcode',
          'paymentCountry',
          'paymentZone',
          'paymentAddressFormat',
          'total',
          'customerId',
          'createdDate',
        ],
      });
      const promises = orderData.map(result =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const product = yield this.orderProductService
            .list({
              where: { orderId: orderId },
              select: [
                'orderProductId',
                'orderId',
                'productId',
                'name',
                'model',
                'quantity',
                'total',
                'productPrice',
              ],
            })
            .then(val => {
              console.log(val);
              const productVal = val.map(value =>
                tslib_1.__awaiter(this, void 0, void 0, function* () {
                  const productDetail = yield this.productService.findOne({
                    where: { productId: value.productId },
                    select: [
                      'name',
                      'quantity',
                      'minimumQuantity',
                      'image',
                      'imagePath',
                      'shipping',
                      'price',
                      'dateAvailable',
                      'amount',
                      'rating',
                      'discount',
                      'isActive',
                    ],
                  });
                  const image = yield this.productImageService.findOne({
                    select: ['image', 'containerName'],
                    where: { productId: value.productId, defaultImage: 1 },
                  });
                  // const orderOption = await this.orderOptionService.find({where: {orderProductId: value.orderProductId},
                  //     select: ['name', 'value', 'type', 'orderOptionId', 'orderProductId']});
                  // const rating = await this.productRatingService.findOne({select: ['rating', 'review'], where: {customerId : result.customerId, orderProductId : value.orderProductId, productId: value.productId}});
                  const tempVal = value;
                  const nowDate = new Date();
                  const todaydate = moment_1
                    .default(nowDate)
                    .format('DD-MM-YYYY');
                  const productSpecial = yield this.productSpecialService.findSpecialPrice(
                    value.productId,
                    todaydate
                  );
                  const productDiscount = yield this.productDiscountService.findDiscountPrice(
                    value.productId,
                    todaydate
                  );
                  if (productSpecial !== undefined) {
                    tempVal.pricerefer = productSpecial.price;
                    tempVal.flag = 1;
                  } else if (productDiscount !== undefined) {
                    tempVal.pricerefer = productDiscount.price;
                    tempVal.flag = 0;
                  } else {
                    tempVal.pricerefer = '';
                    tempVal.flag = '';
                  }
                  tempVal.productDetail = Object.assign({}, productDetail);
                  tempVal.productDetail.productImage = image;
                  // tempVal.orderOptions = orderOption;
                  // if (rating !== undefined) {
                  //     tempVal.rating = rating.rating;
                  //     tempVal.review = rating.review;
                  // } else {
                  //     tempVal.rating = 0;
                  //     tempVal.review = '';
                  // }
                  return tempVal;
                })
              );
              const results = Promise.all(productVal);
              return results;
            });
          const orderStatusData = yield this.orderStatusService.findOne({
            where: { orderStatusId: result.orderStatusId },
            select: ['name', 'colorCode'],
          });
          let str = JSON.stringify(orderStatusData);
          str = str.replace(/name/g, 'orderStatusName');
          str = str.replace(/colorCode/g, 'statusColorCode');
          const orderStatus = JSON.parse(str);
          const data = result;
          const temp = Object.assign({}, data, orderStatus);
          temp.productList = product;
          const customer = yield this.customerService.findOne({
            where: { id: result.customerId },
            select: [
              'firstName',
              'lastName',
              'username',
              'mobileNumber',
              'email',
              'city',
              'address',
              'pincode',
              'countryId',
              'zoneId',
            ],
          });
          //console.log(customer);
          temp.customerDetail = customer;
          return temp;
        })
      );
      const resultData = yield Promise.all(promises);
      const successResponse = {
        status: 1,
        message: 'Successfully shown the order Detail. ',
        data: resultData,
      };
      return response.status(200).send(successResponse);
    });
  }
  // sales List API
  /**
   * @api {get} /api/order/saleslist Sales List API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get sales count list",
   *      "data":{
   *      }
   * }
   * @apiSampleRequest /api/order/saleslist
   * @apiErrorExample {json} sales error
   * HTTP/1.1 500 Internal Server Error
   */
  salesList(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const orderList = yield this.orderService.salesList();
      //console.log(orderList);
      const promises = orderList.map(result =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const monthNames = [
            '',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          const temp = result;
          temp.monthYear = monthNames[result.month] + '-' + result.year;
          return temp;
        })
      );
      const finalResult = yield Promise.all(promises);
      const successResponse = {
        status: 1,
        message: 'Successfully get sales count List',
        data: finalResult,
      };
      return response.status(200).send(successResponse);
    });
  }
  // total order amount API
  /**
   * @api {get} /api/order/total-order-amount total Order Amount API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get total order amount",
   *      "data":{
   *      "count" : "",
   *      }
   * }
   * @apiSampleRequest /api/order/total-order-amount
   * @apiErrorExample {json} order error
   * HTTP/1.1 500 Internal Server Error
   */
  totalOrderAmount(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      let total = 0;
      const order = yield this.orderService.list({});
      let n = 0;
      for (n; n < order.length; n++) {
        total += +order[n].total;
      }
      if (order) {
        const successResponse = {
          status: 1,
          message: 'Successfully get total order Amount',
          data: total,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to get total order amount',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
  // today order amount API
  /**
   * @api {get} /api/order/today-order-amount today Order Amount API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "status": "1"
   *      "message": "Successfully get today order amount",
   *      "data":{
   *      }
   * }
   * @apiSampleRequest /api/order/today-order-amount
   * @apiErrorExample {json} order error
   * HTTP/1.1 500 Internal Server Error
   */
  todayOrderAmount(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const nowDate = new Date();
      const todaydate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      //console.log(todaydate);
      try {
        const orderTotal = yield this.orderService.findAllTodayOrder(todaydate);
        const successResponse = {
          status: 1,
          message: 'Successfully get today order Amount',
          data: orderTotal || 0,
        };
        return response.status(200).send(successResponse);
      } catch (error) {
        const errorResponse = {
          status: 0,
          message: 'unable to get today order amount',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
  // Today order count API
  /**
   * @api {get} /api/order/today-order-count Today OrderCount API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get Today order count",
   *      "data":{
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order/today-order-count
   * @apiErrorExample {json} order error
   * HTTP/1.1 500 Internal Server Error
   */
  orderCount(response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const nowDate = new Date();
      const todaydate =
        nowDate.getFullYear() +
        '-' +
        (nowDate.getMonth() + 1) +
        '-' +
        nowDate.getDate();
      const orderCount = yield this.orderService.findAllTodayOrderCount(
        todaydate
      );
      const successResponse = {
        status: 1,
        message: 'Successfully get Today order count',
        data: orderCount,
      };
      return response.status(200).send(successResponse);
    });
  }
  // Change order Status API
  /**
   * @api {post} /api/order/order-change-status   Change Order Status API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} orderId Order Id
   * @apiParam (Request body) {Number} orderStatusId order Status Id
   * @apiParamExample {json} Input
   * {
   *   "orderDetails" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated order change status.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order/order-change-status
   * @apiErrorExample {json} order error
   * HTTP/1.1 500 Internal Server Error
   */
  orderChangeStatus(orderChangeStatus, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const updateOrder = yield this.orderService.findOneById(
        orderChangeStatus.orderId
      );
      //console.log(updateOrder);
      if (!updateOrder) {
        const errorResponse = {
          status: 0,
          message: 'invalid order Id',
        };
        return response.status(400).send(errorResponse);
      }
      yield this.orderLogService.create(updateOrder);
      //console.log(updateOrder);
      updateOrder.orderStatusId = orderChangeStatus.orderStatusId;
      //console.log(updateOrder.orderStatusId);
      const orderSave = yield this.orderService.create(updateOrder);
      if (orderSave) {
        const successResponse = {
          status: 1,
          message: 'Successfully updated Order Status',
          data: orderSave,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to updated OrderStatus',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
  // Order Details Excel Document download
  /**
   * @api {get} /api/order/order-excel-list Order Excel
   * @apiGroup Order
   * @apiParam (Request body) {String} orderId orderId
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully download the Order Excel List..!!",
   *      "status": "1",
   *      "data": {},
   * }
   * @apiSampleRequest /api/order/order-excel-list
   * @apiErrorExample {json} Order Excel List error
   * HTTP/1.1 500 Internal Server Error
   */
  excelOrderView(orderId, request, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const excel = require('exceljs');
      const workbook = new excel.Workbook();
      const worksheet = workbook.addWorksheet('Order Detail Sheet');
      const rows = [];
      const orderid = orderId.split(',');
      for (const id of orderid) {
        const dataId = yield this.orderService.list({ where: { orderId: id } });
        if (dataId.length === 0) {
          const errorResponse = {
            status: 0,
            message: 'Invalid orderId',
          };
          return response.status(400).send(errorResponse);
        }
      }
      // Excel sheet column define
      worksheet.columns = [
        { header: 'Order Id', key: 'orderPrefixId', size: 16, width: 15 },
        {
          header: 'Customer Name',
          key: 'shippingFirstname',
          size: 16,
          width: 15,
        },
        { header: 'Email', key: 'email', size: 16, width: 15 },
        { header: 'Mobile Number', key: 'telephone', size: 16, width: 15 },
        { header: 'Total Amount', key: 'total', size: 16, width: 15 },
        { header: 'Created Date', key: 'createdDate', size: 16, width: 15 },
        { header: 'Updated Date', key: 'modifiedDate', size: 16, width: 15 },
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
      for (const id of orderid) {
        const dataId = yield this.orderService.findOneById(id);
        rows.push([
          dataId.orderPrefixId,
          dataId.shippingFirstname + ' ' + dataId.shippingLastname,
          dataId.email,
          dataId.telephone,
          dataId.total,
          dataId.createdDate,
          dataId.modifiedDate,
        ]);
      }
      // Add all rows data in sheet
      worksheet.addRows(rows);
      const fileName = './OrderExcel_' + Date.now() + '.xlsx';
      yield workbook.xlsx.writeFile(fileName);
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
    });
  }
  // Delete Order API
  /**
   * @api {delete} /api/order/delete-order/:id Delete Single Order API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "id" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   * "message": "Successfully deleted Order.",
   * "status": "1"
   * }
   * @apiSampleRequest /api/order/delete-order/:id
   * @apiErrorExample {json} orderDelete error
   * HTTP/1.1 500 Internal Server Error
   */
  deleteOrder(orderid, response, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const orderData = yield this.orderService.list({
        where: { orderId: orderid },
      });
      if (orderData.length === 0) {
        const errorResponse = {
          status: 0,
          message: 'Invalid orderId',
        };
        return response.status(400).send(errorResponse);
      }
      const deleteOrder = yield this.orderService.delete(orderid);
      if (deleteOrder) {
        const successResponse = {
          status: 1,
          message: 'Order Deleted Successfully',
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to delete Order',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
  // Delete Multiple Order API
  /**
   * @api {post} /api/order/delete-order Delete Order API
   * @apiGroup Order
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {number} orderId orderId
   * @apiParamExample {json} Input
   * {
   * "orderId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   * "message": "Successfully deleted Order.",
   * "status": "1"
   * }
   * @apiSampleRequest /api/order/delete-order
   * @apiErrorExample {json} orderDelete error
   * HTTP/1.1 500 Internal Server Error
   */
  deleteMultipleOrder(orderDelete, response, request) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const orderIdNo = orderDelete.orderId.toString();
      const orderid = orderIdNo.split(',');
      for (const id of orderid) {
        const orderData = yield this.orderService.list({
          where: { orderId: id },
        });
        if (orderData.length === 0) {
          const errorResponse = {
            status: 0,
            message: 'Please choose a order for delete',
          };
          return response.status(400).send(errorResponse);
        }
      }
      for (const id of orderid) {
        const deleteOrderId = parseInt(id, 10);
        yield this.orderService.delete(deleteOrderId);
      }
      const successResponse = {
        status: 1,
        message: 'Order Deleted Successfully',
      };
      return response.status(200).send(successResponse);
    });
  }
};
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/order-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')),
    tslib_1.__param(1, routing_controllers_1.QueryParam('offset')),
    tslib_1.__param(2, routing_controllers_1.QueryParam('orderId')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('orderStatusId')),
    tslib_1.__param(4, routing_controllers_1.QueryParam('customerName')),
    tslib_1.__param(5, routing_controllers_1.QueryParam('dateAdded')),
    tslib_1.__param(6, routing_controllers_1.QueryParam('count')),
    tslib_1.__param(
      7,
      routing_controllers_1.QueryParam('totalAmount', { type: 'string' })
    ),
    tslib_1.__param(8, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      String,
      String,
      String,
      String,
      String,
      String,
      Object,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'orderList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/order-detail'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('orderId')),
    tslib_1.__param(1, routing_controllers_1.Req()),
    tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Number, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'orderDetail',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/saleslist'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'salesList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/total-order-amount'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'totalOrderAmount',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/today-order-amount'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'todayOrderAmount',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/today-order-count'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'orderCount',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Post('/order-change-status'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      UpdateOrderChangeStatus_1.UpdateOrderChangeStatus,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'orderChangeStatus',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/order-excel-list'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.QueryParam('orderId')),
    tslib_1.__param(1, routing_controllers_1.Req()),
    tslib_1.__param(2, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [String, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'excelOrderView',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Delete('/delete-order/:id'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Number, Object, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'deleteOrder',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Post('/delete-order'),
    routing_controllers_1.Authorized(),
    tslib_1.__param(0, routing_controllers_1.Body({ validate: true })),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__param(2, routing_controllers_1.Req()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      DeleteOrderRequest_1.DeleteOrderRequest,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  OrderController.prototype,
  'deleteMultipleOrder',
  null
);
OrderController = tslib_1.__decorate(
  [
    routing_controllers_1.JsonController('/order'),
    tslib_1.__metadata('design:paramtypes', [
      OrderService_1.OrderService,
      CustomerService_1.CustomerService,
      ProductService_1.ProductService,
      OrderLogService_1.OrderLogService,
      OrderProductService_1.OrderProductService,
      ProductDiscountService_1.ProductDiscountService,
      orderStatusService_1.OrderStatusService,
      ProductSpecialService_1.ProductSpecialService,
      ProductImageService_1.ProductImageService,
    ]),
  ],
  OrderController
);
exports.OrderController = OrderController;
//# sourceMappingURL=OrderController.js.map
