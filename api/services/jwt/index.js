import jwt from 'jsonwebtoken';
import { jwtConfig } from '../../config';

export const createToken = (user) => {
    return jwt.sign({
        id: user.id
    }, jwtConfig.jwtSecret, jwtConfig.options);
};