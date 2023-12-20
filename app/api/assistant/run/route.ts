import {
  AssistantProps,
  AssistantRunProps,
  createAssistant,
  runAssistant,
} from "@/app/ai/actions";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let assistant;
  try {
    const formData = await req.formData();
    const threadId = formData.get("threadId")?.toString();
    const assistantId = formData.get("assistantId")?.toString();
    const instructions = formData.get("instructions")?.toString();

    // check if the fields are empty
    if (!threadId || !assistantId || !instructions) {
      return Response.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
      // return Response.redirect("/?error=Please fill in all fields");
    }

    const assistantData: AssistantRunProps = {
      threadId,
      assistantId,
      instructions,
    };

    assistant = await runAssistant(assistantData);
  } catch (error: any) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  // save the data to the database
  //   asst_QyBXxWsyL5yANZZ0uoxDfy0S

  return NextResponse.json({ data: assistant });
}
