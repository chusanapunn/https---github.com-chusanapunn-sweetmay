import { NextResponse } from 'next/server';
import { getDBConnection } from '@/lib/database';

export const POST = async (req: Request) => {
    // if (req.method === 'POST') {
    //     const { title, imageData } = await req.json();  // Parse JSON data from request body
    //     const db = await getDBConnection();
        
    //     try {
    //         const [result] = await db.query(
    //             'INSERT INTO images (title, imageData) VALUES (?, ?)',
    //             [title, Buffer.from(imageData.split(",")[1], 'base64')] // Convert the base64 image to buffer
    //         );

    //         return NextResponse.json({ message: 'Image saved successfully', id: result.insertId });
    //     } catch (error) {
    //         console.error(error);
    //         return NextResponse.json({ message: 'Error saving image' }, { status: 500 });
    //     }
    // } else {
    //     return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
    // }
};





// export default async function handler(req, res) {

//     if (req.method === 'POST') {
//         const { title, imageData } = req.body;
//         const db = await getDBConnection();
//         console.log(db);
//         try {
//             const [result] = await db.query(
//                 'INSERT INTO images (title, imageData) VALUES (?, ?)',
//                 [title, Buffer.from(imageData.split(",")[1], 'base64')]
//             );
//             res.status(200).json({ message: 'Image saved successfully', id: result.insertId });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Error saving image' });
//         }
//     } else {
//         res.status(405).json({ message: 'Method not allowed' });
//     }
// }
