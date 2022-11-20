const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');

function generateAccessToken (username) {
    return jwt.sign({
            id: username
        },
        process.env.TOKEN_SECRET, {
            expiresIn: '1d'
        });
};



const token = generateAccessToken('toodles');
console.log(token);


module.exports = { generateAccessToken };