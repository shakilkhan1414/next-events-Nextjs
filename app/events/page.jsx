import { getAllEvents } from "../dummy-data"
import EventList from "@/components/events/EventList"

const page = () => {
  const events=getAllEvents()
  
  return (
    <div>
      <EventList items={events} />
    </div>
  )
}

export default page

