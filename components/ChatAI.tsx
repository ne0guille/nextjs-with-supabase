"use client";
import { handleAISubmit } from "@/app/ai/actions";
import { useState } from "react";

export default function ChatAI(props: any) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("query", query);
    handleAISubmit(formData);
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <section>
        <h1>AI</h1>
        <form>
          <input
            type="text"
            name="query"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button formAction={handleSubmit}>submit</button>
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
