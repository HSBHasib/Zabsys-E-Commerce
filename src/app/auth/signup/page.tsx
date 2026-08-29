"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiArrowRight,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { RegisterPayload } from "@/types/auth";
import { registerUser } from "@/lib/action/auth";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>();

  const onSubmit: SubmitHandler<RegisterPayload> = async (data) => {
    setLoading(true);

    try {
      const response = await registerUser(data);

      // Save token in cookie (1 hour expiry default)
      setCookie("auth_token", response.token, {
        maxAge: response.expiresIn || 3600,
        path: "/",
      });

      // Save user info in LocalStorage
      localStorage.setItem("user", JSON.stringify(response.user));

      // Success Toast
      toast.success("Account created successfully! Redirecting...");

      // Redirect
      setTimeout(() => {
        router.push("/");
      }, 600);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again.";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EEEFE0] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md overflow-hidden rounded-3xl border border-[#D5DDD0] bg-[#E3E5D2]/70 p-8 shadow-sm backdrop-blur-md md:p-10"
      >
        {/* Header Badge & Title */}
        <div className="mb-8 flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold text-[#1D331C] md:text-4xl">
            Create Account
          </h1>
          <p className="mt-1.5 text-[13px] font-medium text-[#4B5E49]">
            Join us to get fresh organic products delivered daily
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1D331C]">
              Full Name
            </label>
            <div className="relative flex items-center">
              <FiUser className="absolute left-4 text-[#5C6E5A]" />
              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className="w-full rounded-2xl border border-[#C5CEBA] bg-[#EBEFE5] py-3.5 pl-11 pr-4 text-sm text-[#1D331C] placeholder-[#8A9B88] outline-none transition-all focus:border-[#1D331C] focus:ring-2 focus:ring-[#1D331C]/10"
              />
            </div>
            {errors.name && (
              <span className="pl-1 text-[11px] font-semibold text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1D331C]">
              Email Address
            </label>
            <div className="relative flex items-center">
              <FiMail className="absolute left-4 text-[#5C6E5A]" />
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full rounded-2xl border border-[#C5CEBA] bg-[#EBEFE5] py-3.5 pl-11 pr-4 text-sm text-[#1D331C] placeholder-[#8A9B88] outline-none transition-all focus:border-[#1D331C] focus:ring-2 focus:ring-[#1D331C]/10"
              />
            </div>
            {errors.email && (
              <span className="pl-1 text-[11px] font-semibold text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1D331C]">
              Password
            </label>
            <div className="relative flex items-center">
              <FiLock className="absolute left-4 text-[#5C6E5A]" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full rounded-2xl border border-[#C5CEBA] bg-[#EBEFE5] py-3.5 pl-11 pr-12 text-sm text-[#1D331C] placeholder-[#8A9B88] outline-none transition-all focus:border-[#1D331C] focus:ring-2 focus:ring-[#1D331C]/10"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 text-[#5C6E5A] transition-colors hover:text-[#1D331C] focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <FiEyeOff className="h-4 w-4" />
                ) : (
                  <FiEye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="pl-1 text-[11px] font-semibold text-red-600">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1D331C] py-4 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#152614] active:scale-[0.99] disabled:opacity-70"
          >
            <span>{loading ? "Creating Account..." : "Sign Up"}</span>
            {!loading && <FiArrowRight className="h-4 w-4" />}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-8 text-center text-xs font-medium text-[#4B5E49]">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="font-bold text-[#1D331C] underline hover:text-[#152614]"
          >
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;

