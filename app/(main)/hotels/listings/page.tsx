import axiosInstance from '@/components/Auth/axiosInstance';
import HotelListPage from '@/components/Hotel/HotelListPage'
import React from 'react'
import { GrLocation } from 'react-icons/gr'


type Params = {
  searchParams: Promise<{
    location: string;
  }>;
};

export default async function page({searchParams}: Params) {
  let data
  const {location} = await searchParams
  if(location){
    try {
      const response = await axiosInstance.post('/hotel/search/', {location})
      data = response.data.data
    } catch (error) {
      
    }
  }
  
  return (
    <div className='mt-24 bg-white p-5 rounded-lg wrapper'>
        <p className='text-2xl font-semibold mb-7'><GrLocation className='inline-block text-xl text-blue-600'/> Hotels in <span className='caption-top font-semibold'>{location}</span></p>
        <HotelListPage data={data} />
    </div>
  )
}
