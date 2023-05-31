import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request){

    const body = await request.json();

    const {name,email,phoneNumber}=body;

    const user = prisma.user.create({
        data:{
            email,
            name,
            phoneNumber,
        }
    });

    return NextResponse.json(user);

}