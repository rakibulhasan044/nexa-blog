
import { NextResponse } from "next/server";
import { blogs } from "../route";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}
