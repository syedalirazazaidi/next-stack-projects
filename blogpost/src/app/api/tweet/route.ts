import { connectionDB } from "@/utils";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: Request, res: NextResponse) {
  try {
    await connectionDB();
    const posts = await prisma.post.findMany();
    return NextResponse.json({ message: "success", posts }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(request: Request, res: NextResponse) {
  try {
    const { title, description } = await request.json();
    await connectionDB();
    const postall = await prisma.post.create({
      data: { title: "Alice", description: "a software engineer" },
    });
    return NextResponse.json({ message: "success", postall }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
