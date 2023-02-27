import {NextFunction, Response} from 'express'
import { AuthRequest } from '../interfaces/authInterface'

const authenticate = (req:AuthRequest, res: Response, next: NextFunction) => {
    req.user = 'User'
    next()
}

export {authenticate}