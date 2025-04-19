import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Learning NextJS",
  description: "Generated app for learning NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* navbar  */}
        <Navbar />

        {/* main body */}
        <main className={`container mx-auto px-6 lg:px-48 py-14  w-full h-full`}>
          {children}
        </main>

      {/* footer  */}
      <Footer />
      </body>
    </html>
  );
}
