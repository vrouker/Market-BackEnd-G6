import express from "express";
const router = express.Router();
export default router;
import { verifyToken } from "./users.js";
import { getProduct, getProducts } from "../db/queries/products.js";

 //GET all products
router.route("/").get(async(req, res)=>{

    const products = await getProducts();

    res.send(products);
});

 //GET products by ID

//GET /users/me
router.route("/:id").get(async(req, res)=>{
    const id = req.params.id;

    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send(`Please use a valid number for the ID.`)
    };

    const product = await getProduct(id);

    if (!product){
        return res.status(404).send(`Product not found.`)
    };

    res.send(product);
});

 //Get Product Reviews (requires AUTH)

 //Post Product Review (requires AUTH)