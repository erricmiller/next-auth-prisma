import { prisma } from "@/lib/prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    const data = await prisma.data.create({
      data:{
        // id: 1,
      name: "Fahad",
      email: "fahad@test.com",
      age: 24,
      gender: "Male",
      price: 99,
      card_type: "jcb",
      date: "20/5/2022",
    }
    });
    console.log(data)
    return [10,20,30];
  }),
});

export type AppRouter = typeof appRouter;
