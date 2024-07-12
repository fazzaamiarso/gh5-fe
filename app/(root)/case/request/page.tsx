"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { redirect } from "next/navigation";

const formSchema = z.object({
  caseName: z.string(),
  caseDescription: z.string(),
  caseFile: z.any().optional(),
});

export default function CaseRequest() {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    if (!session?.user?.email) return alert("Please login first!");
    const formData = new FormData();
    formData.append("case_name", data.caseName);
    formData.append("case_description", data.caseDescription);
    formData.append("document", data.caseFile);
    formData.append("client_id", session?.user?.email);

    await fetch(`${process.env.BASE_API}/cases`, {
      method: "POST",
      body: formData,
    });
  };

  useEffect(() => {
    if (!session?.user) return redirect("/");
  }, [session?.user]);

  if (!session?.user) return null;

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold">Fill your case details</h2>
      <p className="mb-8">
        Please fill it as detailed as possible to make sure lawyers can
        understand your case easily. It will also make your case more likely to
        get approved.
      </p>
      <div className="rounded-sm p-4 ring-1 ring-neutral-300">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="caseName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Case Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Copyright Infringement" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="caseDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Case Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="describe in detail what problems are you having"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="caseFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Case File</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      value={field.value?.fileName as string}
                      onChange={(event) => {
                        field.onChange(event.target.files[0]);
                      }}
                    />
                  </FormControl>
                  <FormDescription>
                    *Attach any file that may help lawyers with context and
                    understand your problems
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit Case</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
