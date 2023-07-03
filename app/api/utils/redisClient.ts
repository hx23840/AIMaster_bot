import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedisClient(): Redis {
    if (!redis) {
        redis = new Redis({
            port: 7713,
            db: 2,
            host: process.env.REDISHOST || 'localhost',
            password: process.env.REDISPASSWORD || '',
        });
    }
    return redis;
}
