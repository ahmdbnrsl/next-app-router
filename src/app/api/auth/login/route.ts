import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
    const req = await request.json();
    return NextResponse.json({ status: 200, message: 'success', data: req });
}
