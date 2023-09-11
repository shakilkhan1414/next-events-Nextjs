export async function getAllEvents(){
    const response=await fetch('https://next-events-89ffd-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
    const data=await response.json()

    const events=[]

    for(const key in data){
        events.push({
            id:key,
            ...data[key]
        })
    }

    return events
}

// export async function getAllEvents(){
//     const response=await fetch('http://localhost:3000/api/events')
//     const data=await response.json()
//     return data.events
// }

export async function getFeaturedEvents(){
    const allEvents=await getAllEvents()
    return allEvents.filter((event)=>event.isFeatured)
}

export async function getEventById(id) {
    const allEvents=await getAllEvents()
    return allEvents.find((event) => event.id === id);
}
