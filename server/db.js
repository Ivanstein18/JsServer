const {Sequelize} = require('sequelize')
// require('dotenv').config() //??? Почему не надо импортировать переменные окружения?


//создание обьекта базы данных

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
