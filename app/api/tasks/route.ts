import { NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";

//send task data to db 
export async function POST(req: Request){
    const {title} = await req.json();

    const task = await prisma.task.create({
        data: {title},
    });

    return NextResponse.json(task);
}



//get request for all the tasks 
export async function GET(){
    const tasks = await prisma.task.findMany({
        orderBy: {id: "desc"},
    });

    return NextResponse.json(tasks)
}

