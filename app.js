import express from "express";
const app = express();
export default app;
import usersRouter from "./api/users.js";
import ordersRouter from "./api/orders.js";




app.use(express.json());

app.use("/users", usersRouter);

app.use("/orders", ordersRouter);


app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(`Sorry! Something went wrong!`);
});