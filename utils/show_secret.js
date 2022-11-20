const dotenv = require('dotenv');

// get config vars
dotenv.config({path: '../.env'});

// access config var
console.log(process.env.TOKEN_SECRET);