const { sequelize } = require('./models/index');

const initDb = async () => {
  try {
    if (process.env.DB_SYNC === 'true') {
      console.log('Doing db sync');
      await sequelize.sync({ alter: true });
      console.log('Database synchronized');
    }
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

module.exports = initDb;