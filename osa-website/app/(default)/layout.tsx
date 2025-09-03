import type { Metadata } from "next";
import { Exo, Exo_2} from "next/font/google";
import "./globals.css";

import Nav from "@/components/nav";
import Footer from "@/components/footer/Footer";


const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSA FC",
  description: "Site officiel de FC OSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${exo.variable} ${exo2.variable} antialiased max-w-screen-2xl mx-auto`}
      >
        <Nav/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
