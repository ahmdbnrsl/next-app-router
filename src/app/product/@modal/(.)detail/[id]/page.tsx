import { fetchData } from '@/services/products';
import Modal from '@/components/core/Modal';

export default async function DetailProductPage(props: any) {
    const { params } = props;
    const product = await fetchData(
        'https://next-app-router-gamma.vercel.app/api/product/?id=' + params.id
    );
    return (
        <Modal>
            <img
                src={product.data.image}
                alt={product.data.name}
                className='w-full object-cover aspect-square col-span-2'
            />
            <div className='bg-white p-4 px-6'>
                <h3>{product.data.name}</h3>
            </div>
        </Modal>
    );
}
