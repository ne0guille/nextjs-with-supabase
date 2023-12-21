import { createThread, getThread } from "@/app/ai/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const newThread = await createThread();
    // save the data to the database newThreadId
    // thread_H1bXYupqpdwzi1zKxpwMIkBS
    return NextResponse.json({ data: newThread });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const threadId = searchParams.get("threadId");
    //check if the fields are empty
    if (!threadId) {
      return NextResponse.json(
        { message: "ThreadId is required" },
        { status: 400 }
      );
      // return NextResponse.redirect("/?error=Please fill in all fields");
    }
    const thread = await getThread(threadId);
    return NextResponse.json({ data: thread });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
