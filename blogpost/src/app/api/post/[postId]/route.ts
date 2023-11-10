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

export async function PATCH(req: Request, { params }: ParamsProps) {
  try {
    const body = await req.json();
    const post = await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        description: body.description,
        tagId: body.tagId,
      },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not update  post" },
      { status: 500 }
    );
  }
}
