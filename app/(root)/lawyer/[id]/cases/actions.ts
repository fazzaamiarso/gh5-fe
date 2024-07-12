"use server";

export const approveCase = async ({ id, data }: { id: string; data: any }) => {
  const formData = new FormData();
  formData.append("status", "On Progress");

  await fetch(`${process.env.BASE_API}/cases/${id}`, {
    method: "PUT",
    body: formData,
  });
};
