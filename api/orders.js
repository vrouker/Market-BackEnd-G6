import express from "express";
const router = express.Router();
export default router;
import { verifyToken } from "./users.js";
import { getOrders, createOrder } from "../db/queries/orders.js";



// Get/orders locked
router.route("/").get(verifyToken, async(req, res)=>{
    const orders = await getOrders()
    res.send(orders)
});


// Get /orders/:id locked 
router.route("/:id").get(verifyToken, async(req, res)=>{
    const id = Number(req.params.id)
    const foundOrder = await getOrders(id)
    
    if(!foundOrder){
        return res.status(400).send("There is no order with that id")
    }
    res.send(foundOrder)
});


//Post /orders locked
router.route("/:id").post(verifyToken, async(req, res)=>{
   
    const id = Number(req.params.id) 
    
    const { date, note, user_id } = req.body
    if(!verifyToken){
        return res.status(403).send("Please login to access orders")
    }

     if (!req.body){
        return res.status(400).send("Missing request body")
    }

    if(!date || !note || !user_id){
        return res.status(400).send("Missing required fields")
    }

    const newOrder = await createOrder({date, note, user_id})
    res.status(201).send(newOrder)
});
