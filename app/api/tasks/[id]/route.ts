import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: Request, { params }: RouteContext) {
  // unwrap the params Promise
  const { id } = await params;

  const taskId = Number(id);

  const data = await req.json();
  console.log("FROM THE ROUTE", taskId, data);

  try {
    const updatedTask = await prisma.task.update({
      where: { id: taskId },
      // you can use data.completed instead of hardcoding:
      // data: { completed: data.completed },
      data: { completed: true },
    });

    return NextResponse.json(updatedTask);
  } catch (err) {
    console.error("Error updating task:", err);
    return NextResponse.json(
      { error: "something went wong" },
      { status: 500 }
    );
  }
}