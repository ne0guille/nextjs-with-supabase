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
  try {
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
  } catch (error) {
    console.log("error", error);
    return { error };
  }
  // redirect("/ai?message=" + "test");
};
export type AssistantProps = {
  name: string;
  instructions: string;
  fileId?: string;
};

export type AssistantRunProps = {
  assistantId: string;
  threadId: string;
  instructions: string;
};

export type AssistantMessageProps = {
  threadId: string;
  content: string;
};

export const createAssistant = async ({
  name,
  instructions,
  fileId,
}: AssistantProps) => {
  const assistant = await openai.beta.assistants.create({
    name: name,
    instructions: instructions,
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview",
    file_ids: fileId ? [fileId] : undefined,
  });
  return assistant;
};

export const runAssistant = async ({
  assistantId,
  threadId,
  instructions,
}: AssistantRunProps) => {
  const run = await openai.beta.threads.runs.create(threadId, {
    assistant_id: assistantId,
    instructions: instructions,
  });
  return run;
};

export const createThread = async () => {
  const thread = await openai.beta.threads.create();
  return thread;
};

export const getThread = async (threadId: string) => {
  const thread = await openai.beta.threads.retrieve(threadId);
  return thread;
};

export const deleteThread = async (threadId: string) => {
  const thread = await openai.beta.threads.del(threadId);
  return thread;
};

export const createMessage = async ({
  threadId,
  content,
}: AssistantMessageProps) => {
  const message = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });
  return message;
};

export const getMessages = async (threadId: string) => {
  const messages = await openai.beta.threads.messages.list(threadId);
  return messages;
};

export const uploadFile = async (fileSource: any) => {
  const file = await openai.files.create({
    file: fileSource,
    purpose: "assistants",
  });

  // save the data to the database fileId

  return file;
};
