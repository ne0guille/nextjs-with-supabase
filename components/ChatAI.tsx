"use client";
import { handleAISubmit } from "@/app/ai/actions";
import { useRef, useState } from "react";
import SubmitBtn from "./SubmitBtn";
import toast from "react-hot-toast";

export default function ChatAI(props: any) {
  // const ref = useRef<HTMLFormElement>(null);
  const [query, setQuery] = useState("");
  const isSubmitDisabled = query.length < 1;
  console.log("isSubmitDisabled", isSubmitDisabled);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("query", query);
    // reset from
    // validation
    const result = await handleAISubmit(formData);
    console.log(result);
    if (result?.error) {
      console.log(result.error);
      toast(result.error as any, { icon: "👻" });
      return;
    }
    debugger;
    // ref.current?.reset();
    setQuery("");
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <section>
        <h1>AI</h1>
        <form action={handleSubmit} className="w-full">
          <input
            className="w-full"
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SubmitBtn isDisabled={isSubmitDisabled} />
          {/* <button formAction={handleSubmit}>submit</button> */}
          {props?.message && (
            <p className="mt-4 p-4 w-1/2	bg-white text-cyan-700	 bg-foreground/10 text-foreground text-center">
              {props.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
