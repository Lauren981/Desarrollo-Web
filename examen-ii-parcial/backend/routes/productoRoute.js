const Express = require('express');
const router = Express.Router();
const productoController = require('../controllers/productoController');

router.get('/productos/marca', productoController.getProductosXMarca);
router.get('/productos/promedio/categoria', productoController.getPromedioXCategoria);

module.exports = router;