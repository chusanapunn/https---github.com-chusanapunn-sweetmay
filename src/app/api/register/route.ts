import { NextResponse } from 'next/server';
import { createConnection } from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { getDBConnection } from '@/lib/database';


export async function POST(req: Request) {
    const { fullName, email, pwd, userName} = await req.json();

    // try{

    //     const connection = await getDBConnection();

    //     const [existingUser] = await connection.execute(
    //         'SELECT * FROM users WHERE email= ?;',
    //         [email]
    //     );

    //     if(existingUser.length > 0){
    //         await connection.end();
    //         return NextResponse.json({message:'Email already exists'}, { status: 400 });
    //     }

    //     const hashedPaswword = await bcrypt.hash(pwd, 10);

    //     await connection.execute(
    //         'INSERT INTO users (fullName, email, pwd, userName) VALUES (?,?,?,?);',
    //         [fullName, email, hashedPaswword, userName]
    //     );

    //     await connection.end();
    //     return NextResponse.json({message:'User created successfully'}, { status: 201 });
        
    // }catch (error){
    //     console.error('Error during registration: ',error);
    //     return NextResponse.json({error: 'Registration failed'}, {status: 500});
    // }
}