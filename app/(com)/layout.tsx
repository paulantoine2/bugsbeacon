import { Button, Flex, Metric, Text } from "@tremor/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../../components/logo";

export default function ComLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <Flex className="container py-3">
          <Flex justifyContent="start" alignItems="center" className="gap-10">
            <Logo showText />
            <Button variant="light">
              <Link href="#product">Product</Link>
            </Button>
            <Button variant="light">
              <Link href="#pricing">Pricing</Link>
            </Button>
            <Button variant="light">
              <Link href="/">Blog</Link>
            </Button>
          </Flex>
          <Flex justifyContent="end" alignItems="center" className="gap-4">
            <a href="https://sandbox.bugsbeacon.com">
              <Button variant="secondary" className="!border-zinc-800">
                Discover with Sandbox
              </Button>
            </a>
            <Link href="/signin">
              <Button>Get started</Button>
            </Link>
          </Flex>
        </Flex>
      </nav>
      <div className="min-h-screen">{children}</div>
      <footer className="border-t border-tremor-border dark:border-dark-tremor-border">
        <div className="container py-10">
          <Logo showText />
        </div>
      </footer>
    </div>
  );
}
