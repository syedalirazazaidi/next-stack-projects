import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface ParamsProps {
  params: {
    postId: string;
  };
}

export async function DELETE(req: Request, { params }: ParamsProps) {
  try {
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete  post" },
      { status: 500 }
    );
  }
}
