import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"
import { getAllEvents,getEventById } from '@/helpers/api-util'
import Comments from "@/components/input/comments"

const page = async ({params}) => {
  const {id}=params
  const event= await getEvent(id)

  if(!event){
    return <p>No Event Found!</p>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>{event.description}</EventContent>
      <Comments eventId={event.id} />
    </>
  )
}

export default page

export async function generateStaticParams() {
  const events=await getAllEvents()
  const ids=events.map(event=>({id:event.id}))
  return ids
}

async function getEvent(id) {
  const res = await getEventById(id)
  return res
}

export const revalidate = 10
