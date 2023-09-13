"use client";
import Nav from "@/components/sidebar";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <Nav openNav={openNav} onCloseNav={onCloseNav} />
        <body style={{ marginLeft: "20rem", marginTop: "2rem" }}>
          {children}
        </body>
      </BrowserRouter>
    </html>
  );
}
