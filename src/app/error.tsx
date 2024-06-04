'use client';

export default function Error() {
    return (
        <div className='w-full min-h-screen bg-slate-900 flex justify-center items-center gap-4'>
            <h1 className='text-3xl font-bold text-white'>500</h1>
            <h2 className='text-white'>Something Went Wrong</h2>
        </div>
    );
}
