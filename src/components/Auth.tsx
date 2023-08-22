'use client'
import React from 'react'
import {signIn,signOut} from "next-auth/react"

const Auth = () => {
  return (
    <div>
        <button onClick={()=>signIn()}>Sign In</button>
        <button onClick={()=>signOut()}>Sign Out</button>
    </div>
  )
}

export default Auth