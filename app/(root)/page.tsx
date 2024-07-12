import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const mockCaseData = [
  {
    id: "1",
    attorney: {
      name: "John Doe",
      position: "Lead Attorney",
      firm: "Acme Inc. vs. Widgets Co.",
    },
    category: "Intellectual property dispute over patent infringement.",
    status: "Ongoing",
  },
  {
    id: "2",
    attorney: {
      name: "Sarah Williams",
      position: "Senior Associate",
      firm: "Smith vs. Jones",
    },
    category: "Personal injury case from a car accident.",
    status: "Closed",
  },
  {
    id: "3",
    attorney: {
      name: "Michael Chen",
      position: "Associate",
      firm: "Greenfield vs. Citywide",
    },
    category: "Zoning dispute over a new development project.",
    status: "Ongoing",
  },
  {
    id: "4",
    attorney: {
      name: "Lisa Patel",
      position: "Partner",
      firm: "Acme Inc. vs. Megacorp",
    },
    category: "Breach of contract dispute over a supply agreement.",
    status: "Ongoing",
  },
];

const getAllCases = async () => {
  const res = await fetch("http://34.101.147.150:8080/api/cases");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function Home() {
  const data = await getAllCases();

  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.data.map(({ Data }: { Data: any }) => {
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
                <h3 className="text-xs font-semibold">[LAWYER NAME]</h3>
                <p className="text-xs text-muted-foreground">Lawyer</p>
              </div>
            </div>
            <div className="mb-auto mt-4">
              <h4 className="text-xl font-semibold">[CASE NAME]</h4>
              <p className="text-sm text-muted-foreground">[CATEGORY]</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span
                className={cn("rounded-full px-3 py-1 text-xs font-medium", {
                  "bg-yellow-500 text-yellow-50": Data.status === "Ongoing",
                  "bg-red-500 text-red-50": Data.status === "Closed",
                  "bg-neutral-100 text-neutral-500": Data.status === "Pending",
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
      })}
    </section>
  );
}
