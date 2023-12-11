import Link from "next/link";
import React from "react";

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/dashboard/acme">Dashboard</Link>
      </nav>
      {children}
    </div>
  );
}
