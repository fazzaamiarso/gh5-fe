"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftIcon,
  DownloadIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const getCaseById = async (id: string) => {
  const res = await fetch(`${process.env.BASE_API}/cases/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function CaseDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [caseDetail, setCaseDetail] = useState<any>(null);

  useEffect(() => {
    getCaseById(params.id).then(({ data: { Data } }) => {
      setCaseDetail(Data);
    });
  }, [params.id]);

  return (
    <section className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        size="sm"
        className="mb-6 flex gap-2"
        onClick={() => router.back()}
      >
        <ArrowLeftIcon />
        Go back
      </Button>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <section className="rounded-sm ring-1 ring-neutral-300">
            <div className="">
              <div className="border-b-[1px]">
                <h3 className="p-4 text-xl font-semibold">Case Details</h3>
              </div>
              <div className="space-y-4 p-4">
                <div>
                  <h4 className="font-semibold">Name</h4>
                  <p>{caseDetail?.case_name}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Type</h4>
                  <p>{caseDetail?.case_type}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Status</h4>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-medium",
                      {
                        "bg-yellow-500 text-yellow-50":
                          caseDetail?.status === "On Progress",
                        "bg-red-500 text-red-50":
                          caseDetail?.status === "Closed",
                        "bg-neutral-100 text-neutral-500":
                          caseDetail?.status === "Pending",
                      },
                    )}
                  >
                    {caseDetail?.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Description</h4>
                  <p>{caseDetail?.case_description}</p>
                </div>
              </div>
            </div>
          </section>
          <div className="flex items-center justify-between gap-8 rounded-sm p-4 ring-1 ring-neutral-300 max-sm:flex-col max-sm:items-start">
            <div className="flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">
                  <Link href={`/lawyer/${params.id}`}>
                    {caseDetail?.contributor?.name ?? "EMPTY"}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground">
                  {caseDetail?.contributor?.lawyer?.position ?? "EMPTY"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>WS</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">
                  <Link href={`/user/${caseDetail?.client?.id}`}>
                    {caseDetail?.client?.name ?? "EMPTY"}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground">Client</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold">
            <FileTextIcon className="size-5" /> Related Documents
          </h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 text-muted-foreground" />
                <span>Suppporting Document</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a href={caseDetail?.document} target="_blank">
                  <DownloadIcon className="mr-1" /> Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
