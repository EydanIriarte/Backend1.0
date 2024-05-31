const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Backend', 'postgres', 'aleatorio123', {
  host: 'localhost',
  dialect: 'postgres', // Cambia el dialecto a 'postgres'
  port: 3000, // El puerto predeterminado de PostgreSQL es 5432
});

// Prueba de conexión a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
