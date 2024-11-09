import { NextResponse } from 'next/server';
import { getDBConnection } from '@/lib/database';

export async function GET() {
    try {
        const connection = await getDBConnection();
        const [rows] = await connection.query('SELECT * FROM webimages');
        connection.end(); 
        return NextResponse.json(rows);
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
