"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginCard() {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    await signIn("credentials", { ...data });
  };

  if (session?.user) return redirect("/");

  return (
    <div className="mt-10 flex items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="flex bg-destructive-foreground">
          <TabsTrigger className="w-full shadow-none" value="account">
            Netizen
          </TabsTrigger>
          <TabsTrigger className="w-full" value="password">
            Lawyer
          </TabsTrigger>
        </TabsList>
        <TabsContent className="rounded-none" value="account">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="wahyu@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="******" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit Case</Button>
            </form>
          </Form>
        </TabsContent>
        <TabsContent value="password">
          <Card className="rounded-none border-none shadow-none">
            <CardHeader>
              <CardTitle>Lawyer</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Username</Label>
                <Input id="current" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">sign in as lawyer</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
