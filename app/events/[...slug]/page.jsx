'use client'
import { useParams } from 'next/navigation'
import { getFilteredEvents } from '@/app/dummy-data'
import EventList from '@/components/events/EventList'
import ResultsTitle from '@/components/events/results-title'

const page = () => {

  const params=useParams()

  const slugs=params.slug

  if(!slugs){
    return <p className='center'>Loading...</p>
  }

  const year=slugs[0]
  const month=slugs[1]

  const numYear = +year
  const numMonth = +month

  const filteredEvents=getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  const date=new Date(numYear,numMonth-1)

  if(!filteredEvents || filteredEvents.length===0){
    return <>
      <ResultsTitle date={date} />
      <p className='center'>No Events Found</p>
    </>
    
  }

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  )
}

export default page