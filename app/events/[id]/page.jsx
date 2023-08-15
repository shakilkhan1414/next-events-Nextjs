'use client'
import { useParams } from 'next/navigation'
import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"
import { getEventById } from '@/app/dummy-data'

const page = () => {
  const params = useParams()
  const event=getEventById(params.id)

  if(!event){
    return <p>No Event Found!</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>{event.description}</EventContent>
    </>
  )
}

export default page