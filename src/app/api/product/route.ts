import { NextResponse, NextRequest } from 'next/server';
import { retrieveDataById } from '@/lib/firebase/service';

interface Product {
    id: number | string;
    title: string;
    image?: string;
    price: string | number;
}

const data: Array<Product> = [
    {
        id: 1,
        title: 'shoes',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNnEdGQ7fdegJuVMDgl1pF95NMaOsK8TGRw&usqp=CAU',
        price: 1000000
    },
    {
        id: 2,
        title: 'uniform',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNnEdGQ7fdegJuVMDgl1pF95NMaOsK8TGRw&usqp=CAU',
        price: 300000
    }
];

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
        const detailProduct = await retrieveDataById('products', id);
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
    const products = await retrieveData('products');
    return NextResponse.json({
        status: 200,
        message: 'success',
        data: products
    });
}
