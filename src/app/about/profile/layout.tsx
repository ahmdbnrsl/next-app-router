import Link from 'next/link';

export default function TitleLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <h1>Title</h1>
            <div>{children}</div>
        </>
    );
}
