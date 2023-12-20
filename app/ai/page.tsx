import ChatAI from "@/components/ChatAI";
import SonarData from "@/components/SonarData";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  //   const response = await fetch(
  //     "http://localhost:3000/api/sonar?query=ne0guille_nextjs-with-supabase"
  //   );
  //   const { pending } = useFormStatus();
  //   console.log("pending", pending);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://localhost:3000/api/codeclimate");
  const sonarData = await response.json(); // TODO parse response on server
  console.log(sonarData);
  return (
    <section>
      <h1 className="text-xl">AI hints</h1>
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <ChatAI message={searchParams?.message} />
        <Suspense fallback="Loading...">
          <SonarData />
        </Suspense>
      </div>
    </section>
  );
}
