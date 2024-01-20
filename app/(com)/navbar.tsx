import Link from "next/link";
import { createServerSupabaseClient } from "@/app/supabase-server";

import { Button, Flex } from "@tremor/react";

import DasboardButton from "@/components/dashboard-button";

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Flex justifyContent="end" alignItems="center" className="gap-4">
      {user ? (
        <DasboardButton />
      ) : (
        <>
          <a href="https://sandbox.bugsbeacon.com">
            <Button variant="secondary" className="!border-zinc-700">
              Discover with Sandbox
            </Button>
          </a>
          <Link href="/signin">
            <Button>Get started</Button>
          </Link>
        </>
      )}
    </Flex>
  );
}
