import ChatAI from "@/components/ChatAI";

export default async function Page({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <>
      <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <ChatAI message={searchParams?.message} />
      </div>
    </>
  );
}
