import { useState, useEffect } from "react";
import store from "store";
import { useRouter } from "next/navigation";
import { validateUserData } from "./Validate";
import { Values } from "./value";
import { useAppSelector } from "@/redux/store/hook";

export const useBookForm = () => {
  const [userData, setUserData] = useState(Values);
  const [errors, setErrors] = useState(Values);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = useAppSelector((store) => store.auth.values);
  const BookingDetails = store.get("BookingDetails") || {};

  useEffect(() => {
    setUserData(store.get("userData") || {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const validation = validateUserData(userData);
    if (!validation.valid) {
      setErrors({ ...errors, ...validation.errors });
      return false;
    }
    return true;
  };

  return {
    userData,
    setUserData,
    errors,
    setErrors,
    loading,
    setLoading,
    user,
    BookingDetails,
    router,
    handleChange,
    validateForm,
  };
};
