"use client";

import { ArrowRightIcon } from "@heroicons/react/outline";
import { Button } from "@tremor/react";
import Link from "next/link";
import React from "react";

export default function DasboardButton() {
  return (
    <Link href="/dashboard">
      <Button
        variant="secondary"
        className="!border-zinc-800"
        icon={ArrowRightIcon}
        iconPosition="right"
      >
        Dashboard
      </Button>
    </Link>
  );
}
