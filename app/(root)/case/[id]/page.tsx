import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import { FileTextIcon } from "@radix-ui/react-icons";

const getCaseById = async (id: string) => {
  const res = await fetch(`http://34.101.147.150:8080/api/cases/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default async function CaseDetail({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await getCaseById(params.id);

  return (
    <section className="container mx-auto px-4 py-8">
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
                  <p>[PLACEHOLDER]</p>
                </div>
                <div>
                  <h4 className="font-semibold">Type</h4>
                  <p>[PLACEHOLDER]</p>
                </div>
                <div>
                  <h4 className="font-semibold">Status</h4>
                  <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-green-50">
                    {data.Data.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">Description</h4>
                  <p>{data.Data.case_description}</p>
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
                    [PLACEHOLDER LAWYER NAME]
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground">
                  [PLACEHOLDER LAWYER POSITION]
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
                  <Link href={`/user/23`}>[PLACEHOLDER CLIENT NAME]</Link>
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
                <span>Patent Infringement Claim</span>
              </div>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 text-muted-foreground" />
                <span>Settlement Offer</span>
              </div>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 text-muted-foreground" />
                <span>Expert Witness Report</span>
              </div>
              <Button variant="outline" size="sm">
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
