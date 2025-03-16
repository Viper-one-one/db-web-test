import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sample DB & API",
  description: "Testing sample database and API"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
          <header
            className={`${geistSans.variable} ${geistMono.variable}`}>
            <div>
              <h1 className="text-left text-3xl font-bold p-4">Sample DB & API</h1>
            </div>
          </header>
        {children}
        <footer 
          className={`${geistSans.variable} ${geistMono.variable} text-center text-sm p-4 border-t mt-4`}>
          <p>© 2025 Taylor Nastally. All rights reserved.</p>
        </footer>
      </body>
      
    </html>
  );
}
