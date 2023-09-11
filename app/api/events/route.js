import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
 
export async function GET() {

    const url="mongodb+srv://nextevents:6Cw5v3ICH3pA3Lw7@nextjsevents.8uj8izg.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(url);
      
      await client.connect();
      const db=client.db('nextevent')
      const events= await db.collection('events').find().toArray()
      await client.close();
  
    return NextResponse.json({ events: events }, { status: 200 })
  }

