export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center"></div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Stuck in tutorial hell? We'll help you break out.
      </p>
      <p className="text-lg lg:text-xl !leading-tight mx-auto max-w-xl text-center">
        Learn, code, and launch real features with real docs, no videos needed!
      </p>
      <button
        className="flex mx-auto mt-4 text-white border-0 py-2 px-8 rounded text-lg"
        style={{
          background: "linear-gradient(65deg, #00A2B8 -25%, #00F9D2 100%)",
        }}
      >
        Get started now
      </button>
    </div>
  );
}
