'use client'
import { getAllEvents } from "../dummy-data"
import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { useRouter } from "next/navigation"

const page = () => {

  const router=useRouter()
  const events=getAllEvents()

  const searchEventHandler=(month,year)=>{
    const fullpath=`/events/${year}/${month}`
    router.push(fullpath)
  }
  
  return (
    <div>
      <EventSearch onSearch={searchEventHandler} />
      <EventList items={events} />
    </div>
  )
}

export default page

