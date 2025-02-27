import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";


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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
