"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const approveCase = async ({
  id,
  contributor_id,
}: {
  id: string;
  contributor_id: string;
}) => {
  const formData = new FormData();
  formData.append("status", "On Progress");
  formData.append("contributor_id", contributor_id);

  await fetch(`${process.env.BASE_API}/cases/${id}`, {
    method: "PUT",
    body: formData,
  });

  revalidateTag("pending-case");
  revalidatePath("/");
};

export const rejectCase = async ({
  id,
  contributor_id,
}: {
  id: string;
  contributor_id: string;
}) => {
  const formData = new FormData();
  formData.append("status", "Rejected");
  formData.append("contributor_id", contributor_id);

  await fetch(`${process.env.BASE_API}/cases/${id}`, {
    method: "PUT",
    body: formData,
  });

  revalidatePath("/lawyer/[id]/cases", "page");
};
