import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
    const pathName = usePathname();
    const router = useRouter();
    return (
        <nav className='flex justify-between bg-gray-800 py-5 px-5'>
            <h1 className='text-white'>Navbar</h1>
            <ul className='flex ml-5'>
                <Link href='/'>
                    <li
                        className={`mr-3 ${
                            pathName === '/' ? 'text-blue-300' : 'text-white'
                        } cursor-pointer`}
                    >
                        Home
                    </li>
                </Link>
                <Link href='/about'>
                    <li
                        className={`mr-3 ${
                            pathName === '/about'
                                ? 'text-blue-300'
                                : 'text-white'
                        } cursor-pointer`}
                    >
                        About
                    </li>
                </Link>
                <Link href='/about/profile'>
                    <li
                        className={`mr-3 ${
                            pathName === '/about/profile'
                                ? 'text-blue-300'
                                : 'text-white'
                        } cursor-pointer`}
                    >
                        Profile
                    </li>
                </Link>
            </ul>
            <button
                className='cursor-pointer bg-white text-gray-800 px-5 py-2 rounded hover:bg-gray-100 hover:border hover:border-gray-400 active:border active:border-gray-400'
                onClick={() => {
                    router.push('/login');
                }}
            >
                Login
            </button>
        </nav>
    );
}
