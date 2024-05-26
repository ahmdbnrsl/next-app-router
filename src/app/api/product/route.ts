import { NextResponse, NextRequest } from 'next/server';

interface Product {
    id: number | string;
    name: string;
    price: string | number;
}

const data: Array<Product> = [
    {
        id: 1,
        name: 'shoes',
        price: 1000000
    },
    {
        id: 2,
        name: 'uniform',
        price: 300000
    }
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const detailProduct = data.find(item => item.id === Number(id));
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: 'success',
                data: detailProduct
            });
        }
        return NextResponse.json({
            status: 404,
            message: 'not found',
            data: {}
        });
    }
    return NextResponse.json({ status: 200, message: 'success' });
}
