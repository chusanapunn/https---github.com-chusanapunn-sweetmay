import { NextResponse } from 'next/server';
import { getDBConnection } from '@/lib/database';
import bcrypt from 'bcrypt';

// export async function POST(req: Request) {
//     try {
//         const { email, password } = await req.json();

//         // Get the connection pool and execute the query
//         const db = await getDBConnection();
//         const connection = await db.getConnection();

        // // Query for the user with the given email
        // const [users]: [Array<{ id: number, email: string, pwd: string }>, any] = await connection.execute(
        //     'SELECT * FROM users WHERE email = ?;',
        //     [email]
        // );

        // await connection.release();  // Release the connection

        // // If no users were found, return a 404 response
        // if (!Array.isArray(users) || users.length === 0) {
        //     return NextResponse.json({ message: 'User not found.' }, { status: 404 });
        // }

    //     const user = users[0];

    //     // Compare the provided password with the stored hashed password
    //     const passwordMatch = await bcrypt.compare(password, user.pwd);

    //     // If the password doesn't match, return a 401 response
    //     if (!passwordMatch) {
    //         return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
    //     }

    //     // If the login is successful, return a success message
    //     return NextResponse.json({ message: 'Login successful', userId: user.id }, { status: 200 });
    // } catch (error) {
    //     console.error('Error during login:', error);
    //     return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    // }
// }
