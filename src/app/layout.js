import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zero Event",
  description: "Event Management NextJS Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
