import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers['x-access-token'] ||
      request.query.token;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    try {
      const userToken = await refreshTokenUseCase.execute(token);

      return response.json(userToken);
    } catch (err) {
      console.log(err);
      return response.status(401).json({
        message: err.message,
      });
    }
  }
}

export { RefreshTokenController };