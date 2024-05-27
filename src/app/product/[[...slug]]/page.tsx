type ProductProps = { slug: Array<string> };

async function fetchData() {
    // const res = await fetch('https://fakestoreapi.com/products');
    const res = await fetch('/api/product', { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    return res.json();
}

export default async function Product({ params }: { params: ProductProps }) {
    console.log(params);
    const products = await fetchData();
    return (
        <div className='grid grid-cols-auto-fit gap-5'>
            {products.length > 0 &&
                products.map((product: any) => (
                    <div
                        key={product.data.id}
                        className='place-items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
                    >
                        <a href='#'>
                            <img
                                className='w-full p-8 rounded-t-lg object-cover h-96'
                                src={product.data.image}
                                alt='product image'
                            />
                        </a>
                        <div className='px-5 pb-5'>
                            <a href='#'>
                                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate'>
                                    {product.data.title}
                                </h5>
                            </a>
                            <div className='flex items-center mt-2.5 mb-5'>
                                <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                                    <svg
                                        className='w-4 h-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-4 h-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-4 h-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-4 h-4 text-yellow-300'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg
                                        className='w-4 h-4 text-gray-200 dark:text-gray-600'
                                        aria-hidden='true'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='currentColor'
                                        viewBox='0 0 22 20'
                                    >
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                </div>
                                <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
                                    5.0
                                </span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                                    ${product.data.price}
                                </span>
                                <a
                                    href='#'
                                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            {params.slug && (
                <>
                    <p>Category : {params.slug[0]}</p>
                    <p>Gender : {params.slug[1]}</p>
                    <p>ID : {params.slug[2]}</p>
                </>
            )}
        </div>
    );
}
