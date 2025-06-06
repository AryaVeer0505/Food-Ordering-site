import express from 'express'

import authMiddleware from '../middleware/auth.js'
import { placeOrder,verifyOrder,userOrders, allOrders, orderStatus } from '../controllers/orderController.js'

const orderRouter=express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',authMiddleware,verifyOrder)
orderRouter.post('/userOrders',authMiddleware,userOrders)
orderRouter.get('/list',allOrders)
orderRouter.post('/status',orderStatus)

export default orderRouter