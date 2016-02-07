var router = require('express').Router();
var four0four = require('./utils/404')();
var propertiesReader = require('properties-reader');

router.get('/config', getConfig);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getConfig(req, res, next) {
    var properties = propertiesReader('./src/server/application-fits-local.properties');
    res.send(properties._properties);
}