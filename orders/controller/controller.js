const { serviceIsLive } = require('../models/model.js');

function serviceIsLiveController(req, res) {
    const response = serviceIsLive();
    res.send(`Response: ${response}`);
}

module.exports = {
    serviceIsLiveController
};