import {
  AssistantMessageProps,
  createMessage,
  getMessages,
} from "@/app/ai/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let newMessage;
  try {
    const formData = await req.formData();

    const threadId = formData.get("threadId")?.toString();
    const content = formData.get("content")?.toString();

    // check if the fields are empty
    if (!threadId || !content) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
      // return NextResponse.redirect("/?error=Please fill in all fields");
    }
    const newMessageData: AssistantMessageProps = {
      threadId,
      content,
    };

    newMessage = await createMessage(newMessageData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // save the data to the database
  //   asst_QyBXxWsyL5yANZZ0uoxDfy0S

  return NextResponse.json({ data: newMessage });
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = new URL(req.url).searchParams;
    const query = searchParams.get("threadId");
    //check if the fields are empty
    if (!query) {
      return NextResponse.json(
        { message: "ThreadId is required" },
        { status: 400 }
      );
      // return NextResponse.redirect("/?error=Please fill in all fields");
    }
    const thread = await getMessages(query);
    return NextResponse.json({ data: thread });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// create assistant
// create thread
// run assistant
// create message
