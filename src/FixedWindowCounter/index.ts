import express from "express";
import { rateLimitMiddleware } from "./rateLimiterMiddleware";

export const FixedWindowCounterApp = express();

const PORT = 3003;

FixedWindowCounterApp.get('/unlimited', (req,res)=>{
    res.send("Unlimited! Let's start");
})

FixedWindowCounterApp.get('/limited',rateLimitMiddleware,(req,res)=>{
    res.send("limited request")
})

FixedWindowCounterApp.listen(PORT, ()=>{
    console.log(`Server is running at localhost:${PORT}`);
})