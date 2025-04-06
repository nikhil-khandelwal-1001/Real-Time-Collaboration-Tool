const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }
    
    const token = authHeader.replace("bearer ", "");
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    //console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        //console.log("Decoded User:", decoded);
        
        next();
        
        
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = { verifyToken };
