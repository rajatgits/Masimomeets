import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
<link rel="icon" href="/icon.png" type="image" />;
export const metadata: Metadata = {
  title: "Masimomeets",
  description: "A resturant website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={hankenGrotesk.className}>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
