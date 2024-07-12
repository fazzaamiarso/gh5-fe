"use server";
export async function postCase(data: any) {
  const res = await fetch(`${process.env.BASE_API}/cases`, {
    method: "POST",
    body: JSON.stringify({
      case_name: data.caseName,
      case_description: data.caseDescription,
      client_id: "5cdde6b7-2617-4633-b008-cf606544e59c",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await res.json();
  return result;
}
