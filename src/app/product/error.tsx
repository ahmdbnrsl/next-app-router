'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='w-full min-h-screen flex justify-center items-center flex-col gap-5'>
            <h2 className='text-gray-800 dark:text-gray-400 text-2xl'>
                Something went wrong!
            </h2>
            <button
                className='bg-blue-300 px-5 py-2 rounded-lg text-white dark:text-gray-950'
                onClick={() => reset()}
            >
                Try again!
            </button>
        </div>
    );
}
