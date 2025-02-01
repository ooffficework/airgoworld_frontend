"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Shared/Input";
import { useCookies } from "react-cookie";
import axiosInstance from "./axiosInstance";
import axios from "axios";

type Props = {
  inputValue: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone_number: string;
  };
};

export default function OTPAdmin({ inputValue }: Props) {
  const [values, setValues] = useState({
    code: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [errors, setErrors] = useState({
    code: "",
  });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<boolean | null>(null);
  const router = useRouter();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };
  const [cookies, setCookie, removeCookie] = useCookies(["redirect"]);
  const emailData = {
    firstname: values.firstname,
    email: values.email,
    password: values.password,
    websiteURL: "airgoworld.net",
    companyName: "Airgoworld",
  };
  const submit = async () => {
    console.log(values);
    if (!values.code) {
      return setErrors({
        code: values.code.trim() ? "" : "Please fill in your OTP",
      });
    }
    setLoading(true);
    try {
      console.log(emailData);
      setLoading(true);
      await axiosInstance.post("/user/register/admin/", values);
      await axios.post("/api/email/welcome", emailData);
      setSuccess(true);
      router.push("/login");
    } catch (error: any) {
      console.error("Request Failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setValues({ ...values, ...inputValue });
  }, []);

  return (
    <div>
      <div className="w-[475px] mx-auto p-4 mt-10">
        <div className="flex justify-center">
          <img
            alt="logo"
            src="https://airgoworld.net/uploads/global/logo.png"
            className="h-24"
          />
        </div>
        <p className="font-semibold text-xl mb-5 mt-3 text-center">
          Please Enter OTP!
        </p>
        <Input
          error={errors.code}
          label="OTP"
          name="code"
          value={values.code}
          onChange={onChange}
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
          onClick={submit}
          className="h-14 bg-blue-700 duration-500 transition-transform active:scale-95 cursor-pointer text-white font-semibold text-sm mt-4 rounded-md w-full shadow-md"
        >
          {loading ? <span className="loader"></span> : "Confirm OTP"}
        </button>
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
