"use client";
import Input from "../Shared/Input";
import Select from "../Shared/Select";
import { GenderOptions } from "../Flights_Book/data";
import Button from "../Admin/General/Button";
import { useBookForm } from "./useBookForm";
import { bookHotel } from "./bookHotel";
import store from "store";

export default function BookForm() {
  const {
    userData,
    errors,
    loading,
    user,
    BookingDetails,
    router,
    handleChange,
    validateForm,
    setLoading,
    setErrors,
  } = useBookForm();

  const handleSubmit = async () => {
    if (!validateForm()) return;
    if (!user) {
      router.push("/login");
      store.set("redirect", window.location.href);
      store.set("userData", userData);
      return;
    }

    setLoading(true);
    try {
      const submitData = {
        user_id: user?.id,
        hotel_id: BookingDetails.hotel_id,
        email: userData.email,
        phone: userData.phone,
        gender: userData.gender,
        fullname: userData.fullname,
        no_of_rooms: BookingDetails.rooms,
        occupants: BookingDetails.children + BookingDetails.adults,
        check_in_date: BookingDetails.checkIn,
        days: BookingDetails.days
      };
      const data = await bookHotel(submitData);
      router.push(`/hotels/invoice?booking_id=${data.id}`);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[450px] overflow-y-auto shadow-lg bg-white p-4 gap-4 rounded-lg  flex flex-col">
      <Input value={userData.fullname} error={errors.fullname} label="Fullname" name="fullname" onChange={handleChange} />
      <Input value={userData.email} error={errors.email} label="Email" name="email" onChange={handleChange} />
      <Input value={userData.phone} error={errors.phone} label="Phone" name="phone" onChange={handleChange} />
      <Select value={userData.gender} data={GenderOptions} error={errors.gender} label="Gender" name="gender" onChange={handleChange} />
      <div className="flex justify-center mt-3">
        <Button title="Proceed to Payment" submit={handleSubmit} width="200px" loading={loading} />
      </div>
    </div>
  );
}
