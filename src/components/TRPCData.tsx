'use client'
import { trpc } from '@/app/_trpc/client';
import { prisma } from '@/lib/prisma';
import React from 'react'

const TRPCData =  () => {
    const todos = trpc.getTodos.useQuery();


  return (
    <div>{JSON.stringify(todos.data)}</div>
  )
}

export default TRPCData