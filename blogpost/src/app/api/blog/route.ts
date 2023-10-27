// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";
// import prisma from "../../../../prisma";

// // const prisma = new PrismaClient();
// async function main() {
//   try {
//     await prisma.$connect();
//   } catch (e) {
//     console.error(e);
//     prisma.$disconnect();
//     process.exit(1);
//   }
// }

// export async function GET(request: Request, res: NextResponse) {
//   try {
//     await main();
//     const posts = await prisma.post.findMany();
//     return NextResponse.json({ message: "success", posts }, { status: 200 });
//   } catch (err) {
//     return NextResponse.json({ message: "Error", err }, { status: 500 });
//   }
// }

// export async function POST(request: Request, res: NextResponse) {}
