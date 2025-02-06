import './globals.css';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'سامانه ثبت نام',
  description: 'سامانه ثبت نام پیشرفته',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <header className="w-full flex justify-center py-6" style={{ backgroundColor: '#1a472a' }}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="لوگو"
              width={180}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}