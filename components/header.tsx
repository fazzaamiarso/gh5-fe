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
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="bg-background shadow-sm">
      <div className="mx-auto flex w-11/12 items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold" prefetch={false}>
          <Image src="/justify-logo.png" width={50} height={50} alt="" />
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
                    href={`/lawyer/${session.user.email}`} // should be profile for user
                    className="flex w-full items-center gap-2"
                    prefetch={false}
                  >
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <button
                    className="flex w-full items-center gap-2"
                    onClick={() => signOut()}
                  >
                    <span>Logout</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : null}
        </div>
      </div>
    </header>
  );
}
