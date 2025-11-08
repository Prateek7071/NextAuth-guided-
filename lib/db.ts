import { PrismaClient } from "./generated/prisma/client";

declare global{
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV!=="production") globalThis.prisma = db

//we could have written, export const db = new PrismaClient ,, this is whats gonna happen in production
// but in Development mode we need 3 to 9 to be working cause of NEXT.js hot reload  
// 
// we are writing 3 to 9 cause when we save file next.js will hotreload that will initialise new prisma PrismaClient
// everytime as per line 7, with terminal warning about too many prisma clients. 
// so we add if clause, which when we are not in production it stores db variable in globalThis.prisma
// then next when hotreload fires in next iteration it check if prisma is already initialised in globalThis and its gonna use that
// otherwise if we are running it for this first time it will initialise a prisma client.
// Reason to store in globalThis because global is not affected in hotreload 