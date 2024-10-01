// Next
import type { Metadata } from "next";
import localFont from "next/font/local";

// Contexts
import { TokenProvider } from "@/context/TokenContext/TokenContext";
import { MenuProvider } from "@/context/MenuContext/MenuContext";

// Components
import Header from "@/components/HeaderComponents/Header/Header";
import Footer from "@/components/FooterComponents/Footer/Footer";

// Styles
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechZen",
  description: "E-Commerce TechZen",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {

  return (

    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#212121]`}
      >
        <TokenProvider>
          <MenuProvider>
            <Header />
            {children}
            <Footer />
          </MenuProvider>
        </TokenProvider>
      </body>
    </html>

  )

};