import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/Navbar";


const SFPro = localFont({
  src: [
    
    {
      path: "./font/SF-Pro-Display-Semibold.otf",
      weight:"600",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Display-Medium.otf",
      weight:"500",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Display-Regular.otf",
      weight:"400",
      style: "normal;",

    },
    {
      path: "./font/SF-Pro-Display-Bold.otf",
      weight:"700",
      style: "normal;",
    },
  ]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFPro.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
