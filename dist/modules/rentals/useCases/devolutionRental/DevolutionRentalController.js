"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevolutionRentalController = void 0;

var _tsyringe = require("tsyringe");

var _DevolutionRentalUseCase = require("./DevolutionRentalUseCase");

class DevolutionRentalController {
  async handle(request, response) {
    const {
      id
    } = request.params;

    const devolutionRentalUseCase = _tsyringe.container.resolve(_DevolutionRentalUseCase.DevolutionRentalUseCase);

    const rental = await devolutionRentalUseCase.execute({
      id
    });
    return response.json(rental);
  }

}

exports.DevolutionRentalController = DevolutionRentalController;