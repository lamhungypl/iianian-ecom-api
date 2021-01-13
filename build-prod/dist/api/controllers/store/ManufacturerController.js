'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ManufacturerController = void 0;
const tslib_1 = require('tslib');
require('reflect-metadata');
const routing_controllers_1 = require('routing-controllers');
const typeorm_1 = require('typeorm');
const manufacturerService_1 = require('../../services/manufacturerService');
const lodash_1 = require('lodash');
let ManufacturerController = class ManufacturerController {
  constructor(manufacturerService) {
    this.manufacturerService = manufacturerService;
  }
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
  manufacturerList(limit, offset, keyword, count, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            'manufacturerId',
            'name',
            'image',
            'imagePath',
            'sortOrder',
            'isActive',
          ],
          where: {
            name: typeorm_1.Like(`%${keyword}%`),
            isActive: 1,
          },
        }
      );
      if (count) {
        const manufacturerCount = yield this.manufacturerService.count(options);
        const successResponse = {
          status: 1,
          message: 'Successfully get all manufacturer List',
          data: manufacturerCount,
        };
        return response.status(200).send(successResponse);
      }
      const manufacturerList = yield this.manufacturerService.list(options);
      const successResponse = {
        status: 1,
        message: 'Successfully get all manufacturer List',
        data: manufacturerList,
      };
      return response.status(200).send(successResponse);
    });
  }
};
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/manufacturerlist'),
    tslib_1.__param(0, routing_controllers_1.QueryParam('limit')),
    tslib_1.__param(1, routing_controllers_1.QueryParam('offset')),
    tslib_1.__param(2, routing_controllers_1.QueryParam('keyword')),
    tslib_1.__param(3, routing_controllers_1.QueryParam('count')),
    tslib_1.__param(4, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [
      String,
      String,
      String,
      Object,
      Object,
    ]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  ManufacturerController.prototype,
  'manufacturerList',
  null
);
ManufacturerController = tslib_1.__decorate(
  [
    routing_controllers_1.JsonController('/manufacturers'),
    tslib_1.__metadata('design:paramtypes', [
      manufacturerService_1.ManufacturerService,
    ]),
  ],
  ManufacturerController
);
exports.ManufacturerController = ManufacturerController;
//# sourceMappingURL=ManufacturerController.js.map
