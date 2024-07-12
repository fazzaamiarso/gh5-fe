"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function LawyerProfle() {
  const [profile, setProfile] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://34.101.147.150:8080/api/users/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data?.data?.Data);
      });
  }, []);
  console.log(profile);

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
              <h2 className="text-2xl font-semibold">{profile?.name}</h2>
              <p className="text-sm text-muted-foreground">Lead Attorney</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Profile</h3>
            <div className="mt-4 space-y-4">
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
              <div>
                <h4 className="text-lg font-semibold">Education</h4>
                <p>
                  John holds a Juris Doctor degree from Harvard Law School and a
                  Bachelor of Science in Electrical Engineering from
                  Massachusetts Institute of Technology.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Experience</h4>
                <p>
                  Prior to joining our firm, John worked as a senior associate
                  at a prestigious international law firm, where he specialized
                  in intellectual property litigation. He has represented
                  clients in a wide range of industries, including technology,
                  manufacturing, and pharmaceuticals.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">
                  Awards and Recognitions
                </h4>
                <p>
                  John has been recognized as a "Rising Star" by Super Lawyers
                  for the past three consecutive years and was recently named
                  one of the "Top 40 Under 40" lawyers by the American Bar
                  Association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
