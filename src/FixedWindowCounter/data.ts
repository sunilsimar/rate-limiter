export interface WindowCounter {
    count: number;
    startTime: number;
  }
  
export const rateLimitWindowInMs = 70 * 1000
export const requestLimitPerWindow = 15
export const counters = new Map<string, WindowCounter>()
