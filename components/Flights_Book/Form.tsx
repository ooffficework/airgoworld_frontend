"use client";
import { useEffect, useState } from "react";
import { formValues, GenderOptions, TitleOptions } from "./data";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import Button from "../Admin/General/Button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store/hook";
import { toast } from "react-toastify";
import axiosInstance from "../Auth/axiosInstance";
import store from "store";

type TFormValues = {
  title: string;
  firstname: string;
  lastname: string;
  gender: string;
  email: string;
  phone: string;
};
export default function Form() {
  const [formData, setFormData] = useState<TFormValues>(formValues);
  const [errors, setErrors] = useState(formValues);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const router = useRouter();
  const [url, setUrl] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const authStore = useAppSelector((store) => store.auth.values);

  const flightStore = store.get("flightStore") || {};

  const submitData = {
    ...formData,
    cabin: flightStore.cabinId,
    flight: flightStore.flight,
    user: authStore?.id,
    children: flightStore.children,
    adults: flightStore.adults,
    infants: flightStore.infants,
    amount: flightStore.total,
  };

  const submit = async () => {
    if (!authStore?.email) {
      store.set('redirect', url);
      sessionStorage.setItem("bookingFormValues", JSON.stringify(submitData));
      return router.push("/login");
    }
    try {
      setLoading(true);
      const response = await axiosInstance.post("/flight/book/", submitData);
      const data = await response.data;
      const storeData = {
        bookingDate: data.booking_date,
        bookingId: data.booking_date,
        pnr: data.booking_date,
        firstname: formData.firstname
      }
      store.set('flightBookingStore', storeData)
      sessionStorage.setItem("bookingFormValues", JSON.stringify(submitData));
      store.remove('redirect');
      router.push(`/flights/confirmation?booking_id=${data.id}`);
    } catch (error: any) {
      toast.error(`An error occurred: ${error.message}`);
      setServerError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setUrl(window.location.href);
    try {
      setFormData(JSON.parse(sessionStorage.bookingFormValues));
    } catch (error) {
      console.error(
        "Error parsing booking form values from flightStore:",
        error
      );
    }
  }, []);

  return (
    <div className="border-2 p-6 flex flex-col justify-between">
      <div className="">
        <p className="font-semibold mb-5 uppercase text-2xl">
          Passenger Details
        </p>
        <div className=" gap-x-5 gap-y-5 grid grid-cols-2">
          <Select
            data={TitleOptions}
            value={formData.title}
            label="Title"
            name="title"
            onChange={handleChange}
            error={errors.title}
          />
          <Input
            value={formData.firstname}
            label="First name on Passport"
            name="firstname"
            onChange={handleChange}
            error={errors.firstname}
          />
          <Input
            value={formData.lastname}
            label="Last name on Passport"
            name="lastname"
            onChange={handleChange}
            error={errors.lastname}
          />
          <Select
            data={GenderOptions}
            value={formData.gender}
            label="Gender on Passport"
            name="gender"
            onChange={handleChange}
            error={errors.gender}
          />
          <Input
            value={formData.email}
            label="Email Address"
            name="email"
            onChange={handleChange}
            error={errors.email}
          />
          <Input
            value={formData.phone}
            label="Phone Number "
            name="phone"
            onChange={handleChange}
            error={errors.phone}
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button submit={submit} loading={loading} title="Book Flight" />
      </div>
    </div>
  );
}
