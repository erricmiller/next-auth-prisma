import React from 'react'
import {useSession} from "next-auth/react"
import {getServerSession} from "next-auth"
import {redirect}from "next/navigation"
import { authOptions } from '../api/auth/[...nextauth]/route'

const Dashboard = async() => {
    // Server side protected routes
    // const session = await getServerSession(authOptions)
    // if(!session){
    //     redirect("/api/auth/signin")
    // }






    

    // Client side protected routes
    // const {status} = useSession({
    //     required:true,
    //     onUnauthenticated() {
    //         console.log("Not Logged In")
    //     },
    // })

    // if(status === "loading"){
    //     return "Loading or Unauthenticated"
    // }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard