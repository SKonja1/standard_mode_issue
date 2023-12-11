import { registerAs } from "@nestjs/config";

export const serverConfig = registerAs('server', () => ({
    environment: process.env.NODE_ENV,
    port: process.env["SERVER_PORT"],
    mongo_db: {
        hostname: process.env.MONGO_HOSTNAME || "localhost:27017",
        name: process.env.MONGO_NAME || 'myDB',
        user: process.env.MONGO_USER || '',
        pass: process.env.MONGO_PASS || '',
        auth: process.env.MONGO_AUTH || ''
    }
}));