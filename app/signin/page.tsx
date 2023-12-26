import { getSession } from "@/app/supabase-server";

import { redirect } from "next/navigation";
import Logo from "@/components/logo";
import AuthForm from "./auth-form";
import { Button, Flex, Metric } from "@tremor/react";
import Link from "next/link";
import Navbar from "../(com)/navbar";

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <div>
      <nav>
        <Flex className="container py-3">
          <Flex justifyContent="start" alignItems="center" className="gap-10">
            <Link href="/">
              <Logo showText />
            </Link>
          </Flex>
          <Navbar />
        </Flex>
      </nav>
      <div>
        <div className="flex flex-col items-center gap-4 mt-40">
          <Metric className="text-align">
            Let&apos;s connect your Git provider
          </Metric>
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
