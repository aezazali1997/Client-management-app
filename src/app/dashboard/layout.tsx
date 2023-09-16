"use client";
import Nav from "@/components/sidebar";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openNav, setOpenNav] = useState(true);
  const onCloseNav = () => {
    setOpenNav(false);
  };
  return (
    <html lang="en">
      <body>
        <Nav openNav={openNav} onCloseNav={onCloseNav} />
        <div style={{ marginLeft: "20rem", marginTop: "2rem" }}>{children}</div>
      </body>
    </html>
  );
}
