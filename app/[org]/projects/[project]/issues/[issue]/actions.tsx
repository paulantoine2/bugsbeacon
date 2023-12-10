"use client";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Button } from "@tremor/react";
import React from "react";

export default function Actions() {
  return (
    <div className="flex gap-2">
      <Button variant="secondary" iconPosition="right" icon={ChevronDownIcon}>
        Ignore
      </Button>
      <Button iconPosition="right" icon={ChevronDownIcon}>
        Resolve
      </Button>
    </div>
  );
}
