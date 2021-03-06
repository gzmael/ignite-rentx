"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadCarImagesController = void 0;

var _tsyringe = require("tsyringe");

var _UploadCarImagesUseCase = require("./UploadCarImagesUseCase");

class UploadCarImagesController {
  async handle(request, response) {
    const {
      id
    } = request.params;
    const images = request.files;

    const uploadCarImagesUseCase = _tsyringe.container.resolve(_UploadCarImagesUseCase.UploadCarImagesUseCase);

    const fileNames = images.map(file => file.filename);
    const imageList = await uploadCarImagesUseCase.execute({
      car_id: id,
      images_name: fileNames
    });
    return response.status(201).json(imageList);
  }

}

exports.UploadCarImagesController = UploadCarImagesController;