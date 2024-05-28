export default function Loading() {
    const data = Array(10).fill(0);
    return (
        <div className='grid grid-cols-auto-fit gap-5'>
            {data.map(() => (
                <div className='place-items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                    <a href='#'>
                        <div className='w-full p-8 rounded-t-lg object-cover h-96 bg-gray-600'></div>
                    </a>
                    <div className='px-5 pb-5'>
                        <a href='#'>
                            <div className='text-xl p-3 tracking-tight bg-gray-600 w-2/3'></div>
                        </a>

                        <div className='flex items-center justify-between'>
                            <div className='text-xl p-3 tracking-tight bg-gray-600 w-2/3'></div>
                            <div className='text-xl p-3 tracking-tight bg-gray-600 w-2/3'></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
