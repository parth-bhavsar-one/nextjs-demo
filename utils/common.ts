const jwt = require('jsonwebtoken')

export const generateToken = (data: any) => {
    return jwt.sign(data, "SECRET_KEY", { expiresIn: '7d' });
}

export const verifyToken = (token: String) => {
    return jwt.verify(token, "SECRET_KEY")
}