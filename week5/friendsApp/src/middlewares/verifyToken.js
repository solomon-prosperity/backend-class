const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

/*

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzQ2OTU3YzA2Njk5NzA3MGJhYWYzMDQiLCJuYW1lIjoiamVycnkgZG9lIiwiYWdlIjoiMjMiLCJpYXQiOjE2NjYxNzI1NTd9.2Jzmg9WqcY_jr6MYTQ4XC8d_d3QyB1UnHwDNYtXqyaA


*/


const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res
          .status(401)
          .json({ success: false, msg: `Access Denied` });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET

    try {
        const verified = jwt.verify(token, `${secret}`);
        req.user = verified;
    
        next();
      } catch (error) {
          res
            .status(401)
            .json({ success: false, msg: `${error.message}` });
      }
}


module.exports = verifyToken