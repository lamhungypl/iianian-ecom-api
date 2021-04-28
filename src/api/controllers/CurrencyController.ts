import 'reflect-metadata';
import {
  Put,
  Delete,
  Get,
  Post,
  Body,
  JsonController,
  Authorized,
  Res,
  Req,
  QueryParam,
  Param,
} from 'routing-controllers';
import { Currency } from '../models/currency';
import { CreateCurrency } from './requests/createCurrencyRequest';
import { CurrencyService } from '../services/currencyService';
import { UpdateCurrency } from './requests/updateCurrenyRequest';
import { FindManyOptions, Like } from 'typeorm';
import { logApiResponse } from '../../lib/helpers';

@JsonController('/currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  // Create Currency API
  /**
   * @api {post} /api/currency/add-currency Add Currency API
   * @apiGroup Currency
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {String} title Currency title
   * @apiParam (Request body) {String} code Currency code
   * @apiParam (Request body) {String} symbolLeft Currency symbolLeft
   * @apiParam (Request body) {String} symbolRight Currency  symbolRight
   * @apiParam (Request body) {Number} value Currency value
   * @apiParam (Request body) {Number} status Currency status
   * @apiParamExample {json} Input
   * {
   *      "title" : "",
   *      "code" : "",
   *      "symbolLeft" : "",
   *      "symbolRight" : "",
   *      "value" : "",
   *      "status" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully created new Currency.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/currency/add-currency
   * @apiErrorExample {json} Currency error
   * HTTP/1.1 500 Internal Server Error
   */
  @Post('/add-currency')
  @Authorized()
  public async addCurrency(
    @Body({ validate: true }) currencyParam: CreateCurrency,
    @Res() response: any
  ): Promise<any> {
    const newCurrency = new Currency();
    newCurrency.title = currencyParam.title;
    newCurrency.code = currencyParam.code;
    newCurrency.symbolLeft = currencyParam.symbolLeft;
    newCurrency.symbolRight = currencyParam.symbolRight;
    newCurrency.isActive = currencyParam.status;
    newCurrency.value = currencyParam.value;
    const currencySave = await this.currencyService.create(newCurrency);
    if (currencySave !== undefined) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully added new currency.',
        data: currencySave,
      };
      logApiResponse({ '/currency/add-currency': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to create currency',
      };
      logApiResponse({ '/currency/add-currency': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }

  // Currency List API
  /**
   * @api {get} /api/currency/currencylist Currency List API
   * @apiGroup Currency
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get currency list",
   *      "data":{
   *       "currencyId" : "",
   *       "title" : "",
   *       "code" : "",
   *       "value" : "",
   *       "update" : "",
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/currency/currencylist
   * @apiErrorExample {json} Currency error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/currencylist')
  @Authorized()
  public async currencyList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'currencyId',
      'title',
      'code',
      'symbolLeft',
      'symbolRight',
      'value',
      'modifiedDate',
      'isActive',
    ];
    const search = [
      {
        name: 'title',
        op: 'like',
        value: keyword,
      },
    ];
    const WhereConditions = [];
    const options: FindManyOptions<Currency> = {
      take: limit,
      skip: offset,
      select: [
        'currencyId',
        'title',
        'code',
        'symbolLeft',
        'symbolRight',
        'value',
        'modifiedDate',
        'isActive',
      ],
      where: {
        title: Like(`%${keyword}%`),
      },
    };
    if (count) {
      const currencyCount: number = await this.currencyService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully got the complete currency list.',
        data: currencyCount,
      };
      logApiResponse({ '/currency/currencylist': successResponse });

      return response.status(200).send(successResponse);
    }
    const currencyList = await this.currencyService.list(options);
    if (currencyList) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully got the complete currency list.',
        data: currencyList,
      };
      logApiResponse({ '/currency/currencylist': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to list currency',
      };
      logApiResponse({ '/currency/currencylist': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }

  // update Currency
  /**
   * @api {put} /api/currency/update-currency/:id Update Currency API
   * @apiGroup Currency
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} currencyId Currency currencyId
   * @apiParam (Request body) {String} title Currency title
   * @apiParam (Request body) {String} code Currency code
   * @apiParam (Request body) {String} symbolLeft Currency symbolLeft
   * @apiParam (Request body) {String} symbolRight Currency  symbolRight
   * @apiParam (Request body) {Number} value Currency value
   * @apiParam (Request body) {Number} status Currency status
   * @apiParamExample {json} Input
   * {
   *      "currencyId" : "",
   *      "title" : "",
   *      "code" : "",
   *      "symbolLeft" : "",
   *      "symbolRight" : "",
   *      "value" : "",
   *      "status" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated Currency.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/currency/update-currency/:id
   * @apiErrorExample {json} Currency error
   * HTTP/1.1 500 Internal Server Error
   */
  @Put('/update-currency/:id')
  @Authorized()
  public async updateCurrency(
    @Body({ validate: true }) currencyParam: UpdateCurrency,
    @Res() response: any
  ): Promise<any> {
    const currency = await this.currencyService.findOne({
      where: {
        currencyId: currencyParam.currencyId,
      },
    });
    if (!currency) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid currencyId',
      };
      logApiResponse({ '/currency/update-currency/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
    currency.title = currencyParam.title;
    currency.code = currencyParam.code;
    currency.symbolLeft = currencyParam.symbolLeft;
    currency.symbolRight = currencyParam.symbolRight;
    currency.value = currencyParam.value;
    currency.isActive = currencyParam.status;
    const currencySave = await this.currencyService.create(currency);
    if (currencySave !== undefined) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully updated the currency.',
        data: currencySave,
      };
      logApiResponse({ '/currency/update-currency/:id': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to update currency',
      };
      logApiResponse({ '/currency/update-currency/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }

  // delete Currency API
  /**
   * @api {delete} /api/currency/delete-currency/:id Delete Currency API
   * @apiGroup Currency
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "currencyId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully deleted currency.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/currency/delete-currency/:id
   * @apiErrorExample {json} Currency error
   * HTTP/1.1 500 Internal Server Error
   */
  @Delete('/delete-currency/:id')
  @Authorized()
  public async deleteCurrency(
    @Param('id') id: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const currency = await this.currencyService.findOne({
      where: {
        currencyId: id,
      },
    });
    if (!currency) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid currencyId',
      };
      logApiResponse({ '/currency/delete-currency/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }

    const deleteCurrency = await this.currencyService.delete(
      currency.currencyId
    );
    if (deleteCurrency === undefined) {
      const successResponse: any = {
        status: 1,
        message: 'Successfullly deleted the currency.',
      };
      logApiResponse({ '/currency/delete-currency/:id': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to delete currency',
      };
      logApiResponse({ '/currency/delete-currency/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }
}
