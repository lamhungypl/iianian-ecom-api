import 'reflect-metadata';
import {
  Get,
  Put,
  Delete,
  Param,
  QueryParam,
  Post,
  Body,
  JsonController,
  Authorized,
  Res,
  Req,
} from 'routing-controllers';
import { BannerService } from '../services/bannerService';
import { env } from '../../env';
import { Banner } from '../models/banner';
import { CreateBanner } from './requests/createBannerRequest';
import { UpdateBanner } from './requests/updateBannerRequest';
import { S3Service } from '../services/S3Service';
import { ImageService } from '../services/ImageService';
import { FindManyOptions, Like } from 'typeorm';
import { logApiResponse } from '../../lib/helpers';

@JsonController('/banner')
export class BannerController {
  constructor(
    private bannerService: BannerService,
    private s3Service: S3Service,
    private imageService: ImageService
  ) {}

  // Create Banner
  /**
   * @api {post} /api/banner/add-banner Add Banner API
   * @apiGroup Banner
   * @apiParam (Request body) {String} title title
   * @apiParam (Request body) {String} content content
   * @apiParam (Request body) {String} image image
   * @apiParam (Request body) {String} link link
   * @apiParam (Request body) {String} position position
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "title" : "",
   *      "content" : "",
   *      "image" : "",
   *      "link" : "",
   *      "position" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "New banner is created successfully",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/banner/add-banner
   * @apiErrorExample {json} Banner error
   * HTTP/1.1 500 Internal Server Error
   */
  @Post('/add-banner')
  @Authorized()
  public async createBanner(
    @Body({ validate: true }) bannerParam: CreateBanner,
    @Res() response: any
  ): Promise<any> {
    const image = bannerParam.image;
    if (image) {
      const type = image.split(';')[0].split('/')[1];
      const name = 'Img_' + Date.now() + '.' + type;
      const path = 'banner/';
      const base64Data = new Buffer(
        image.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );
      if (env.imageserver === 's3') {
        await this.s3Service.imageUpload(path + name, base64Data, type);
      } else {
        await this.imageService.imageUpload(path + name, base64Data);
      }
      const newBanner = new Banner();
      newBanner.title = bannerParam.title;
      newBanner.content = bannerParam.content;
      newBanner.image = name;
      newBanner.imagePath = path;
      newBanner.link = bannerParam.link;
      newBanner.position = bannerParam.position;
      newBanner.isActive = parseInt(bannerParam.status);
      const bannerSave = await this.bannerService.create(newBanner);

      if (bannerSave) {
        const successResponse: any = {
          status: 1,
          message: 'Successfully created new banner.',
          data: bannerSave,
        };
        logApiResponse({ '/banner/add-banner': successResponse });

        return response.status(200).send(successResponse);
      } else {
        const errorResponse: any = {
          status: 0,
          message: 'Unable to create new banner. ',
        };
        logApiResponse({ '/banner/add-banner': errorResponse });

        return response.status(400).send(errorResponse);
      }
    }
  }

  // Banner List
  /**
   * @api {get} /api/banner/bannerlist Banner List API
   * @apiGroup Banner
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} limit limit
   * @apiParam (Request body) {Number} offset offset
   * @apiParam (Request body) {String} keyword keyword
   * @apiParam (Request body) {number} count count should be number or boolean
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully got banner list",
   *      "data":"{
   *      "bannerId": "",
   *      "title": "",
   *      "content": "",
   *      "image": "",
   *      "imagePath": "",
   *      "link": "",
   *      "position": "",
   *      }"
   *      "status": "1"
   * }
   * @apiSampleRequest /api/banner/bannerlist
   * @apiErrorExample {json} Banner error
   * HTTP/1.1 500 Internal Server Error
   */
  @Get('/bannerlist')
  @Authorized()
  public async bannerList(
    @QueryParam('limit') limit: number,
    @QueryParam('offset') offset: number,
    @QueryParam('keyword') keyword: string,
    @QueryParam('count') count: number | boolean,
    @Res() response: any
  ): Promise<any> {
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
        'isActive',
      ],
      where: {
        title: Like(`%${keyword}%`),
      },
    };
    if (count) {
      const bannerListCount: any = await this.bannerService.count(options);
      const successResponse: any = {
        status: 1,
        message: 'Successfully got banner list count',
        data: bannerListCount,
      };
      logApiResponse({ '/banner/bannerlist': successResponse });

      return response.status(200).send(successResponse);
    }
    const bannerList: any = await this.bannerService.list(options);
    const successResponse: any = {
      status: 1,
      message: 'Successfully got banner list',
      data: bannerList,
    };
    logApiResponse({ '/banner/bannerlist': successResponse });

    return response.status(200).send(successResponse);
  }

  // Delete Banner
  /**
   * @api {delete} /api/banner/delete-banner/:id Delete Banner API
   * @apiGroup Banner
   * @apiHeader {String} Authorization
   * @apiParamExample {json} Input
   * {
   *      "bannerId" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully deleted Banner.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/banner/delete-banner/:id
   * @apiErrorExample {json} Banner error
   * HTTP/1.1 500 Internal Server Error
   */
  @Delete('/delete-banner/:id')
  @Authorized()
  public async deleteBanner(
    @Param('id') id: number,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const banner = await this.bannerService.findOne({
      where: {
        bannerId: id,
      },
    });
    if (!banner) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid BannerId',
      };
      logApiResponse({ '/banner/delete-banner/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }

    const deleteBanner = await this.bannerService.delete(banner.bannerId);
    if (deleteBanner) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully deleted banner',
      };
      logApiResponse({ '/banner/delete-banner/:id': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'unable to delete banner',
      };
      logApiResponse({ '/banner/delete-banner/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }

  // Update Banner
  /**
   * @api {put} /api/banner/update-banner/:id Update Banner API
   * @apiGroup Banner
   * @apiHeader {String} Authorization
   * @apiParam (Request body) {Number} bannerId Banner bannerId
   * @apiParam (Request body) {String} title Banner title
   * @apiParam (Request body) {String} image Banner image
   * @apiParam (Request body) {String} content Banner content
   * @apiParam (Request body) {String} link Banner link
   * @apiParam (Request body) {Number} position Banner position
   * @apiParamExample {json} Input
   * {
   *      "bannerId" : "",
   *      "title" : "",
   *      "image" : "",
   *      "content" : "",
   *      "link" : "",
   *      "position" : "",
   * }
   * @apiSuccessExample {json} Success
   * HTTP/1.1 200 OK
   * {
   *      "message": "Successfully updated banner.",
   *      "status": "1"
   * }
   * @apiSampleRequest /api/banner/update-banner/:id
   * @apiErrorExample {json} Banner error
   * HTTP/1.1 500 Internal Server Error
   */
  @Put('/update-banner/:id')
  @Authorized()
  public async updateBanner(
    @Body({ validate: true }) bannerParam: UpdateBanner,
    @Res() response: any,
    @Req() request: any
  ): Promise<any> {
    const banner = await this.bannerService.findOne({
      where: {
        bannerId: bannerParam.bannerId,
      },
    });
    if (!banner) {
      const errorResponse: any = {
        status: 0,
        message: 'Invalid BannerId',
      };
      logApiResponse({ '/banner/update-banner/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
    const image = bannerParam.image;
    if (image) {
      const type = image.split(';')[0].split('/')[1];
      const name = 'Img_' + Date.now() + '.' + type;
      const path = 'banner/';
      const base64Data = new Buffer(
        image.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );
      if (env.imageserver === 's3') {
        await this.s3Service.imageUpload(path + name, base64Data, type);
      } else {
        await this.imageService.imageUpload(path + name, base64Data);
      }
      banner.image = name;
      banner.imagePath = path;
    }
    banner.title = bannerParam.title;
    banner.content = bannerParam.content;
    banner.link = bannerParam.link;
    banner.position = bannerParam.position;
    banner.isActive = parseInt(bannerParam.status);
    const bannerSave = await this.bannerService.create(banner);

    if (bannerSave) {
      const successResponse: any = {
        status: 1,
        message: 'Successfully updated banner.',
        data: bannerSave,
      };
      logApiResponse({ '/banner/update-banner/:id': successResponse });

      return response.status(200).send(successResponse);
    } else {
      const errorResponse: any = {
        status: 0,
        message: 'Unable to update the banner list. ',
      };
      logApiResponse({ '/banner/update-banner/:id': errorResponse });

      return response.status(400).send(errorResponse);
    }
  }
}
