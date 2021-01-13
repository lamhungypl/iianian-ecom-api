'use strict';
/*

 *

 */
Object.defineProperty(exports, '__esModule', { value: true });
exports.ImageService = void 0;
const tslib_1 = require('tslib');
const typedi_1 = require('typedi');
const path = tslib_1.__importStar(require('path'));
const fs = tslib_1.__importStar(require('fs'));
const Logger_1 = require('../../decorators/Logger');
let ImageService = class ImageService {
  // Bucket list
  constructor(log) {
    this.log = log;
  }
  listFolders(limit = 0, folderName = '') {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const directoryPath = path.join(
        process.cwd(),
        'uploads' + '/' + folderName
      );
      this.log.info(directoryPath);
      this.log.info(__dirname);
      this.log.info(process.cwd());
      const files = yield this.readDir(directoryPath);
      const contents = [];
      const commonPrefix = [];
      for (const file of files) {
        const pathfile = path.resolve(directoryPath, file);
        const isDir = yield this.isDirCheck(pathfile);
        if (isDir) {
          commonPrefix.push({
            Prefix: folderName ? folderName + file + '/' : file + '/',
          });
        } else {
          contents.push({
            Key: folderName ? folderName + file : file,
          });
        }
      }
      return new Promise((resolve, reject) => {
        // passsing directoryPath and callback function
        const outputResponse = {};
        outputResponse.Name = 'uploads';
        outputResponse.Prefix = folderName;
        outputResponse.Delimiter = 100;
        outputResponse.IsTruncated = 'uploads';
        outputResponse.Marker = '';
        outputResponse.Contents = contents;
        outputResponse.CommonPrefixes = commonPrefix;
        resolve(outputResponse);
      });
    });
  }
  // create folder
  createFolder(folderName = '') {
    // Create the parameters for calling createBucket
    const directoryPath = path.join(
      process.cwd(),
      'uploads' + '/' + folderName
    );
    return new Promise((resolve, reject) => {
      if (fs.existsSync(directoryPath)) {
        resolve({ ETAG: new Date() });
      }
      fs.mkdir(directoryPath, { recursive: true }, err => {
        if (err) {
          reject(err);
        }
        resolve({ ETAG: new Date() });
      });
    });
  }
  // upload image
  imageUpload(folderName = '', base64Image) {
    // Create the parameters for calling createBucket
    const directoryPath = path.join(
      process.cwd(),
      'uploads' + '/' + folderName
    );
    return new Promise((resolve, reject) => {
      fs.writeFile(directoryPath, base64Image, 'base64', err => {
        if (err) {
          reject(err);
        }
        const locationArray = directoryPath.split('/');
        locationArray.pop();
        const locationPath = locationArray.join('/');
        resolve({ success: true, path: locationPath });
      });
    });
  }
  // Image resize
  resizeImage(imgName = '', imgPath = '', widthString = '', heightString = '') {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      const directoryPath = path.join(
        process.cwd(),
        'uploads' + '/' + imgPath + imgName
      );
      this.log.info(directoryPath);
      return new Promise((resolve, reject) => {
        const gm = require('gm').subClass({ imageMagick: true });
        return gm(directoryPath)
          .resize(widthString, heightString)
          .toBuffer((error, buffer) => {
            if (error) {
              reject(error);
            } else {
              this.log.info('Buffer' + Buffer.isBuffer(buffer));
              resolve(buffer);
            }
          });
      });
    });
  }
  isDirCheck(pathfile) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      return new Promise((subresolve, subreject) => {
        fs.stat(pathfile, (error, stat) => {
          //console.log(stat);
          //console.log(stat.isDirectory());
          if (stat && stat.isDirectory()) {
            subresolve(true);
          } else {
            subresolve(false);
          }
        });
      });
    });
  }
  readDir(pathfile) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      return new Promise((subresolve, subreject) => {
        fs.readdir(pathfile, (error, files) => {
          if (error) {
            subreject(error);
          }
          subresolve(files);
        });
      });
    });
  }
  deleteFile(fileName = '') {
    // Create the parameters for calling createBucket
    const directoryPath = path.join(process.cwd(), 'uploads' + '/' + fileName);
    return new Promise((resolve, reject) => {
      fs.unlink(directoryPath, err => {
        if (err) {
          reject(err);
        }
        resolve({ success: true, message: 'successfully deleted file' });
      });
    });
  }
  // search folders
  getFolder(folderName = '') {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
      return new Promise((resolve, reject) =>
        tslib_1.__awaiter(this, void 0, void 0, function* () {
          const pathName = path.join(process.cwd(), 'uploads');
          const files = yield this.readDir(pathName);
          const contents = [];
          const commonPrefix = [];
          if (folderName !== '') {
            files.forEach(file =>
              tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (file.includes(folderName) === true) {
                  commonPrefix.push({ Prefix: file + '/' });
                }
              })
            );
          } else {
            this.log.info(files);
            for (const file of files) {
              const pathfile = path.resolve(
                path.join(process.cwd(), 'uploads' + '/' + file)
              );
              const isDir = yield this.isDirCheck(pathfile);
              if (isDir) {
                commonPrefix.push({
                  Prefix: file + '/',
                });
              } else {
                contents.push({
                  Key: file,
                });
              }
            }
          }
          const outputResponse = {};
          outputResponse.IsTruncated = false;
          outputResponse.Name = 'uploads';
          outputResponse.Content = contents;
          outputResponse.Prefix = folderName;
          outputResponse.CommonPrefixes = commonPrefix;
          resolve(outputResponse);
        })
      );
    });
  }
};
ImageService = tslib_1.__decorate(
  [
    typedi_1.Service(),
    tslib_1.__param(0, Logger_1.Logger(__filename)),
    tslib_1.__metadata('design:paramtypes', [Object]),
  ],
  ImageService
);
exports.ImageService = ImageService;
//# sourceMappingURL=ImageService.js.map
