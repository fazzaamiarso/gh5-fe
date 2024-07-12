"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session?.user);
  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex w-11/12 items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold" prefetch={false}>
          Law Firm
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <Button variant="default" asChild>
                <Link href="/case/request">Submit Case</Link>
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => signIn()}>
              Login
            </Button>
          )}
          {session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link
                    href={`/lawyer/dasd`} // should be profile for user
                    className="flex items-center gap-2"
                    prefetch={false}
                  >
                    <div className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Button
                    className="flex items-center gap-2"
                    onClick={() => signOut()}
                  >
                    <div className="h-4 w-4" />
                    <span>Logout</span>
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </header>
  );
}
