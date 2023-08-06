require("dotenv").config();

module.exports ={
    port: process.env.PORT || 3000,
    dbUrl: process.env.dbUrl || 'mongodb://localhost:27017',
    jwtSecret: process.env.jwtSecret || 'secret',
    jwtTime: process.env.jwtTime || '1d',
    defaultUserType: 'seller'
}