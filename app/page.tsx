import Features from "@/components/Features";
import DeployButton from "../components/DeployButton";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";
import AvailableTechs from "@/components/AvailableTechs";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import NavLinks from "@/components/NavLinks";

export default async function Index({
  searchParams,
}: {
  searchParams: { message: string; plan: string };
}) {
  const joinWaitlist = async (formData: FormData) => {
    "use server";
    console.log(formData);

    const email = formData.get("email") as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    console.log(searchParams);
    const { error } = await supabase
      .from("waitlist")
      .insert({ email, plan: "" });

    if (error) {
      if (error.code === "23505") {
        return redirect("?message=You are already on the waitlist");
      }
      console.log(error);
      return redirect("?message=Could not join waitlist, try again");
    }

    return redirect("?message=Thanks for joining, we'll be in touch");
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center site-header">
      <div className="animate-in flex-1 flex flex-col gap-16 opacity-0 max-w-4xl px-3">
        <Header searchParams={searchParams} joinWaitlist={joinWaitlist} />
        <NavLinks />
        <AvailableTechs />
        <div className="flex-1 flex flex-col gap-6">
          <Features />
          <Prices />
        </div>
      </div>

      <Footer />
    </div>
  );
}
