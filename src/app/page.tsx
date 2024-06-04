import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home',
    description: 'Aplikasi saya',
    authors: [
        {
            name: 'Via Fitriana',
            url: 'https://instagram.com/viiiaaaa_fy'
        }
    ],
    icons: {
        icon: '/icon.png'
    },
    openGraph: {
        title: 'Beni X Via',
        description: 'I Love You'
    }
};

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            Hello World!
        </main>
    );
}
