import { getSession } from "@/app/supabase-server";

import { redirect } from "next/navigation";
import Logo from "@/components/logo";
import AuthForm from "./auth-form";
import { Button, Metric } from "@tremor/react";
import Link from "next/link";

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <div className="container py-10">
      <div>
        <Link href="/">
          <Button variant="secondary">Back</Button>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Logo />
        <Metric className="text-align">Get started now</Metric>
        <AuthForm />
      </div>
    </div>
  );
}
