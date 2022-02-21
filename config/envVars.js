require('dotenv').config()

const configVars ={
    port:process.env.PORT,
    db_userName: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_name: process.env.DB_NAME,
    db_host: process.env.DB_HOST
}
module.exports = configVars