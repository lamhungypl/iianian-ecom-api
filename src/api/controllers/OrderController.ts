import 'reflect-metadata';
import {
  Get,
  JsonController,
  Authorized,
  QueryParam,
  Res,
  Req,
  Post,
  Body,
  Delete,
  Param,
} from 'routing-controllers';
import { OrderService } from '../services/OrderService';
import { CustomerService } from '../services/CustomerService';
import { UpdateOrderChangeStatus } from './requests/UpdateOrderChangeStatus';
import { OrderLogService } from '../services/OrderLogService';
import { OrderProductService } from '../services/OrderProductService';
import { ProductService } from '../services/ProductService';
import { OrderStatusService } from '../services/orderStatusService';
import { ProductSpecialService } from '../services/ProductSpecialService';
import { ProductDiscountService } from '../services/ProductDiscountService';
import { ProductImageService } from '../services/ProductImageService';
import { FindManyOptions, Like, MoreThan } from 'typeorm';
import { Order } from '../models/Order';
import { isNumber, pickBy, toNumber, parseInt as _parseInt } from 'lodash';
import { Response } from 'express';

import * as fs from 'fs';
import { DeleteOrderRequest } from './requests/DeleteOrderRequest';
import { OrderLog } from '../models/OrderLog';
import moment from 'moment';

