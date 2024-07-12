"use client";

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

export default function Home() {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* <div className="flex flex-col gap-4">
        <Card className="rounded-lg bg-background p-4 shadow-md">
          <h3 className="mb-2 text-lg font-semibold">Filters</h3>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Status</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-status-ongoing" />
                  <Label
                    htmlFor="filter-status-ongoing"
                    className="font-normal"
                  >
                    Ongoing
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-status-closed" />
                  <Label htmlFor="filter-status-closed" className="font-normal">
                    Closed
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Category</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-category-intellectual-property" />
                  <Label
                    htmlFor="filter-category-intellectual-property"
                    className="font-normal"
                  >
                    Intellectual Property
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-category-personal-injury" />
                  <Label
                    htmlFor="filter-category-personal-injury"
                    className="font-normal"
                  >
                    Personal Injury
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-category-zoning" />
                  <Label
                    htmlFor="filter-category-zoning"
                    className="font-normal"
                  >
                    Zoning
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="filter-category-contract" />
                  <Label
                    htmlFor="filter-category-contract"
                    className="font-normal"
                  >
                    Contract
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div> */}
      {mockCaseData.map(({ id, attorney, category, status }) => {
        return (
          <Card
            key={id}
            className="flex h-full flex-col rounded-lg bg-background p-4 shadow-md"
          >
            <div className="flex items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xs font-semibold">{attorney.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {attorney.position}
                </p>
              </div>
            </div>
            <div className="mb-auto mt-4">
              <h4 className="text-xl font-semibold">{attorney.firm}</h4>
              <p className="text-sm text-muted-foreground">{category}</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <span
                className={cn("rounded-full px-3 py-1 text-xs font-medium", {
                  "bg-yellow-500 text-yellow-50": status === "Ongoing",
                  "bg-red-500 text-red-50": status === "Closed",
                })}
              >
                {status}
              </span>
              <Link
                href={`/case/${id}`}
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
