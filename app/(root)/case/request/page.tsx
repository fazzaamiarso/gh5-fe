"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  caseName: z.string(),
  caseDescription: z.string(),
  caseFile: z.string().optional(),
});

export default function CaseRequest() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async () => {
    return;
  };

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold">Fill your case details</h2>
      <p className="mb-8">
        Please fill it as detailed as possible to make sure lawyers can
        understand your case easily. It will also make your case more likely to
        get approved.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="caseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Case Name</FormLabel>
                <FormControl>
                  <Input placeholder="Contoh: Gugatan Cerai" {...field} />
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
                    placeholder="apa yang membuat anda ingin mengajukkan kasus ini"
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
                  <Input type="file" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit Case</Button>
        </form>
      </Form>
    </div>
  );
}
