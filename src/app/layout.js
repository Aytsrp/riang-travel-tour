import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Riang Tour and Travel",
  description: "Lorem Ipsum Dolor Sit Amet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
