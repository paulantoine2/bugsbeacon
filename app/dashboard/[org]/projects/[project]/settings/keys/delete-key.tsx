"use client";

import { useSupabase } from "@/app/supabase-provider";
import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function DeleteKey({ id }: { id: number }) {
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    if (confirm("Are you sure ?")) {
      setLoading(true);
      const response = await supabase.from("project_key").delete().eq("id", id);

      if (response.error) {
        toast.error("An error occured. Please try again.");
        setLoading(false);
        return;
      }

      router.refresh();
    }
  };
  return (
    <Button size="xs" color="red" onClick={handleClick} loading={loading}>
      Delete & Revoke
    </Button>
  );
}
