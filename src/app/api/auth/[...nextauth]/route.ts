import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { compare } from "bcrypt";
import NextAuth, {type NextAuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    session:{
        strategy: 'jwt'
    },
    providers:[
        CredentialsProvider({
            name: "Sign In",
            credentials:{
                email:{
                    label: "Email",
                    type:"email",
                    placeholder: "hello@test.com",
                },
                password:{label:"Password",type:"password"}
            },
            async authorize(credentials){
                //Handle AUTH
                if(!credentials?.email || !credentials.password){
                    return null
                }

                const user = await prisma.user.findUnique({
                    where:{
                        email: credentials.email
                    }
                })

                if(!user){
                    return null
                }

                const isPassValid = await compare(credentials.password, user.password)

                if(!isPassValid) {
                    return null
                }

                return {
                    id:user.id +"",
                    email:user.email,
                    name:user.name,
                    role:user.role,
                }
            }
        })
    ],
    callbacks:{
        session:({session,token})=>{
            console.log("Session Callback",session,token)
            return {
                ...session,
                user:{
                    ...session.user,
                    id:token.id,
                    role:token.role,
                }
            }
        },
        jwt:({token,user})=>{
            console.log("JWT Callback",{token,user})

            if(user){
                const u = user as unknown as User
                return {
                    ...token,
                    id:u.id,
                    role:u.role
                }
            }

            return token
        }
    }
}

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}