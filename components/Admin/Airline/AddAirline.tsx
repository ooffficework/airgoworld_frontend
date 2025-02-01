"use client";
import { useState, ChangeEvent, useEffect } from "react";
import Input from "../../Shared/Input";
import Select from "../../Shared/Select";
import { countries } from "../General/data";
import Button from "../General/Button";
import { useRouter } from "next/navigation";
import { statusOptions } from "./data";
import axiosInstance from "@/components/Auth/axiosInstance";

export default function AddAirline() {
  const [values, setValues] = useState({
    name: "",
    country: "",
    iata: "",
    status: "active",
  });
  const [errors, setErrors] = useState({
    name: "",
    country: "",
    iata: "",
    status: "",
  });
  const [loading, setLoading]=useState(false)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const router = useRouter()

  const submit = async () => {
    const newErrors = { ...errors };
    Object.keys(values).forEach((field) => {
      if (!values[field as keyof typeof values].trim()) {
        newErrors[field as keyof typeof errors] = `Please fill in your ${
          field.charAt(0).toUpperCase() + field.slice(1)
        }`;
      }
      
    });

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true)
      const response = await axiosInstance.post('/airline/create/', values)
      console.log(response.data)
      router.push('/admin/airline/manage')
    } catch (error: any) {
      console.log(error.message)
    }finally{
      setLoading(false)
    }
  };


 

  return (
    <div className="p-4 flex bg-blue-500 flex-col justify-between flex-1">
      <div className="grid-cols-2 grid gap-4">
        <Input
          value={values.name}
          error={errors.name}
          label="Airport Name"
          onChange={onChange}
          name="name"
        />
       
        <Select
          data={countries}
          value={values.country}
          error={errors.country}
          label="Country"
          onChange={onChange}
          name="country"
        />
        <Input
          value={values.iata}
          error={errors.iata}
          label="IATA Code"
          onChange={onChange}
          name="iata"
        />

        <Select
          data={statusOptions}
          value={values.status}
          error={errors.status}
          label="Status"
          onChange={onChange}
          name="status"
        />
        
      </div>
      <div className="flex justify-end">
        <Button submit={submit} title="Create Airline" loading={loading} />
      </div>
    </div>
  );
}
