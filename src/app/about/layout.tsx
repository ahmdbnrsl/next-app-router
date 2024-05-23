import Link from 'next/link';

export default function AboutLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav className='fixed right-0 top-72 z-10 h-screen w-60 bg-gray-800'>
                <ul className='ml-5'>
                    <Link href='/home'>
                        <li className='mr-3 text-blue-300 cursor-pointer'>
                            Home
                        </li>
                    </Link>
                    <Link href='/about'>
                        <li className='mr-3 text-blue-300 cursor-pointer'>
                            About
                        </li>
                    </Link>
                    <Link href='/about/profile'>
                        <li className='mr-3 text-blue-300 cursor-pointer'>
                            Profile
                        </li>
                    </Link>
                </ul>
            </nav>
            <div>{children}</div>
        </>
    );
}