@JsonController('/order')
export class OrderController {
  constructor(
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    private orderLogService: OrderLogService,
    private orderProductService: OrderProductService,
    private productDiscountService: ProductDiscountService,
    private orderStatusService: OrderStatusService,
    private productSpecialService: ProductSpecialService,
    private productImageService: ProductImageService
  ) {}

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
  @Get('/order-list')
  @Authorized()
  public async orderList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('orderId') orderId: string,
    @QueryParam('orderStatusId') orderStatusId: string,
    @QueryParam('customerName') customerName: string,
    @QueryParam('dateAdded') dateAdded: string,
    @QueryParam('count') count: number | boolean,
    @QueryParam('totalAmount', { type: 'string' }) totalAmount = '',
    @Res() response: Response
  ) {
    const options: FindManyOptions<Order> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      where: pickBy(
        {
          orderPrefixId: (orderId && Like(`%${orderId}%`)) || undefined,
          orderStatusId: orderStatusId || undefined,
          shippingFirstname:
            (customerName && Like(`%${customerName}%`)) || undefined,
          createdDate: (dateAdded && Like(`%${dateAdded}%`)) || undefined,
          total: (totalAmount && MoreThan(toNumber(totalAmount))) || undefined,
        },
        value => value != null
      ),
    };
    if (count) {
      const orderCount = await this.orderService.count(options);
      const res = {
        status: 1,
        message: 'Successfully got count.',
        data: orderCount,
      };
      return response.status(200).send(res);
    }
    const orderList = await this.orderService.list(options);

    const orderStatus = orderList.map(async value => {
      // OrderList API

      const status = await this.orderStatusService.findOne({
        where: { orderStatusId: value.orderStatusId },
        select: ['orderStatusId', 'name', 'colorCode'],
      });
      const temp = value;
      temp.orderStatus = status;
      return temp;
    });
    const results = await Promise.all(orderStatus);
    const successResponse = {
      status: 1,
      message: 'Successfully got the complete order list.',
      data: results,
    };
    return response.status(200).send(successResponse);
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
  @Get('/order-detail')
  @Authorized()
  public async orderDetail(
    @QueryParam('orderId') orderId: number,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const orderData = await this.orderService.list({
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
    const promises = orderData.map(async (result: any) => {
      const product = await this.orderProductService
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
          const productVal = val.map(async (value: any) => {
            const productDetail = await this.productService.findOne({
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
            const image = await this.productImageService.findOne({
              select: ['image', 'containerName'],
              where: { productId: value.productId, defaultImage: 1 },
            });
            // const orderOption = await this.orderOptionService.find({where: {orderProductId: value.orderProductId},
            //     select: ['name', 'value', 'type', 'orderOptionId', 'orderProductId']});
            // const rating = await this.productRatingService.findOne({select: ['rating', 'review'], where: {customerId : result.customerId, orderProductId : value.orderProductId, productId: value.productId}});
            const tempVal: any = value;
            const nowDate = new Date();
            const todaydate = moment(nowDate).format('DD-MM-YYYY');
            const productSpecial = await this.productSpecialService.findSpecialPrice(
              value.productId,
              todaydate
            );
            const productDiscount = await this.productDiscountService.findDiscountPrice(
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

            tempVal.productDetail = { ...productDetail };
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
          });
          const results = Promise.all(productVal);
          return results;
        });
      const orderStatusData = await this.orderStatusService.findOne({
        where: { orderStatusId: result.orderStatusId },
        select: ['name', 'colorCode'],
      });
      let str = JSON.stringify(orderStatusData);
      str = str.replace(/name/g, 'orderStatusName');
      str = str.replace(/colorCode/g, 'statusColorCode');
      const orderStatus = JSON.parse(str);
      const data: any = result;
      const temp: any = Object.assign({}, data, orderStatus);
      temp.productList = product;
      const customer = await this.customerService.findOne({
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
    });
    const resultData = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Successfully shown the order Detail. ',
      data: resultData,
    };
    return response.status(200).send(successResponse);
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
  @Get('/saleslist')
  @Authorized()
  public async salesList(@Res() response: any): Promise<any> {
    const orderList = await this.orderService.salesList();
    //console.log(orderList);
    const promises = orderList.map(async (result: any) => {
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
      const temp: any = result;
      temp.monthYear = monthNames[result.month] + '-' + result.year;
      return temp;
    });
    const finalResult = await Promise.all(promises);
    const successResponse: any = {
      status: 1,
      message: 'Successfully get sales count List',
      data: finalResult,
    };
    return response.status(200).send(successResponse);
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
  @Get('/total-order-amount')
  @Authorized()
  public async totalOrderAmount(@Res() response: any): Promise<any> {
    let total = 0;
    const order = await this.orderService.list({});
    let n = 0;
    for (n; n < order.length; n++) {
      total += +order[n].total;
    }
    if (order) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully get total order Amount',
        data: total,
      };

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to get total order amount',
      };
      return response.status(400).send(errorResponse);
    }
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
  @Get('/today-order-amount')
  @Authorized()
  public async todayOrderAmount(@Res() response: any): Promise<any> {
    const nowDate = new Date();
    const todaydate =
      nowDate.getFullYear() +
      '-' +
      (nowDate.getMonth() + 1) +
      '-' +
      nowDate.getDate();
    //console.log(todaydate);

    try {
      const orderTotal = await this.orderService.findAllTodayOrder(todaydate);
      const successResponse: any = {
        status: 1,
        message: 'Successfully get today order Amount',
        data: orderTotal || 0,
      };

      return response.status(200).send(successResponse);
    } catch (error) {
      const errorResponse: any = {
        status: 0,
        message: 'unable to get today order amount',
      };
      return response.status(400).send(errorResponse);
    }
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
  @Get('/today-order-count')
  @Authorized()
  public async orderCount(@Res() response: any): Promise<any> {
    const nowDate = new Date();
    const todaydate =
      nowDate.getFullYear() +
      '-' +
      (nowDate.getMonth() + 1) +
      '-' +
      nowDate.getDate();

    const orderCount = await this.orderService.findAllTodayOrderCount(
      todaydate
    );
    const successResponse: any = {
      status: 1,
      message: 'Successfully get Today order count',
      data: orderCount,
    };
    return response.status(200).send(successResponse);
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
  @Post('/order-change-status')
  @Authorized()
  public async orderChangeStatus(
    @Body({ validate: true }) orderChangeStatus: UpdateOrderChangeStatus,
    @Res() response: any
  ): Promise<any> {
    const updateOrder = await this.orderService.findOneById(
      orderChangeStatus.orderId
    );
    //console.log(updateOrder);
    if (!updateOrder) {
      const errorResponse: any = {
        status: 0,
        message: 'invalid order Id',
      };
      return response.status(400).send(errorResponse);
    }

    await this.orderLogService.create((updateOrder as unknown) as OrderLog);
    //console.log(updateOrder);

    updateOrder.orderStatusId = orderChangeStatus.orderStatusId;
    //console.log(updateOrder.orderStatusId);

    const orderSave = await this.orderService.create(updateOrder);
    if (orderSave) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully updated Order Status',
        data: orderSave,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to updated OrderStatus',
      };
      return response.status(400).send(errorResponse);
    }
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

  @Get('/order-excel-list')
  @Authorized()
  public async excelOrderView(
    @QueryParam('orderId') orderId: string,
    @Req() request: any,
    @Res() response: any
  ): Promise<any> {
    const excel = require('exceljs');
    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet('Order Detail Sheet');
    const rows = [];
    const orderid = orderId.split(',');
    for (const id of orderid) {
      const dataId = await this.orderService.list({ where: { orderId: id } });
      if (dataId.length === 0) {
        const errorResponse: any = {
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
      const dataId = await this.orderService.findOneById(id);
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
  @Delete('/delete-order/:id')
  @Authorized()
  public async deleteOrder(
    @Param('id') orderid: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const orderData = await this.orderService.list({
      where: { orderId: orderid },
    });
    if (orderData.length === 0) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid orderId',
      };
      return response.status(400).send(errorResponse);
    }
    const deleteOrder = await this.orderService.delete(orderid);
    if (deleteOrder) {
      const successResponse: any = {
        status: 1,
        message: 'Order Deleted Successfully',
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to delete Order',
      };
      return response.status(400).send(errorResponse);
    }
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
  @Post('/delete-order')
  @Authorized()
  public async deleteMultipleOrder(
    @Body({ validate: true }) orderDelete: DeleteOrderRequest,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const orderIdNo = orderDelete.orderId.toString();
    const orderid = orderIdNo.split(',');
    for (const id of orderid) {
      const orderData = await this.orderService.list({
        where: { orderId: id },
      });
      if (orderData.length === 0) {
        const errorResponse: any = {
          status: 0,
          message: 'Please choose a order for delete',
        };
        return response.status(400).send(errorResponse);
      }
    }

    for (const id of orderid) {
      const deleteOrderId = parseInt(id, 10);
      await this.orderService.delete(deleteOrderId);
    }
    const successResponse: any = {
      status: 1,
      message: 'Order Deleted Successfully',
    };
    return response.status(200).send(successResponse);
  }
}
