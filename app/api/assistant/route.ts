import { AssistantProps, createAssistant } from "@/app/ai/actions";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let newAssistant;
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const instructions = formData.get("instructions")?.toString();
    const fileId = formData.get("fileId")?.toString();

    // check if the fields are empty
    if (!name || !instructions) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
      // return NextResponse.redirect("/?error=Please fill in all fields");
    }
    const newAssistantData: AssistantProps = {
      name,
      instructions,
      ...(fileId && { fileId }),
    };

    newAssistant = await createAssistant(newAssistantData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // save the data to the database
  //   asst_QyBXxWsyL5yANZZ0uoxDfy0S

  return NextResponse.json({ data: newAssistant });
}
