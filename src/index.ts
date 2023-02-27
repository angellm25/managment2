import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import bodyparser from 'body-parser';
import cors from 'cors'
import rootRoute from './routes/index.route'



const app = express();



mongoose.connect(process.env.DATABASE_URL!)
.then(() => {
    console.log('Connected to the database')
}).catch(() => {
    console.log('There was an error connecting to your database')
})

app.use(LOGGER)

app.get('/users', authorizeUsersAccess, (req: Request, res: Response) => {
    console.log(req.query.admin)
    res.send('Users Page')
})

function LOGGER (req: Request, res:Response, next: NextFunction) {
    console.log('Inside Middleware')
    next()
}


function authorizeUsersAccess(req: Request, res: Response , next: NextFunction) {
    if (req.query.admin === 'true') {
        next()
    } else {
        res.send('ERROR: You must be an admin')
    }
    
}


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/v1/', rootRoute)

const PORT = process.env.PORT || 4111
app.listen(PORT, ()=> {
    console.log('Server is listening on port ' + PORT)
})