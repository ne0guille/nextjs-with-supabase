export default function Header(props: any) {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center"></div>
      <p className="text-4xl lg:text-5xl !leading-tight mx-auto max-w-xl text-center text-white">
        Stuck in tutorial hell? We'll help you break out.
      </p>
      <p className="text-lg lg:text-xl !leading-tight mx-auto max-w-xl text-center text-slate-100">
        Learn, code, and launch real features using docs and IA assistance, no
        videos needed!
      </p>
      {/* <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <button
          formAction={props.joinWaitlist}
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          Join waitlist
        </button>

      </form> */}
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <div className="container px-5 py-8 flex flex-wrap justify-center mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 ">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-200"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="you@example.com"
                style={{ background: "white" }}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              formAction={props.joinWaitlist}
              className="inline-flex mx-auto mt-4 text-white border-0 py-2 px-8 rounded text-lg"
              style={{
                background:
                  "linear-gradient(65deg, #00A2B8 -25%, #00F9D2 100%)",
              }}
            >
              Join Waitlist
            </button>
          </div>
          {props.searchParams?.message && (
            <p className="mt-4 p-4 w-1/2	bg-white text-cyan-700	 bg-foreground/10 text-foreground text-center">
              {props.searchParams.message}
            </p>
          )}
        </div>
      </form>

      {/* <Link
        className="flex mx-auto mt-4 text-white border-0 py-2 px-8 rounded text-lg"
        style={{
          background: "linear-gradient(65deg, #00A2B8 -25%, #00F9D2 100%)",
        }}
        href="/#plans"
      >
        Get started now
      </Link> */}
    </div>
  );
}
