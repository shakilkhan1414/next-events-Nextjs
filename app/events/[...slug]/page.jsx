'use client'
import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/results-title'
import EventSearch from '@/components/events/EventSearch'
import { useRouter } from "next/navigation"

const page = async ({params}) => {

  const router=useRouter()

  const year = params.slug[0]
  const month = params.slug[1]

  const numYear = +year
  const numMonth = +month

  const filteredEvents= await getFilteredEvents(numYear,numMonth)

  const date=new Date(numYear,numMonth-1)

  const searchEventHandler=(month,year)=>{
    const fullpath=`/events/${year}/${month}`
    router.push(fullpath)
  }

  if(!filteredEvents || filteredEvents.length===0){
    return <>
      <EventSearch onSearch={searchEventHandler} />
      <ResultsTitle date={date} />
      <p className='center'>No Events Found</p>
    </>
    
  }

  return (
    <div>
      <EventSearch onSearch={searchEventHandler} />
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  )
}

export default page

async function getFilteredEvents(year, month) {

  const response=await fetch('https://next-events-89ffd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json', { cache: 'no-store' })
    const data=await response.json()

    const events=[]

    for(const key in data){
        events.push({
            id:key,
            ...data[key]
        })
    }

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}