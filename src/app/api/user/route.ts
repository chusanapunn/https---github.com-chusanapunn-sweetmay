import { getServerSession  } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '@/lib/authOptions';

export async function GET(req: Request) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const userData = {
        name: session.user?.name || "Unknown User",
        email: session.user?.email,

    };

    return NextResponse.json(userData);
}
