import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config';

export const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Bearer [TOKEN]
    const decoded = jwt.verify(token, jwtConfig.jwtSecret, { expiresIn: jwtConfig.options.expiresIn });
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.error(`Invaid authorization token: ${req.headers.authorization}`);
    res.status(401).end()
  }
};
