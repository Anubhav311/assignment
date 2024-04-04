const express = require('express');
const {serviceIsLiveController} = require('../controller/controller.js')

const router = express.Router();

router.get('/', serviceIsLiveController);

module.exports = router;