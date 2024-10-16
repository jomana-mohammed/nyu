import type { Metadata } from "next";
import "./globals.css";
import NavHeader from "./navHeader/page";
import FooterPage from "./footer/page";

export const metadata: Metadata = {
  title: "NYU",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body
      >
        <NavHeader/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}
