import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../app/component/Navbar"
import localFont from "next/font/local"
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['300','400','700'],
  variable: '--font-dmsans'
})



const bwmss01 = localFont({
  src: [
    {
      path: "../../public/fonts/BwModelica_SS01/BwModelicaSS01-Regular.woff2",
      weight: "300", //light
      style: "normal"
    },
    {
      path: "../../public/fonts/BwModelica_SS01/BwModelicaSS01-Bold.woff2",
      weight: "700", //bold
      style: "normal"
    },


  ],
  variable: "--font-bwmss01"
})

export const metadata: Metadata = {
  title: "Arjun Jain – Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmsans.variable} ${bwmss01.variable}`}>
     
        {children}</body>
    </html>
  );
}
