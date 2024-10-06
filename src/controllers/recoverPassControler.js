// eslint-disable-next-line no-spaced-func
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken')
const Usuario = require('../models/Usuario');
const authcode = require('../service/authCode');
const SendSms = require('../service/sendSms');


class RecoverPassController {
  async recoverPass(req, res) {
    let {email} = req.body
    let user = await user.



};

