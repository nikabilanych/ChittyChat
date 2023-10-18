import { PrismaClient } from '@prisma/client'

//initialize Prisma Client

// == const PrismaSingleton=()=>{
    //return new PrismaClient()
// }


declare global {
    var prisma: PrismaClient | undefined;

};




export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
