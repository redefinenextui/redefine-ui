import type { Metadata } from "next";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
