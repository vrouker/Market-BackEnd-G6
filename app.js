import express from "express";
const app = express();
export default app;
import cors from "cors";
import usersRouter from "./api/users.js";
import ordersRouter from "./api/orders.js";
import productsRouter from "./api/products.js";
import reviewsRouter from "./api/reviews.js";



app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.use("/orders", ordersRouter);

app.use("/products", productsRouter);

app.use("/reviews", reviewsRouter);


app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(`Sorry! Something went wrong!`);
});