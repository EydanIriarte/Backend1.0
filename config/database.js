const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'usuario', 'contraseña', {
  host: 'localhost',
  dialect: 'mysql' // Especifica el dialecto de la base de datos que estás utilizando
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
