import { fetchData } from '@/services/products';

export default async function DetailProductPage(props: any) {
    const { params } = props;
    const product = await fetchData(
        'https://next-app-router-gamma.vercel.app/api/product/?id=' + params.id
    );
    return (
        <div className='container mx-auto my-10'>
            <div className='w-1/2 mx-auto border border-gray-700'>
                <img
                    src={product.data.image}
                    alt={product.data.title}
                    className='w-full object-cover aspect-square col-span-2'
                />
                <div className='bg-white p-4 px-6'>
                    <h3>{product.data.title}</h3>
                </div>
            </div>
        </div>
    );
}
