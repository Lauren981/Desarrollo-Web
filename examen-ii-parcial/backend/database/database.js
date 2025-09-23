const {Sequelize} = require('sequelize');

const database = new Sequelize('productosdb', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql'
});

async function testConnection() {
    try {
        await database.authenticate();
        console.log('Conexión establecida a la base de datos.');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}

testConnection();
module.exports = database;