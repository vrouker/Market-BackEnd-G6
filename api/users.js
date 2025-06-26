import express from "express";
const router = express.Router();
export default router;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { createUser, loginUser, getUserById, getUserInfo } from "../db/queries/users.js";


//verifyToken
export const verifyToken = (req, res, next)=>{
    if (!req.headers[`authorization`]){return res.status(401).send(`No token provided`)};
    const authHeader = req.headers[`authorization`];
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
};

//Get /users/getInfo
router.route("/login/getInfo/:id").get(async(req, res)=>{
    const username = req.params.id;

    try{
        const userInfo = await getUserInfo({username});

        res.status(201).json(userInfo);
    

    }catch(err){
        console.log(err);
        res.json(`Unable to get User Info.`)
    }
});

//POST /users/register
router.route("/register").post(async(req, res)=>{
    const {username, password} = req.body;
    try{
        const hashedpassword = await bcrypt.hash(password, 5);

        const newUser = await createUser({username, password:hashedpassword});
        
        if (!newUser){
            return res.status(400).json(`New user could not be registered.`)
        };

        const token = jwt.sign({id: newUser.id, username: newUser.username}, process.env.JWT_SECRET);

        res.status(201).json(token);

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
            return res.status(401).json(`Not authorized.`)
        };

        const token = jwt.sign({id: userInfo.id, username: userInfo.username}, process.env.JWT_SECRET);

        res.status(201).json(token);
    

    }catch(err){
        console.log(err);
        res.json(`Unable to login.`)
    }
});



//GET /users/me
router.route("/:id").get(verifyToken, async(req, res)=>{

    if (!verifyToken){
        return res.status(403).send(`Please log in to access the account!`)
    };

    const id = req.params.id;

    if(isNaN(id) || id < 0){
        return res.status(400).json(`Please use a valid number for the ID.`)
    };

    const user = await getUserById(id);

    if (!user){
        return res.status(404).json(`User not found.`)
    };

    res.send(user[0]);
});


