import express from "express";
const router = express.Router();
export default router;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { createUser, loginUser, getUserById } from "../db/queries/users.js";


//verifyToken
export const verifyToken = (req, res, next)=>{
    if (!req.headers[`authorization`]){return res.status(401).send(`No token provided`)};
    const authHeader = req.headers[`authorization`];
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
};



//POST /users/register
router.route("/register").post(async(req, res)=>{
    const {username, password} = req.body;
    try{
        const hashedpassword = await bcrypt.hash(password, 5);
        console.log(`be line 27`, hashedpassword);

        const newUser = await createUser({username, password:hashedpassword});
        console.log(`be 30`, newUser);

        if (!newUser){
            return res.status(400).send(`New user could not be registered.`)
        };

        const token = jwt.sign({id: newUser.id, username: newUser.username}, process.env.JWT_SECRET);

        res.status(201).send(token);

    }catch(err){
        console.log(err);
        res.json(`There was an error registering the user.`);
    }
});



//POST /users/login
router.route("/login").post(async(req, res)=>{
    const {username, password} = req.body;

    try{
        const userInfo = await loginUser({username});

        const passwordMatch = await bcrypt.compare(password, userInfo.password);

        if (!passwordMatch){
            return res.status(401).send(`Not authorized.`)
        };

        const token = jwt.sign({id: userInfo.id, username: userInfo.username}, process.env.JWT_SECRET);

        res.status(201).send(token);

    }catch(err){
        console.log(err);
        res.json(`Unable to login.`)
    }
});



//GET /users/me
router.route("/:id").get(async(req, res)=>{
    const id = req.params.id;

    if(!Number.isInteger(id) && id < 0){
        return res.status(400).send(`Please use a valid number for the ID.`)
    };

    const user = await getUserById(id);

    if (!user){
        return res.status(404).send(`User not found.`)
    };

    res.send(user);
});


