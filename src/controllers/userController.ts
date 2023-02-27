import { NextFunction, Request, Response } from "express";

import UserService from "../services/userServices";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class UserController{
getUsers = async function (req: Request, res: Response, next: NextFunction) {
    const page = req.params.page ? req.params.page: 1
    const limit = req.params.limit ? req.params.limit : 10
    try {
        const users = await UserService.getUsers({}, page, limit)
        return res.status(200).send({status: 200, data: users, message: " Users Retrieved Successfully"})
    } catch(e) {
        return res.status(400).send({status: 400, message: "ERROR"})
    }
}
}
export default new UserController()