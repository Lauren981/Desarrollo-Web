const Express = require('express');
const router = Express.Router();
const productoController = require('../controllers/productoController');

router.get('/api/marca', productoController.getProductosXMarca);
router.get('/api/promedio', productoController.getPromedioXCategoria);

module.exports = router;