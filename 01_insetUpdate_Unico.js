const Sequelize = require('sequelize');

const sequelize = new Sequelize('persistencia_DB', 'Mauricio', 'p4ssw0rd', {
  host: 'localhost',
  dialect: 'mariadb'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


/*INICIAR Y ACCEDER A LA TABLA USERS PARA INSERTAR*/  
class Cars extends Sequelize.Model {}
Cars.init({
firstName: Sequelize.STRING,
lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/*INSERTAR UN REGISTRO DE USUARIO*/
sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Homero',
    lastName: 'Simpson'
  }))

/*Transforma en JSON todos los eventos de consola del sequelize.sync() */
  .then(jane => {
    console.log(jane.toJSON());
  });


/*ACTUALIZA REGISTRO
NO SE PUEDE ACTUALIZAR UN REGISTRO RECIEN CARGADO CON ESTE SCRIPT*/

/*ACCEDER A LA TABLA USERS PARA ACTUALIZAR*/
const Model = Sequelize.Model;
class Users extends Model {}
Users.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'users'
});

/*ACTUALIZAR UN SOLO REGISTRO*/
Users.update({ firstName: "Homero Jimeno" }, {
  where: {
    lastName: 'Podesta'
  }
}).then(() => {
  console.log("Done");
});