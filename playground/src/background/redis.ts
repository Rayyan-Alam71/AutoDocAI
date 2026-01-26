import {Redis} from "ioredis";
let redis : Redis;

export function getRedisConnection() {
    if(!redis) {
        redis = new Redis({
            host : '127.0.0.1',
            port : 6379,
            maxRetriesPerRequest : null,
            enableReadyCheck :false
        })
    } 
    return redis
}