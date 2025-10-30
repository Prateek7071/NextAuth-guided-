"use client";


import {Button} from "@/components/ui/button"
import { useEffect } from "react";
export default function Home() {
  console.log(" ✔️ This will render on server aka your terminal OR on the browser(client) if used 'user client' ")
  
  useEffect(()=>{
    console.log("Mounted")
  },[])
  return (
    <Button>Click me</Button>
 )
}

