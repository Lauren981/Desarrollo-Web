const producto = require('../models/productoModel');
const  {fn, col} = require('sequelize');

const getPromedioXCategoria = async (req, res) => {
    try {
        const productos = await producto.findAll({
            attributes: [
                'categoria',
                [fn('AVG', col('value')), 'promedio_value'],
                [fn(col('CodigoCategoria')), 'categoria']
            ],
            group: 'CodigoCategoria'
        });
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener promedio:', error);
    }
};


const getProductosXMarca = async (req, res) => {
    try {
        const productos = await producto.findAll({
            attributes: [
                [fn('COUNT', col('id')), 'cantidad_producto'],
                [col('codigoMarca'), 'marca']
            ],
            group: ['codigoMarca']
        });
        res.json(productos);
    } catch (error) {
        console.error('Error al obtener productos por Marca:', error);
    }
};

module.exports = {
    getProductosXMarca,
    getPromedioXCategoria
};