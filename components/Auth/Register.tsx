"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../Shared/Input";
import OTP from "./OTP";
import axiosInstance from "./axiosInstance";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [otpOpened, setOtpOpened] = useState(false);
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validateInputs = () => {
    const newErrors = {
      firstname: values.firstname.trim()
        ? ""
        : "Please fill in your First Name",
      lastname: values.lastname.trim() ? "" : "Please fill in your Last Name",
      email: values.email.trim() ? "" : "Please fill in your Email",
      phone_number: values.phone_number.trim()
        ? ""
        : "Please fill in your Phone Number",
      password: values.password.trim() ? "" : "Please fill in your Password",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const submit = async () => {
    if (!validateInputs()) {
      return;
    }
    try {
      console.log(values);
      setLoading(true);
      const response = await axiosInstance.post("/user/verify/", values);
      const otp = await response.data.data;
      console.log(otp)
      await axios.post("/api/email/otp", { firstname: values.firstname, otp });
      setSuccess(true);
      setOtpOpened(true);
    } catch (error: any) {
      if (error.response?.data?.message === "Email already exists") {
        setErrors((prev) => ({ ...prev, email: "Email already exists" }));
      }
      if (error.response?.data?.message === "Phone number already exists") {
        setErrors((prev) => ({
          ...prev,
          phone_number: "Phone number already exists",
        }));
      }
      console.error(
        "Error during signup:",
        error.response?.data || error.message
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {!success || success == null ? (
        <div className="w-[475px] mx-auto p-4 mt-10">
          <div className="flex justify-center">
            <img
              alt="AirgoWorld Logo"
              src="https://airgoworld.net/uploads/global/logo.png"
              className="h-24"
            />
          </div>
          <p className="font-semibold text-xl mb-5 text-center">
            Welcome to AirgoWorld!
          </p>
          <Input
            error={errors.firstname}
            label="First Name"
            name="firstname"
            value={values.firstname}
            onChange={onChange}
          />
          <div className="h-6"></div>
          <Input
            error={errors.lastname}
            label="Last Name"
            name="lastname"
            value={values.lastname}
            onChange={onChange}
          />
          <div className="h-6"></div>
          <Input
            error={errors.email}
            label="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <div className="h-6"></div>
          <Input
            error={errors.phone_number}
            label="Phone Number"
            name="phone_number"
            value={values.phone_number}
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
          <button
            onClick={submit}
            className="h-14 bg-blue-700 duration-500 transition-transform active:scale-95 cursor-pointer text-white font-semibold text-sm mt-6 rounded-md w-full shadow-md"
          >
            {loading ? <span className="loader"></span> : "Signup"}
          </button>
          <p className="text-sm text-red-600 mt-2">{serverError}</p>
          <p className="text-[15px] text-center mt-4">
            Already have an Account?
            <Link href={"/login"} className="text-blue-500 ml-2 font-semibold">
              Login
            </Link>
          </p>
        </div>
      ) : (
        <OTP inputValue={values} />
      )}
    </div>
  );
}
