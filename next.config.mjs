/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'drive.google.com'
        }],
    
    
    },
    env: {
        DATABASE_HOST: 'localhost',
        DATABASE_USER: 'root',
        DATABASE_PASSWORD: 'Rompo34833aA.',
        DATABASE_NAME: 'sweetmaydb',
        DATABASE_URL: 'mysql://kujira:Rompo34833aA,@localhost:3306/sweetmaydb',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'sexylady',
        MONGODB_URI: 'mongodb://localhost:27017/sweetmayDB',

    }
};

export default nextConfig;
