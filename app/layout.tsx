import type { Metadata } from "next";
import { Passions_Conflict, Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/ui/navigation/Navbar";
import Navigation from "@/ui/layout/Navigation";
import { getSession } from "@/lib/auth/session";



const passions_Conflict = Passions_Conflict({
  variable: "--font-passions-sans",
  subsets: ["latin"],
  weight: "400"
});

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
});




export const metadata: Metadata = {
  title: "Cafe 64",
  description: "A place to find good coffee",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getSession()
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${passions_Conflict.variable} antialiased`}
      >
    <Navigation session={session}/>
        <main className="mx-10 mt-10 mb-30">

          {children}
        </main>

      </body>
    </html>
  );
}
