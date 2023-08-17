'use client'
import EventList from "@/components/events/EventList"
import { getFeaturedEvents } from "@/helpers/api-util"
import { useRouter } from "next/navigation"
import EventSearch from "@/components/events/EventSearch"

export default async function Home() {
  const router=useRouter()
  const events = await getEvents()

  const searchEventHandler=(month,year)=>{
    const fullpath=`/events/${year}/${month}`
    router.push(fullpath)
  }

  return (
    <main>
       <EventSearch onSearch={searchEventHandler} />
      <EventList items={events} />
    </main>
  )
}

async function getEvents() {
  const res = await getFeaturedEvents();
  return res
}

export const revalidate = 10
