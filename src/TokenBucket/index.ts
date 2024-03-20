import express from "express";

export const TokenBucketApp = express();

const PORT = 8080;

TokenBucketApp.get('/unlimited', (req,res)=>{
    res.send("Unlimited! let's start");
})

TokenBucketApp.get('/limited',(req,res)=>{
    res.send("Limited! don't overuse me")
})

TokenBucketApp.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
