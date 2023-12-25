import { createServerSupabaseClient } from "@/app/supabase-server";
import { redirect } from "next/navigation";
import OrganizationForm from "./organization-form";

export default async function Dashboard() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/");

  /**
   * Redirect the user to the organization Dashboard.
   */
  const orgs = await supabase.from("organization").select("*");
  if (orgs.data?.length) return redirect(`/dashboard/${orgs.data[0].id}`);

  return (
    <div className="container h-screen flex justify-center items-center">
      <OrganizationForm />
    </div>
  );
}
