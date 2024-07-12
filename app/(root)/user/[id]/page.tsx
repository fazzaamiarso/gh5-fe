import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { redirect } from "next/navigation";
import React from "react";

const getProfile = async (id: string) => {
  const res = await fetch(`${process.env.BASE_API}/users/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const profile = data?.data?.Data;

  return profile;
};

export default async function UserProfile({
  params,
}: {
  params: { id: string };
}) {
  const profile = await getProfile(params.id);

  if (!profile) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">User profile</h3>
            <div className="flex items-center gap-4 rounded-sm p-4 ring-1 ring-neutral-300">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">
                  {profile?.name ?? "EMPTY"}
                </h2>
                <p>
                  NIK: <span>{profile?.identity_card_number}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold">Address</h4>
                <p>{profile?.address}</p>
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
