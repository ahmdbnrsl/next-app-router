'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './navbar';
import { Poppins } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const disableNavbar: Array<string> = ['/login', '/register'];

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname();
    return (
        <html lang='en'>
            <body
                className={`${poppins.className} w-full min-h-screen bg-white dark:bg-gray-950`}
            >
                <SessionProvider>
                    {!disableNavbar.includes(pathName) && <Navbar />}
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
