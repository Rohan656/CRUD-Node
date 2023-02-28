const jwt = require('jsonwebtoken');
const sec = 'shhhhhhhhhhhhhhhhhhhtttttttttttttttttttyyyyyyyyyyyyyy'
const User  = require('../model/model');

const loggedIn = (req, res, next) => {
    if (req.headers && req.headers.token) {
        var decoded = jwt.verify(req.headers.token, sec);
        req.email = decoded.email;
        console.log(decoded)
        next();
    } else {
        return res.status(401).json({
            message: "Not Allowed!!!!"
        })
    }
}

module.exports = {loggedIn}