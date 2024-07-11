"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

export default function UserProfile() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p>
                NIK: <span>3602041211870001</span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Profile</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>
                  741 Esta Mountain, Ponorogo, Sumatera Barat 58876, Indonesia
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">About</h4>
                <p>
                  John Doe is a highly experienced lead attorney with over 15
                  years of practice in intellectual property law. He has a
                  proven track record of successfully representing clients in
                  complex patent disputes and has a deep understanding of the
                  latest legal developments in this field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
