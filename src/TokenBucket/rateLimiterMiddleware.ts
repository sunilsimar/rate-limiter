import type express from 'express';
import { TokenBucket } from './TokenBucket';

const buckets  = new Map<string, TokenBucket>();

export const capacity = 10;
export const refillRate = 1;

export const rateLimitMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const ip = req.ip;

    if(!ip){
        res.status(500).send("No IP address found");
        return;
    }

    //ip address is associated with any bucket or not
    const hasIpNoBucket = !buckets.has(ip);

    //creating a bucket for this ip
    if(hasIpNoBucket){
        buckets.set(ip, new TokenBucket(capacity, refillRate))
    }

    const bucket = buckets.get(ip);
    if(bucket && bucket.allowRequests()){
        next();
    }
    else{
        res.status(429).send("Too many requests")
    }
}