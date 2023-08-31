import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
 
// export async function GET() {
//   return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
// }

export async function POST(request) {

  const data=await request.json()

    const url="mongodb+srv://nextevents:6Cw5v3ICH3pA3Lw7@nextjsevents.8uj8izg.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url);

      await client.connect();
      const db=client.db('nextevent')
      await db.collection('newsletters').insertOne({email: data.email})
      await client.close();
    
    return NextResponse.json({ message: 'Signed up!' })

}

