"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn({ text = "submit", isDisabled = false }) {
  const { pending } = useFormStatus();
  const buttonText = pending ? "submitting..." : text;
  console.log("pending", pending, isDisabled);
  return (
    <button
      className="py-2 px-4 rounded-md w-1/2 no-underline bg-btn-background hover:bg-btn-background-hover disabled:bg-btn-background-disabled disabled:cursor-not-allowed capitalize"
      type="submit"
      disabled={pending || isDisabled}
    >
      {buttonText}
    </button>
  );
}
