import React from "react";
import type { Metadata } from "next";

export const metadata : Metadata = {
    title: 'About Page',
    description: 'Generated by create next app',
  }

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="text-3xl font-normal">NavBar</nav>
      {children}
    </>
  );
}
