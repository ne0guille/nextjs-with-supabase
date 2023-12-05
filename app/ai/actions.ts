"use server";

import OpenAI from "openai";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handleAISubmit = async (formData: FormData) => {
  const query = formData.get("query");
  console.log("formData", query);

  // const completition = await openai.completions.create({
  //   model: "text-davinci-003",
  //   prompt: "Create a motivation quote based on the following topic:\n" + query,
  //   temperature: 0.3,
  //   presence_penalty: 0,
  //   frequency_penalty: 0,
  //   max_tokens: 500,
  // });
  // console.log("query ", completition);
  // const message = completition.choices[0].text;
  // console.log(message);
  //   revalidateTag("ToDo");
  // redirect("/ai?message=" + encodeURIComponent(message));
  redirect("/ai?message=" + "test");
};
