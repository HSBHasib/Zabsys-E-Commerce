"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import toast from "react-hot-toast";
import { AuthUser } from "@/types/auth";

export const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Load user from localStorage
  const syncUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed?.name && parsed?.email) {
          setUser(parsed);
        } else {
          setUser(null);
        }
      } catch (err) {
        toast("Failed to parse local user", {
          duration: 1000,
        });
        setUser(null);
      }
    } else {
      setUser(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    syncUser();

    // Event listener to sync logout/login
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  // Reusable Logout Function
  const logout = (redirectTo: string = "/") => {
    // Clear Storage & Cookies
    localStorage.removeItem("user");
    deleteCookie("auth_token");
    setUser(null);

    // Logout Toast Message
    toast.success("Logged out successfully!");

    // Redirect to '/' route after short delay
    setTimeout(() => {
      router.push(redirectTo);
      router.refresh();
    }, 500);
  };

  return {
    user,
    loading,
    logout,
    isAuthenticated: !!(user?.name && user?.email),
  };
};

