import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <p className=" text-xl text-slate-300">Project & Challenge List. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Guillermo Eyherabide</h3>
      </div>
    </footer>
  );

  return (
    <div className="mx-auto  max-w-2xl px-6">
      {header}
      {children}
      {footer}
    </div>
  );
}
