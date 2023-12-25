"use client";

import { useSupabase } from "@/app/supabase-provider";
import { getURL } from "@/utils/helpers";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function AuthForm() {
  const { supabase } = useSupabase();
  return (
    <div className="flex flex-col space-y-4">
      <Auth
        supabaseClient={supabase}
        providers={["github"]}
        redirectTo={`${getURL()}/auth/callback`}
        onlyThirdPartyProviders
        appearance={{
          theme: ThemeSupa,
        }}
        theme="dark"
      />
    </div>
  );
}
