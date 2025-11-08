"use server";
import * as z from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register =async (values: z.infer<typeof RegisterSchema>) =>{
  const ValdidateFields = RegisterSchema.safeParse(values);
  
  if(!ValdidateFields.success){
    return {error: "Invalid fields!"}
  }
  
  const {name, email, password } = ValdidateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10)
  
  const existingUser = await getUserByEmail(email);
  
  if(existingUser){ 
    return { error: "Email already in use!" }
  }
  
  await db.user.create({
    data:{
      name,
      email,
      password:hashedPassword,
    }
  })
  
  //Todo: Send verification token
  
  return {success: "Email sent!"}
}