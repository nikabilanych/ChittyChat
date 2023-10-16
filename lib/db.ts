import { PrismaClient } from '@prisma/client'

//initialize Prisma Client

// == const PrismaSingleton=()=>{
    //return new PrismaClient()
// }


declare global {
    var prisma: PrismaClient | undefined;

};


//prevents instantiation of multiple PrismaClient
//https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices
export const db = globalThis.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
