import type { Metadata } from "next";
import { Exo, Exo_2, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // choisis les graisses dont tu as besoin
  variable: "--font-exo",        // optionnel : permet d'utiliser une variable CSS
});
const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-exo2",        // optionnel : permet d'utiliser une variable CSS
});

export const metadata: Metadata = {
  title: "OSA",
  description: "Site officiel de l'OSA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exo.variable} ${exo2.variable} antialiased`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
