'use client'
import { getAllEvents } from "@/helpers/api-util"
import EventList from "@/components/events/EventList"
import EventSearch from "@/components/events/EventSearch"
import { useRouter } from "next/navigation"

const page = async () => {

  const router=useRouter()
  const events= await getEvents()

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

async function getEvents() {
  const res = await getAllEvents();
  return res
}

export const revalidate = 10
