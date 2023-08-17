import EventList from "@/components/events/EventList"
import { getFeaturedEvents } from "@/helpers/api-util"

export default async function Home() {

  const events = await getEvents()

  return (
    <main>
      <EventList items={events} />
    </main>
  )
}

async function getEvents() {
  const res = await getFeaturedEvents();
  return res
}

export const revalidate = 10