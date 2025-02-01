import React from 'react'
import HotelListItem from './HotelListItem'

type Props = {
  data: any[]
}

export default function HotelListPage({data}: Props) {
  return (
    
    <div className='grid grid-cols-1 gap-10'>
        {data?.map((el, key) => (
            <HotelListItem key={key} hotel={el}/>
        ))}
    </div>
  )
}
