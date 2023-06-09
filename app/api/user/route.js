import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request){
    console.log("============================")

    const body = await request.json();

    const {name,email,phone,password,role,location}=body;



    const user = await prisma.user.create({
        data:{
            email,
            name,
            password,
            role,
            phone,
            location
        }
    });

    return NextResponse.json(user);

}