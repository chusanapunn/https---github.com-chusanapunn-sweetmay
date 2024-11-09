import  { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getDBConnection } from './database';
import bcrypt from 'bcrypt';

export const authOptions: AuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
  
        async authorize(credentials) {
          const connection = await getDBConnection();
  
          const [user] = await connection.execute(
            'SELECT * FROM users WHERE email = ?',
            [credentials?.email]
          );
          await connection.end();
          if (!credentials) throw new Error("no credentials to log in as");
          
          // if (Array.isArray(user) && user.length > 0) {
          //   const isValidPassword = await bcrypt.compare(credentials.password, user[0].pwd);
          //   if (isValidPassword) {
          //     return { id: user[0].id, email: user[0].email }; // Return user data
          //   }
          //   console.log('User :',user[0].userName);
          // }
          return null; // If no user found or password is invalid
        }
      })
    ],
    pages: {
      signIn: '/sweetmay', // Redirect here on sign-in failure
    },
    session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60, // 30 days
      updateAge: 24 * 60 * 60, // Update session every 24 hours
    },
    jwt: {
      // Set JWT signing key and other options if needed
    },
    callbacks: {
      async session({ session, token }) {
  
        session.user = token.user;
        return session;
      },
      async jwt({ token, user }) {
        if (user) token.user = user;
        return token;
      }
    },
  };