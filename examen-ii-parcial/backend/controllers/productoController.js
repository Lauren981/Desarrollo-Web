const producto = require('../models/productoModel');
const  {fn, col} = require('sequelize');

const getPromedioXCategoria = async (req, res) => {
    try {
        const productos = await producto.findAll({
            attributes: [
                'categoryCode',
                [fn('AVG', col('value')), 'promedio_value']
            ],
            group: 'categoryCode'
        });
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener promedio:', error);
        res.status(500).json({ error: 'Error al obtener promedio' });
    }
};


const getProductosXMarca = async (req, res) => {
    try {
        const productos = await producto.findAll({
            attributes: [
                [fn('COUNT', col('partNumber')), 'cantidad_producto'],
                'brandCode'
            ],
            group: ['brandCode']
        });
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos por Marca:', error);
        res.status(500).json({ error: 'Error al obtener productos por marca' });
    }
};

module.exports = {
    getProductosXMarca,
    getPromedioXCategoria
};