import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function DELETE(request,{params}){

  const id = params.id

  console.log('>>> params', params)

  const result = await prisma.post.delete({
    where: {id}
  })

 return NextResponse.json(result)

}