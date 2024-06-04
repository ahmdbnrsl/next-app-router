import { fetchData } from '@/services/products';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import('@/components/core/Modal'));

export default async function DetailProductPage(props: any) {
    const { params } = props;
    const product = await fetchData(
        'https://next-app-router-gamma.vercel.app/api/product/?id=' + params.id
    );
    return (
        <Modal>
            <Image
                src={product.data.image}
                alt={product.data.name}
                className='w-full object-cover aspect-square col-span-2'
                width={5000}
                height={5000}
            />
            <div className='bg-white p-4 px-6'>
                <h3>{product.data.name}</h3>
            </div>
        </Modal>
    );
}
