import express from "express";

export const FixedWindowCounterApp = express();

const PORT = 3003;

FixedWindowCounterApp.get('/unlimited', (req,res)=>{
    res.send("Unlimited! Let's start");
})

FixedWindowCounterApp.listen(PORT, ()=>{
    console.log(`Server is running at localhost:${PORT}`);
})