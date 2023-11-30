import Features from "@/components/Features";
import DeployButton from "../components/DeployButton";
import Header from "@/components/Header";
import { cookies } from "next/headers";
import Link from "next/link";
import Prices from "@/components/Prices";
import Footer from "@/components/Footer";
import AvailableTechs from "@/components/AvailableTechs";

export default async function Index() {
  const cookieStore = cookies();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center site-header">
      <div className="animate-in flex-1 flex flex-col gap-16 opacity-0 max-w-4xl px-3">
        <Header />
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
