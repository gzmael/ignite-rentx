"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordRoutes = void 0;

var _ResetPasswordController = require("../../../../modules/accounts/useCases/resetPassword/ResetPasswordController");

var _SendForgotPasswordMailController = require("../../../../modules/accounts/useCases/sendForgotPasswordMail/SendForgotPasswordMailController");

var _express = require("express");

const passwordRoutes = (0, _express.Router)();
exports.passwordRoutes = passwordRoutes;
const sendForgotPasswordMailController = new _SendForgotPasswordMailController.SendForgotPasswordMailController();
const resetPasswordController = new _ResetPasswordController.ResetPasswordController();
passwordRoutes.post('/forgot', sendForgotPasswordMailController.handle);
passwordRoutes.post('/reset/:token', resetPasswordController.handle);