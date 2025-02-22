import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";


export const metadata: Metadata = {
  title: "Redefine UI",
  description: "redefine ui is a modern ui components!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-montserrat antialiased`}
      >
        <ThemeProvider attribute={"class"}>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
