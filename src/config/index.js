require("dotenv").config();

module.exports ={
    port: process.env.PORT,
    dbUrl: process.env.dbUrl,
    jwtSecret: process.env.jwtSecret,
    promToken: process.env.promToken
}