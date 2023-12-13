import { Button, Flex, Metric, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Flex className="container py-3">
          <Flex justifyContent="start" alignItems="center" className="gap-10">
            <div className="flex items-center flex-row gap-3">
              <img src="/logo.svg" width={30} />
              <span className="text-white font-black text-xl">BugsBeacon</span>
            </div>

            <Button variant="light">
              <Link href="/">Product</Link>
            </Button>
            <Button variant="light">
              <Link href="/">Pricing</Link>
            </Button>
            <Button variant="light">
              <Link href="/">Docs</Link>
            </Button>
            <Button variant="light">
              <Link href="/">Blog</Link>
            </Button>
          </Flex>
          <Flex justifyContent="end" alignItems="center" className="gap-4">
            <Button variant="primary">
              <Link href="/dashboard/acme/">Sandbox</Link>
            </Button>
          </Flex>
        </Flex>
      </nav>
      <div className="min-h-screen">{children}</div>
      <footer className="border-t border-tremor-border dark:border-dark-tremor-border">
        <div className="container py-10">
          <Text>Bugs Beacon</Text>
        </div>
      </footer>
    </div>
  );
}
