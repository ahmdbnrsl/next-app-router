import { NextResponse, NextRequest } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get('tag');
    const secret = request.nextUrl.searchParams.get('secret');

    if (secret !== 'via' /*process.env.REVALIDATE_TOKEN*/) {
        return NextResponse.json(
            { status: 401, message: 'unauthorized' },
            { status: 401 }
        );
    }

    if (!tag) {
        return NextResponse.json(
            { status: 400, message: 'missing' },
            { status: 400 }
        );
    }
    revalidateTag(tag);
    return NextResponse.json(
        {
            revalidate: true,
            status: 200,
            message: 'success revalidate!'
        },
        { status: 200 }
    );
}
