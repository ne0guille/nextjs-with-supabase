export const ProjectHeader = ({ title }: { title: string }) => (
  <header>
    <div className="text-center bg-slate-800 p-4 mb-2 rounded-md">
      <p className=" text-xl text-slate-300"> 💻 {title}</p>
    </div>
  </header>
);
