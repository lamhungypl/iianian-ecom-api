import { isNumber, pickBy, parseInt as _parseInt } from 'lodash';
import 'reflect-metadata';
import {
  Get,
  QueryParam,
  Param,
  JsonController,
  Res,
} from 'routing-controllers';
import { Page } from 'src/api/models/page';
import { FindConditions, FindManyOptions, Like } from 'typeorm';
import { PageService } from '../../services/pageService';

@JsonController('/pages')
export class PageController {
  constructor(private pageService: PageService) {}

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
  @Get('/pagelist')
  public async pageList(
    @QueryParam('limit') limit: string,
    @QueryParam('offset') offset: string,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
    const options: FindManyOptions<Page> = {
      ...pickBy<{ take?: number; skip?: number }>(
        {
          take: (limit && _parseInt(limit)) || undefined,
          skip: (offset && _parseInt(offset)) || undefined,
        },
        value => isNumber(value)
      ),
      select: [
        'pageId',
        'title',
        'content',
        'isActive',
        'metaTagTitle',
        'metaTagContent',
        'metaTagKeyword',
      ],
      where: pickBy<
        FindConditions<Page> | FindConditions<Page>[] | { [key: string]: any }
      >(
        {
          name: (keyword && Like(`%${keyword}%`)) || undefined,
        },
        value => value != null
      ),
    };
    if (count) {
      const pagesCount = await this.pageService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully get pages List count',
        data: pagesCount,
      };
      return response.status(200).send(successResponse);
    }
    const pageList = await this.pageService.list(options);
    if (pageList) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully get pages List',
        data: pageList,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to list pages',
      };
      return response.status(400).send(errorResponse);
    }
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
  @Get('/get_pagedetails/:id')
  public async pageDetails(
    @Param('id') id: number,
    @Res() response: any
  ): Promise<any> {
    const page: Page = await this.pageService.findOne({
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
      const successResponse: any = {
        status: 1,
        message: 'Successfully get page Details',
        data: page,
      };
      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to get page Details',
      };
      return response.status(400).send(errorResponse);
    }
  }
}
