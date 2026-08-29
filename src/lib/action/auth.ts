import { RegisterPayload, LoginPayload, AuthResponse } from "@/types/auth";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_RESTFUL_API_KEY || "";


//  Hanlde Errors 
async function handleResponse<T>(res: Response): Promise<T> {
  // Check Rate Limit (429)
  if (res.status === 429) {
    throw new Error("Too many attempts! Please wait a minute and try again.");
  }

  // Check 404 Endpoint Missing
  if (res.status === 404) {
    throw new Error("API endpoint not found (404). Check backend URL.");
  }

  const contentType = res.headers.get("content-type");

  // Process Valid JSON Response
  if (contentType && contentType.includes("application/json")) {
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || `Request failed with status ${res.status}`);
    }
    return data as T;
  }

  throw new Error(`Server returned status ${res.status} with non-JSON response.`);
}


// Register User
export const registerUser = async (data: RegisterPayload): Promise<AuthResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify(data),
    });

    return await handleResponse<AuthResponse>(res);
  } catch (error: any) {
    throw new Error(error.message || "Network error occurred.");
  }
};


// Login User
export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify(data),
    });

    return await handleResponse<AuthResponse>(res);
  } catch (error: any) {
    throw new Error(error.message || "Network error occurred.");
  }
};
