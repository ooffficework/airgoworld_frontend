"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import Input from "../Shared/Input";
import store from 'store'
import { useAppSelector } from "@/redux/store/hook";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [cookies, setCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const flightBookingContinuationURL = store.get('redirect') || ''
  const user = useAppSelector((store) => store.auth.values?.id);
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!values.email || !values.password) {
      return setErrors({
        email: values.email.trim() ? "" : "Please fill in your email",
        password: values.password.trim() ? "" : "Please fill in your password",
      });
    }
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/user/login/`, values);
      const data = response.data;
      setCookie("accessToken", `${data.data.access}`, { path: "/", maxAge: 3600 });
      setCookie("refreshToken", `${data.data.refresh}`, { path: "/", maxAge: 3600 });
      if (flightBookingContinuationURL) {
        try {
          router.push(flightBookingContinuationURL);
        } catch (e) {
          console.error("Error booking flight", e);
        }
      } else {
        router.push('/');
      }
    } catch (error: any) {
      if (error.response?.data?.message === "Invalid email or password.") {
        setErrors(prev => ({...prev, password: ''}))
        setServerError('Invalid email or password.')
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-[475px] mx-auto p-4 mt-10">
        <div className="flex justify-center">
          <Link href={"/"}>
            <img
              alt="logo"
              src="https://airgoworld.net/uploads/global/logo.png"
              className="h-24"
            />
          </Link>
        </div>
        <p className="font-semibold text-xl mb-5 text-center">Welcome Back!</p>
        <form onSubmit={submit}>
          <Input
            error={errors.email}
            label="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <div className="h-6"></div>
          <Input
            error={errors.password}
            label="Password"
            name="password"
            value={values.password}
            onChange={onChange}
            type="password"
          />
          <div className="flex justify-end mt-3 mb-5">
            <Link
              href={"/register"}
              className="text-blue-500 text-[15px] inline-block text-end font-semibold"
            >
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="h-14 bg-blue-700 duration-500 transition-transform active:scale-95 cursor-pointer text-white font-semibold text-sm mt-4 rounded-md w-full shadow-md"
          >
            {loading ? <span className="loader"></span> : "Login"}
          </button>
        </form>
        <p className="text-sm text-red-600 mt-2">{serverError}</p>
        <p className="text-[15px] text-center mt-4">
          Don't have an Account?
          <Link href={"/register"} className="text-blue-500 ml-2 font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
