import { NextResponse } from "next/server"
 
export async function GET(request,{params}) {
  const dummy=[
    {
      id: '1',
      name: 'demo 1',
      email: 'demo1@gmail.com',
      text: 'new comment'
    },
    {
      id: '2',
      name: 'demo 2',
      email: 'demo2@gmail.com',
      text: 'new comment 2'
    }
  ]

  return NextResponse.json({ comments: dummy }, { status: 200 })
}

export async function POST(request) {

    const data = await request.json()
    const{name,email,text}=data

    

    return NextResponse.json({ name,email,text })

}