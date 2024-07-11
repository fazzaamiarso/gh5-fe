"use client";

import { Button } from "@/components/ui/button";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const mockCaseRequestData = [
  {
    id: "1",
    client: {
      id: "1",
      name: "Nurhayati",
    },
    description: `The client is seeking legal representation in a patent
                  infringement case against a competitor. The case involves
                  complex technical and legal issues, and the client believes
                  they have a strong case.`,
    category: "Intellectual property dispute over patent infringement.",
    status: "Ongoing",
  },
  {
    id: "2",
    client: {
      id: "3",
      name: "Wahyuni",
    },
    description: `The client is seeking legal representation in a trademark
                  dispute with a competitor. The case involves complex branding
                  and intellectual property issues, and the client believes they
                  have a strong case.`,
    category: "Trademark Dispute",
    status: "Ongoing",
  },
];

export default function LawyerCases({ params }: { params: { id: string } }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Case Requests</h3>
            <div className="mt-4 space-y-4">
              {mockCaseRequestData.map(({ client, category, description }) => {
                return (
                  <div className="rounded-md bg-background p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-semibold">{category}</h4>
                        <p className="text-sm text-muted-foreground">
                          <Link href={`/user/${client.id}`}></Link>
                          Client: {client.name}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-red-500 text-white hover:bg-red-600"
                        >
                          Reject
                        </Button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
