import { NextResponse } from "next/server"
 
// export async function GET() {
//   return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
// }

export async function POST(request) {

    const data = await request.json()

    return NextResponse.json({ email: data.email })

}