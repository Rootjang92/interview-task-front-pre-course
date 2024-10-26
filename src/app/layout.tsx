import React from "react";
import localFont from "next/font/local";

import LayoutRecoil from "./layout.recoil";
import './global.css';

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard"
})

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body className="max-w-screen-sm mx-auto min-h-screen bg-[#F6F6F6]">
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
