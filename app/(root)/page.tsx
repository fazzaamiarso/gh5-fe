import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const getAllCases = async () => {
  const res = await fetch(`${process.env.BASE_API}/cases`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filteredData =
    data.data.length > 0
      ? data.data.filter(({ Data }: { Data: any }) => {
          return Data.status !== "Pending";
        })
      : [];

  return filteredData;
};

export default async function Home() {
  const data = await getAllCases();

  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.length > 0 ? (
        data.map(({ Data }: { Data: any }) => {
          return (
            <Card
              key={Data.id}
              className="flex h-full flex-col rounded-lg bg-background p-4 shadow-md"
            >
              <div className="flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>J</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xs font-semibold">
                    {Data?.contributor?.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {Data?.contributor?.lawyer?.position}
                  </p>
                </div>
              </div>
              <div className="mb-auto mt-4">
                <h4 className="text-xl font-semibold">{Data?.case_name}</h4>
                <p className="line-clamp-3 text-sm text-muted-foreground">
                  {Data?.case_description}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span
                  className={cn("rounded-full px-3 py-1 text-xs font-medium", {
                    "bg-yellow-500 text-yellow-50":
                      Data.status === "On Progress",
                    "bg-red-500 text-red-50": Data.status === "Closed",
                    "bg-neutral-100 text-neutral-500":
                      Data.status === "Pending",
                  })}
                >
                  {Data.status}
                </span>
                <Link
                  href={`/case/${Data.id}`}
                  className="flex items-center gap-1 text-primary hover:underline"
                  prefetch={false}
                >
                  view case <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            </Card>
          );
        })
      ) : (
        <div className="flex w-full items-center justify-center">
          <p>No cases need attentions yet!</p>
        </div>
      )}
    </section>
  );
}
