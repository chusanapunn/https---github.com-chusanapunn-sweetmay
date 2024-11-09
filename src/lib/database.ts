import { createPool } from 'mysql2/promise';

export const getDBConnection = async () => {
        const connection = await createPool({
        user: process.env.DATABASE_USER,
        host: process.env.DATABASE_HOST,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    });

return connection;
};
