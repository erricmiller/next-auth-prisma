import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from '@/components/User'
import Auth from '@/components/Auth'
import TRPCData from '@/components/TRPCData'

export default async function Home() {
  // const user = await prisma.user.findUnique({
  //   where:{
  //     email:"fahad@test.com"
  //   }
  // })



  // get session data on server comps
  const session = await getServerSession(authOptions)

  

  return (
    <main className="p-4">
      <Auth />
      {/* Hello, {user?.name} */}
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>

      <h2>Client Session</h2>
      <User />

      <h2>Trpc Data</h2>
      <TRPCData />
    </main>
  )
}
