import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const query = req.body;
  //   const completition = await openai.completions.create({
  //     model: "text-davinci-003", // gpt-3.5-turbo-1106
  //     prompt: "Create a motivation quote based on the following topic:\n" + query,
  //     temperature: 0.3,
  //     presence_penalty: 0,
  //     frequency_penalty: 0,
  // response_format{ "type": "json_object" },
  //   });
  //   console.log("query ", completition);
  //   const data = completition.choices[0].text;
  console.log(req);
  return res.status(200).json({ data: "test" });
}
