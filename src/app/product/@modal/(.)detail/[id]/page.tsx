'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

const Modal = dynamic(() => import('@/components/core/Modal'));
const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DetailProductPage(props: any) {
    const { params } = props;
    const { data, error, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
        fetcher
    );
    const product = {
        data: data?.data
    };
    return (
        <Modal>
            <Image
                src={product?.data?.image}
                alt={product?.data?.name}
                className='w-full object-cover aspect-square col-span-2'
                width={5000}
                height={5000}
            />
            <div className='bg-white p-4 px-6'>
                <h3>{product?.data?.name}</h3>
            </div>
        </Modal>
    );
}
