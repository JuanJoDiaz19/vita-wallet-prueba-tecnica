import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";

const open_sans = Open_Sans({
  weight: ['400', '300', '600', '700', '800'], // Include all desired weights
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vita Wallet",
  description: "Welcome to vita wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={open_sans.className}>
        {children}
      </body>
    </html>
  );
}
