import React from "react";
import LayoutRecoil from "./layout.recoil";
import './global.css'

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
    <html lang="en">
      <body>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
