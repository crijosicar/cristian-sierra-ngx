import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';
import ScrollUp from '@/app/components/scrollup/ScrollUp';

const poppins = Poppins({ weight: ['400', '500', '600'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
    title: 'Cristian Sierra | Software Engineer',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Header />
                <main className="main">{children}</main>
                <Footer />
                <ScrollUp />
            </body>
        </html>
    );
}
