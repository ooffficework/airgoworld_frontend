import axiosInstance from "../Auth/axiosInstance";

export const bookHotel = async (submitData: any) => {
  try {
    const response = await axiosInstance.post("/hotel/book/", submitData);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
