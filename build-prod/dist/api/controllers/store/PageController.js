'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PageController = void 0;
const tslib_1 = require('tslib');
const lodash_1 = require('lodash');
require('reflect-metadata');
const routing_controllers_1 = require('routing-controllers');
const typeorm_1 = require('typeorm');
const pageService_1 = require('../../services/pageService');
let PageController = class PageController {
  constructor(pageService) {
    this.pageService = pageService;
  }
  // Page List API
  /**
   * @api {get} /api/pages/pagelist Page List API
   * @apiGroup Store
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {Number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get page list",
   *      "data":{
   *      "pageId" : "",
   *      "title" : "",
   *      "content" : "",
   *      "active" : "",
   *      "metaTagTitle" : "",
   *      "metaTagContent" : "",
   *      "metaTagKeyword" : "",
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/pages/pagelist
   * @apiErrorExample {json} pageFront error
   * HTTP/1.1 500 Internal Server Error
   */
  pageList(limit, offset, keyword, count, response) {
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
          select: [
            'pageId',
            'title',
            'content',
            'isActive',
            'metaTagTitle',
            'metaTagContent',
            'metaTagKeyword',
          ],
          where: lodash_1.pickBy(
            {
              name: (keyword && typeorm_1.Like(`%${keyword}%`)) || undefined,
            },
            value => value != null
          ),
        }
      );
      if (count) {
        const pagesCount = yield this.pageService.count(options);
        const successResponse = {
          status: 1,
          message: 'Successfully get pages List count',
          data: pagesCount,
        };
        return response.status(200).send(successResponse);
      }
      const pageList = yield this.pageService.list(options);
      if (pageList) {
        const successResponse = {
          status: 1,
          message: 'Successfully get pages List',
          data: pageList,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to list pages',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
  // get Page Detail API
  /**
   * @api {get} /api/pages/get_pagedetails/:id Page Details API
   * @apiGroup Store
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully get page Details",
   *      "data":{
   *      "pageId" : "",
   *      "title" : "",
   *      "content" : "",
   *      "status" : "",
   *      }
   *      "status": "1"
   * }
   * @apiSampleRequest /api/pages/get_pagedetails/:id
   * @apiErrorExample {json} page error
   * HTTP/1.1 500 Internal Server Error
   */
  pageDetails(id, response) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const page = yield this.pageService.findOne({
        where: {
          pageId: id,
        },
      });
      // if (!page) {
      //   const errorResponse: any = {
      //     status: 0,
      //     message: 'invalid page id',
      //   };
      //   return response.status(400).send(errorResponse);
      // }
      if (page) {
        const successResponse = {
          status: 1,
          message: 'Successfully get page Details',
          data: page,
        };
        return response.status(200).send(successResponse);
      } else {
        const errorResponse = {
          status: 0,
          message: 'unable to get page Details',
        };
        return response.status(400).send(errorResponse);
      }
    });
  }
};
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/pagelist'),
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
  PageController.prototype,
  'pageList',
  null
);
tslib_1.__decorate(
  [
    routing_controllers_1.Get('/get_pagedetails/:id'),
    tslib_1.__param(0, routing_controllers_1.Param('id')),
    tslib_1.__param(1, routing_controllers_1.Res()),
    tslib_1.__metadata('design:type', Function),
    tslib_1.__metadata('design:paramtypes', [Number, Object]),
    tslib_1.__metadata('design:returntype', Promise),
  ],
  PageController.prototype,
  'pageDetails',
  null
);
PageController = tslib_1.__decorate(
  [
    routing_controllers_1.JsonController('/pages'),
    tslib_1.__metadata('design:paramtypes', [pageService_1.PageService]),
  ],
  PageController
);
exports.PageController = PageController;
//# sourceMappingURL=PageController.js.map
