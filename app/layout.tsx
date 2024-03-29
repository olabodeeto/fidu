import "./globals.css";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fidu | Secure your next purchase",
  description: "Fostering trust, one transaction at a time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
