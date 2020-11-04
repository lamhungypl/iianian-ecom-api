import 'reflect-metadata';
import { Get, JsonController, Res, QueryParam } from 'routing-controllers';
import { FindManyOptions, Like } from 'typeorm';
import { Manufacturer } from '../../models/manufacturerModel';
import { ManufacturerService } from '../../services/manufacturerService';
import { isNumber, pickBy, parseInt as _parseInt } from 'lodash';

@JsonController('/manufacturers')
export class ManufacturerController {
  constructor(private manufacturerService: ManufacturerService) {}

  // Manufacturer List API
  /**
   * @api {get} /api/manufacturers/manufacturerlist Manufacturer List API
   * @apiGroup Store
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count in number
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get manufacturer list",
   *      "data":"{
   *      "manufacturerId" : "",
   *      "name" : "",
   *      "image" : "",
   *      "imagePath" : "",
   *      "sortOrder" : "",
   *      }"
   *      "status": "1"
   * }
   * @apiSampleRequest /api/manufacturers/manufacturerlist
   * @apiErrorExample {json} Manufacturer error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/manufacturerlist')
  public async manufacturerList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const select = [
      'manufacturerId',
      'name',
      'image',
      'imagePath',
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
    const options: FindManyOptions<Manufacturer> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'manufacturerId',
        'name',
        'image',
        'imagePath',
        'sortOrder',
        'isActive',
      ],
      where: {
        name: Like(`%${keyword}%`),
        isActive: 1,
      },
    };
    if (count) {
      const manufacturerCount = await this.manufacturerService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully get all manufacturer List',
        data: manufacturerCount,
      };
      return response.status(200).send(successResponse);
    }
    const manufacturerList = await this.manufacturerService.list(options);
    const successResponse: any = {
      status: 1,
      message: 'Successfully get all manufacturer List',
      data: manufacturerList,
    };
    return response.status(200).send(successResponse);
  }
}
