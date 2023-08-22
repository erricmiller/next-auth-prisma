import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient()

async function main(){
    const pass = await hash("123654789",12)
    const user = await prisma.user.upsert({
        where: {id: 1, email: "test@test.com"},
        update:{},
        create: {
            email:"test@test.com",
            name: "test",
            password:pass,
        },
    })
    console.log({user})
}
main().then(()=>prisma.$disconnect()).catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})