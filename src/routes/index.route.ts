import express from 'express'
const router = express.Router()
import roomRoute from './rooms.route'
import RoomtypeRoute from './roomType.route'

router.use('/room', roomRoute)
router.use('/roomType', RoomtypeRoute)

export default router