import { Response } from 'express';
import { isNumber, pickBy, parseInt as _parseInt } from 'lodash';
import 'reflect-metadata';
import {
  Get,
  Post,
  Put,
  Delete,
  Body,
  JsonController,
  Authorized,
  Res,
  Req,
  QueryParam,
  Param,
} from 'routing-controllers';
import { logApiResponse } from '../../lib/helpers';
import { FindConditions, FindManyOptions, Like } from 'typeorm';
import { OrderStatus } from '../models/orderStatus';
import { OrderStatusService } from '../services/orderStatusService';
import { CreateOrderStatus } from './requests/createOrderStatusRequest';

@JsonController('/order-status')
export class OrderStatusController {
  constructor(private orderStatusService: OrderStatusService) {}

  // Create Order Status API
  /**
   * @api {post} /api/order-status/create-order-status Create OrderStatus API
   * @apiGroup OrderStatus
   * @apiParam (Request body) {String} name name
   * @apiParam (Request body) {String} colorCode colorCode
   * @apiParam (Request body) {Number} status status
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "name" : "",
   *      "colorCode" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "New OrderStatus is created successfully",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order-status/create-order-status
   * @apiErrorExample {json} createOrderStatus error
   * HTTP/1.1 500 Internal Server Error
   */
  @Post('/create-order-status')
  @Authorized()
  public async createOrderStatus(
    @Body({ validate: true }) orderStatusParam: CreateOrderStatus,
    @Res() response: any
  ): Promise<any> {
    const newOrderStatus = new OrderStatus();
    newOrderStatus.name = orderStatusParam.name;
    newOrderStatus.colorCode = orderStatusParam.colorCode;
    newOrderStatus.isActive = orderStatusParam.status;

    const orderStatusSave = await this.orderStatusService.create(
      newOrderStatus
    );
    if (orderStatusSave !== undefined) {
      const successResponse: any = {
        status: 1,
        message: 'successfully created a new order status.',
        data: orderStatusSave,
      };
      logApiResponse({
        '/order-status/create-order-status': successResponse,
      });
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to create OrderStatus',
      };
      logApiResponse({
        '/order-status/create-order-status': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }
  }

  // update Order Status API
  /**
   * @api {put} /api/order-status/update-order-status/:id Update OrderStatus API
   * @apiGroup OrderStatus
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {String} name OrderStatus name
   * @apiParam (Request body) {String} colorCode colorCode
   * @apiParam (Request body) {Number} status status
   * @apiParamExample {json} Input
   * {
   *      "name" : "",
   *      "colorCode" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated orderStatus.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order-status/update-order-status/:id
   * @apiErrorExample {json} OrderStatus error
   * HTTP/1.1 500 Internal Server Error
   */
  @Put('/update-order-status/:id')
  @Authorized()
  public async updateOrderStatus(
    @Body({ validate: true }) orderStatusParams: CreateOrderStatus,
    @Param('id') id: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const orderStatus = await this.orderStatusService.findOne({
      where: {
        orderStatusId: id,
      },
    });
    if (!orderStatus) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid orderStatusId',
      };
      logApiResponse({
        '/order-status/update-order-status/:id': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }
    orderStatus.name = orderStatusParams.name;
    orderStatus.colorCode = orderStatusParams.colorCode;
    orderStatus.isActive = orderStatusParams.status;
    const orderStatusSave = await this.orderStatusService.create(orderStatus);
    //console.log('orderStatus' + orderStatusSave);
    if (orderStatusSave !== undefined) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully updated the order status.',
        data: orderStatusSave,
      };
      logApiResponse({
        '/order-status/update-order-status/:id': successResponse,
      });
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 1,
        message: 'unable to update OrderStatus.',
      };
      logApiResponse({
        '/order-status/update-order-status/:id': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }
  }

  // Order Status List API
  /**
   * @api {get} /api/order-status/order-status-list OrderStatus List API
   * @apiGroup OrderStatus
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {String} count count
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get orderStatus list",
   *      "data":"{}"
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order-status/order-status-list
   * @apiErrorExample {json} OrderStatus error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/order-status-list')
  @Authorized()
  public async orderStatusList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: Response
  ): Promise<any> {
    const options: FindManyOptions<OrderStatus> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: ['orderStatusId', 'name', 'colorCode', 'isActive'],
      where: pickBy<
        | FindConditions<OrderStatus>[]
        | FindConditions<OrderStatus>
        | { [key: string]: any }
      >(
        { name: (keyword && Like(`%${keyword}%`)) || undefined },
        value => value != null
      ),
    };
    if (count) {
      const orderStatusCount = await this.orderStatusService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully got the complete order status list.',
        data: orderStatusCount,
      };

      logApiResponse({
        '/order-status/order-status-list': successResponse,
      });

      return response.status(200).send(successResponse);
    }
    const orderStatusList = await this.orderStatusService.list(options);
    if (orderStatusList) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully got the complete order status list.',
        data: orderStatusList,
      };
      logApiResponse({
        '/order-status/order-status-list': successResponse,
      });
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 1,
        message: 'unable to get OrderStatus.',
      };
      logApiResponse({
        '/order-status/order-status-list': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }
  }

  // Delete Order Status API
  /**
   * @api {delete} /api/order-status/delete-order-status/:id Delete OrderStatus API
   * @apiGroup OrderStatus
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "orderStatusId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully deleted orderStatus.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/order-status/delete-order-status/:id
   * @apiErrorExample {json} OrderStatus error
   * HTTP/1.1 500 Internal Server Error
   */
  @Delete('/delete-order-status/:id')
  @Authorized()
  public async deleteOrderStatus(
    @Param('id') id: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const orderStatus = await this.orderStatusService.findOne({
      where: {
        orderStatusId: id,
      },
    });
    if (!orderStatus) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid orderStatusId.',
      };
      logApiResponse({
        '/order-status/delete-order-status/:id': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }

    const deleteOrderStatus = await this.orderStatusService.delete(
      orderStatus.orderStatusId
    );
    if (deleteOrderStatus) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully deleted the order status.',
      };
      logApiResponse({
        '/order-status/delete-order-status/:id': successResponse,
      });
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to delete orderStatus.',
      };
      logApiResponse({
        '/order-status/delete-order-status/:id': errorResponse,
      });
      return response.status(400).send(errorResponse);
    }
  }
}
