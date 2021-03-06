"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarSpecificationController = void 0;

var _tsyringe = require("tsyringe");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

class CreateCarSpecificationController {
  async handle(request, response) {
    const {
      specification_ids
    } = request.body;
    const {
      id
    } = request.params;

    const createCarSpecificationUseCase = _tsyringe.container.resolve(_CreateCarSpecificationUseCase.CreateCarSpecificationUseCase);

    const car = await createCarSpecificationUseCase.execute({
      car_id: id,
      specification_ids
    });
    return response.json(car);
  }

}

exports.CreateCarSpecificationController = CreateCarSpecificationController;