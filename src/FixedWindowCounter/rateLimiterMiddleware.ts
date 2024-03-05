import type express from 'express';
import { counters, rateLimitWindowInMs, requestLimitPerWindow } from './data';

//Rate Limiting middleware
export const rateLimitMiddleware = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
) => {

    //accessing IP
    const ip = req.ip;

    if(!ip){
        res.status(500).send("IP address not found");
        return;
    }

    const currentTime = Date.now();

    if(!counters.has(ip)){
        counters.set(ip, {count: 1, startTime: currentTime});
        next();
        return;
    }

    const windowCounter = counters.get(ip)

    if (windowCounter) {
      const difference = currentTime - windowCounter.startTime
      const isGreaterThanWindow = difference > rateLimitWindowInMs
  
      if (isGreaterThanWindow) {
        // Reset the counter for the new window
        windowCounter.count = 1
        windowCounter.startTime = currentTime
        next()
      } else if (windowCounter.count < requestLimitPerWindow) {
        // Increment the counter and allow the request
        windowCounter.count++
        next()
      } else {
        // Rate limit exceeded
        res.status(429).send("Too many requests")
      }
    }
  }
