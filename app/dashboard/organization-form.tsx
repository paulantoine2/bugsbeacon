"use client";

import { useSupabase } from "@/app/supabase-provider";
import { organizationCreateSchema } from "@/lib/validations/organization";
import { OfficeBuildingIcon } from "@heroicons/react/outline";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  Flex,
  Icon,
  Subtitle,
  TextInput,
  Title,
} from "@tremor/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

type FormData = z.infer<typeof organizationCreateSchema>;

export default function OrganizationForm() {
  const { supabase } = useSupabase();
  const router = useRouter();

  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(organizationCreateSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSaving(true);

    const response = await supabase
      .from("organization")
      .insert({ name: data.name });

    if (response.error) {
      toast.error("An error occured. Please try again.");
      setIsSaving(false);
    }

    router.refresh();
  };

  return (
    <Card className="max-w-md">
      <Icon
        icon={OfficeBuildingIcon}
        color="orange"
        variant="solid"
        size="sm"
        className="mb-4"
      />
      <Title>Your organization</Title>
      <Subtitle>First, you must create a new organization.</Subtitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          className="my-10"
          placeholder="Name"
          {...register("name")}
        ></TextInput>

        <Button type="submit" loading={isSaving}>
          Create
        </Button>
      </form>
    </Card>
  );
}
