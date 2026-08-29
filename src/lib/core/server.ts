// Base URL & API
const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_RESTFUL_API_KEY  || "";

export async function serverFetch<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${path}`, {
    headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    },
    next: { revalidate: 60 },
  });

  // Handle Rate Limit (429) gracefully
  if (res.status === 429) {
    throw new Error(`Rate limit exceeded.`);
  }

  // If the response is not ok, throw an error
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${path} (Status: ${res.status})`);
  }

  return res.json();
}
