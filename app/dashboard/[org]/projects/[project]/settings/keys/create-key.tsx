"use client";

import { useSupabase } from "@/app/supabase-provider";
import { Button, Dialog, DialogPanel, TextInput, Title } from "@tremor/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  name: string;
}

export default function CreateKey({ project_id }: { project_id: string }) {
  const { supabase } = useSupabase();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (form_data: FormData) => {
    setLoading(true);
    const { data } = await supabase
      .from("project_key")
      .insert({ name: form_data.name, project_id })
      .select()
      .single();

    setIsOpen(false);
    router.refresh();
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Generate a key</Button>

      <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
        <DialogPanel>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Title className="mb-3">Generate a key</Title>
            <Controller
              control={control}
              name="name"
              rules={{ required: true }}
              render={({ field }) => (
                <TextInput placeholder="Name" {...field} />
              )}
            />

            <div className="mt-3">
              <Button size="sm" type="submit" loading={loading}>
                Generate
              </Button>
            </div>
          </form>
        </DialogPanel>
      </Dialog>
    </>
  );
}
