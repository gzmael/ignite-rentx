"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepository = void 0;

var _typeorm = require("typeorm");

var _UserTokens = require("../entities/UserTokens");

class UsersTokensRepository {
  constructor() {
    this.repository = void 0;
    this.repository = (0, _typeorm.getRepository)(_UserTokens.UserToken);
  }

  async create({
    expires_date,
    user_id,
    refresh_token
  }) {
    const userToken = this.repository.create({
      user_id,
      expires_date,
      created_at: new Date(),
      refresh_token
    });
    await this.repository.save(userToken);
    return userToken;
  }

  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    const userTokens = await this.repository.findOne({
      user_id,
      refresh_token
    });
    return userTokens;
  }

  async findByRefreshToken(token) {
    const userTokens = await this.repository.findOne({
      refresh_token: token
    });
    return userTokens;
  }

  async delete(id) {
    await this.repository.delete(id);
  }

}

exports.UsersTokensRepository = UsersTokensRepository;