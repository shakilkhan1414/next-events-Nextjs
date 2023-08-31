import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"
 
export async function GET(request,{params}) {

  const url="mongodb+srv://nextevents:6Cw5v3ICH3pA3Lw7@nextjsevents.8uj8izg.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(url);
    
    await client.connect();
    const db=client.db('nextevent')
    const comments= await db.collection('comments').find().sort({_id: -1}).toArray()
    await client.close();

  return NextResponse.json({ comments: comments }, { status: 200 })
}

export async function POST(request,{params}) {

    const data = await request.json()
    const{name,email,text}=data

    const newComment={
      name,
      email,
      text,
      eventId: params.id
    }

    const url="mongodb+srv://nextevents:6Cw5v3ICH3pA3Lw7@nextjsevents.8uj8izg.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(url);

      await client.connect();
      const db=client.db('nextevent')
      await db.collection('comments').insertOne(newComment)
      await client.close();

    return NextResponse.json({ message: 'Comment Added!' })

}

