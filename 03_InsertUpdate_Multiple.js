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

class Cars extends Sequelize.Model {}
Cars.init({
firstName: Sequelize.STRING,
lastName:Sequelize.STRING
}, { sequelize, modelName: 'users' });


/*INSERTA MULTIPLES REGISTROS DE USUARIO */
  sequelize.sync()
  .then(() => Cars.create({
    firstName: 'Marjorie',
    lastName: 'Bouvier Simpson'
  }))
  .then(() => Cars.create({
    firstName: 'Bartholomew Jojo',
    lastName: 'Simpson'
  }))
  .then(() => Cars.create( {
    firstName: 'Lisa Marie',
    lastName: 'Simpson'
  }))
  .then(() => Cars.create( {
    firstName: 'Margaret',
    lastName: 'Simpson'
  }))

  /*Transforma en JSON todos los eventos de consola del sequelize.sync() */
  .then(jane => {
    console.log(jane.toJSON());
  });


/*ACTUALIZA REGISTROS
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

/*ACTUALIZAR MULTIPLES REGISTROS*/
Users.update({ firstName: "Milhouse" }, {
  where: {
    firstName: 'Milhouse Mussolini'
  }
})

Users.update({ firstName: "Leonardo" }, {
  where: {
    id: 1
  }
})

Users.update({ lastName: "Simpson Bouvier" }, {
  where: {
    lastName: 'Bouvier Simpson'
  }
})

.then(() => {
  console.log("Done");
});




