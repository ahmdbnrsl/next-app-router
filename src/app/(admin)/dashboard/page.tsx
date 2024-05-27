'use client';
import { useState } from 'react';
export default function AdminProductPage() {
    const [status, setStatus] = useState('');
    const revalidate = async () => {
        const res = await fetch(
            'https://next-app-router-gamma.vercel.app/api/revalidate?tag=products&secret=via',
            { method: 'POST' }
        );
        if (!res.ok) {
            setStatus('Revalidate False');
        } else {
            const statuss = await res.json();
            if (statuss.revalidate) {
                setStatus('Revalidate Success');
            }
        }
    };

    return (
        <div className='w-full flex justify-center items-center min-h-screen'>
            <h1>{status}</h1>
            <button
                className='px-5 py-2 bg-white rounded-full border border-gray-500'
                onClick={() => revalidate()}
            >
                Revalidate
            </button>
        </div>
    );
}
