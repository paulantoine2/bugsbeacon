"use client";

import { useSupabase } from "@/app/supabase-provider";
import { organizationCreateSchema } from "@/lib/validations/organization";
import { projectCreateSchema } from "@/lib/validations/project";
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
import {
  redirect,
  useParams,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

type FormData = z.infer<typeof projectCreateSchema>;

export default function ProjectForm() {
  const { supabase } = useSupabase();
  const params = useParams<{ org: string }>();
  const router = useRouter();

  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(projectCreateSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSaving(true);

    const response = await supabase
      .from("project")
      .insert({
        name: data.name,
        framework: "react",
        organization_id: params.org,
      })
      .select()
      .single();

    if (response.error) {
      toast.error("An error occured. Please try again.");
      setIsSaving(false);
      return;
    }

    router.push(`${response.data?.id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        className="my-10 max-w-md"
        placeholder="Name"
        {...register("name")}
      ></TextInput>

      <Button type="submit" loading={isSaving}>
        Create
      </Button>
    </form>
  );
}
