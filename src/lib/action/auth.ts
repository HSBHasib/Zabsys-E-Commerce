import { RegisterPayload, LoginPayload, AuthResponse } from "@/types/auth";
import { serverMutation } from "../core/server";


// Register User
export const registerUser = async ( data: RegisterPayload ): Promise<AuthResponse> => {
  try {
    return await serverMutation<AuthResponse>("/register", "POST", data);
  } catch (err: any) {
    throw new Error(err.message || "Network error occurred.");
  }
}


// Login User
export const loginUser = async (data: LoginPayload): Promise<AuthResponse> => {
  try{
    return await serverMutation<AuthResponse>("/login", "POST", data);
  } catch(err: any) {
    throw new Error(err.message || "Network error occurred.");
  }
}

