import { NextResponse } from "next/server";
import { authOptions } from "./auth/[...nextauth]/route";
import {getServerSession} from 'next-auth/next'


export async function GET(request:Request){
    const session = await getServerSession(authOptions)

    if(!session) {
        return new NextResponse(JSON.stringify({error:"unauthirized"}),{
            status:401
        })
    }

    console.log("GET API",session)
    return NextResponse.json({authenticated: !!session})
}