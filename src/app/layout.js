import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Umesh Kumar - Full Stack Developer",
  description: "Portfolio of Umesh Kumar, a passionate full-stack developer specializing in React, Next.js, and modern web technologies. Explore my projects and get in touch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
