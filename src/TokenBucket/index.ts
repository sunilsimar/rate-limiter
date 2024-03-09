import express from "express";

const TokenBucketApp = express();

const PORT = 8080;

TokenBucketApp.get('/unlimited', (req,res)=>{
    res.send("Unlimited! let's start");
})

TokenBucketApp.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})