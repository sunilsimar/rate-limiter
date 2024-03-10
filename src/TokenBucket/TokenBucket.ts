const SECONDS_CONVERSION = 1000;

export class TokenBucket {
    capacity: number
    tokens: number
    refillRatePerSeconds: number
    lastRefill: number

    constructor(capacity: number, refill: number){
        this.capacity = capacity,
        this.tokens = capacity,
        this.refillRatePerSeconds = refill,
        this.lastRefill = Date.now()
    }

    refill(){
        const now = Date.now();
        const timeSinceLastRefillInSeconds = (now - this.lastRefill)/SECONDS_CONVERSION;
    }
}