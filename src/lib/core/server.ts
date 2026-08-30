// Base URL & API
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_RESTFUL_API_KEY || "";

// ProtectedFetch Function - For Get Data Securely
export async function protectedFetch<T>(PATH: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${PATH}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  return await handleResponse(res);
}

// Server Mutation Function - For Creating, Updating, and Deleting Resources
export async function serverMutation<T>(
  PATH: string,
  method: "POST" | "PUT" | "DELETE" = "POST",
  data?: any,
): Promise<T> {

  console.log("Testing Config:", {
  url: `${BASE_URL}${PATH}`,
  keyLength: API_KEY ? API_KEY.length : 0
});

  // Parse data to JSON if it exists
  const Data = data && { body: JSON.stringify(data) };

  const res = await fetch(`${BASE_URL}${PATH}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
    ...Data
  });

  return await handleResponse<T>(res);
}

// Error Handle
async function handleResponse<T>(res: Response): Promise<T> {
  // Check Rate Limit (429)
  if (res.status === 429) {
    throw new Error("Too many attempts! Please wait a minute and try again.");
  }

  // Check 404 Endpoint Missing
  if (res.status === 404) {
    throw new Error("API endpoint not found (404). Check backend URL.");
  }

  // Check 401 Unauthorized
  if (res.status === 401) {
    throw new Error("Unauthorized (401)! Please check your API Key or Login credentials.");
  }

  const contentType = res.headers.get("content-type");
  const isJson = contentType && contentType.includes("application/json");

  if (res.ok) {
    if (isJson) {
      return (await res.json()) as T;
    }
    return {} as T; // Return an empty object if the response is not JSON
  }

  // Other Responses
  if (isJson) {
    const errorData = await res.json();
    throw new Error(errorData.message || `Request failed with status ${res.status}`);
  }

  // If error is not JSON
  const textError = await res.text();
  throw new Error(`Server Error (${res.status}): ${textError.slice(0, 100) || "Unexpected error occurred."}`);
}

