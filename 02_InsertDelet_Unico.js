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
    firstName: 'Milhouse Mussolini',
    lastName: 'Van Houten'
  }))

/*Transforma en JSON todos los eventos de consola del sequelize.sync() */
  .then(jane => {
    console.log(jane.toJSON());
  });


/*ACCEDER A LA TABLA USERS PARA ELIMINAR REGISTROS*/
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});


/*ELIMINAR UN USUARIO CON ID*/
User.destroy({
    where: {
      id: 20
    }
  }).then(() => {
    console.log("Elimine Registro");
  });
  

/*ELIMINAR MULTIPLES USUARIOS CON APELLIDO SIMPSON*/
User.destroy({
  where: {
    lastName: 'Simpson'
  }
}).then(() => {
  console.log("Elimine Registro");
});
