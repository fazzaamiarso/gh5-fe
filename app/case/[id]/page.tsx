"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export default function CaseDetail({ params }: { params: { id: string } }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <h1>ID: {params.id}</h1>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-sm text-muted-foreground">Lead Attorney</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Case Details</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Case Name</h4>
                <p>Acme Inc. vs. Widgets Co.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Case Type</h4>
                <p>Intellectual Property Dispute</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Status</h4>
                <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-green-50">
                  Ongoing
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Description</h4>
                <p>
                  This is an intellectual property dispute between Acme Inc. and
                  Widgets Co. over a patent infringement claim. The case is
                  currently ongoing as the parties work towards a resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Related Documents</h3>
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
