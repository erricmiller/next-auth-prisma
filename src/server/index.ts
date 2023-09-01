import { prisma } from "@/lib/prisma";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    console.log("Storing data")
    // const data = await prisma.data.create({
    //   data:{
    //     // id: 1,
    //   name: "Fahad",
    //   email: "fahad@test.com",
    //   age: 24,
    //   gender: "Male",
    //   price: 99,
    //   card_type: "jcb",
    //   date: "20/5/2022",
    // }
    // });

    const data = await prisma.data.findMany()
    console.log(data)
    return data;
  }),
});

export type AppRouter = typeof appRouter;
