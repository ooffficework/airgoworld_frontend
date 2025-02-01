"use server";
import axiosInstance from "@/components/Auth/axiosInstance";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export const ServerDecrypt = async () => {
  const url = `/user/jwt_details/`;
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    if (!token) {
      throw new Error("Access token is missing");
    }
    const request = await axiosInstance.get(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    });
    const data = await request.data.data;
    return {
      data,
      error: false,
      message: null
    };
  } catch (error: any) {
    return {
      data: null,
      error: true,
      message: error.message || "An unknown error occurred.",
    };
  }
};


export const RedirectIfNotAdmin = async () => {
  const user = await ServerDecrypt()
  if(!user || !user.data  || !user.data.is_staff){
    redirect('/')
  }
}

