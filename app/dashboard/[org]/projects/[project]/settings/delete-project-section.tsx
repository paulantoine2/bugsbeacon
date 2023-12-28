"use client";

import { useSupabase } from "@/app/supabase-provider";
import { Card, Title, Flex, Button, Text } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function DeleteProjectSection({ id }: { id: string }) {
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    if (confirm("Are you sure ?")) {
      setLoading(true);
      const response = await supabase.from("project").delete().eq("id", id);

      if (response.error) {
        toast.error("An error occured. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    }
  };

  return (
    <Card decorationColor="red" decoration="top">
      <Title>Delete project</Title>
      <Text className="mb-6">
        The project will be permanently deleted, including its issues and
        alerts. This action is irreversible and can not be undone.
      </Text>
      <Flex justifyContent="end">
        <Button color="red" size="xs" loading={loading} onClick={handleClick}>
          Delete
        </Button>
      </Flex>
    </Card>
  );
}
