import {
  AssistantProps,
  AssistantRunProps,
  createAssistant,
  runAssistant,
  uploadFile,
} from "@/app/ai/actions";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file")?.toString();

    // check if the fields are empty
    if (!file) {
      return NextResponse.json(
        { message: "Please fill in all fields" },
        { status: 400 }
      );
      // return NextResponse.redirect("/?error=Please fill in all fields");
    }

    const newFile = await uploadFile(file);
    return NextResponse.json({ data: newFile });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  // save the data to the database
  //   asst_QyBXxWsyL5yANZZ0uoxDfy0S
}
