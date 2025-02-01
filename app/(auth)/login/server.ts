"use server";
import axiosInstance from "@/components/Auth/axiosInstance";
import { cookies } from "next/headers";

export const ServerDecrypt = async () => {
  const url = `/user/jwt_details/`;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    if (!token) {
      throw new Error("Access token is missing");
    }
    const request = await axiosInstance.get(url);
    const data = await request.data;
    return {
      data,
      error: false,
    };
  } catch (error: any) {
    return {
      error: true,
      message: error.message || "An unknown error occurred.",
    };
  }
};
