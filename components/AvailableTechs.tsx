export default function AvailableTechs() {
  return (
    <section className="clients section mt-8">
      <div className="flex flex-wrap w-full my-4 flex-col items-center text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
          Use your favourite framework
        </h1>
      </div>
      <div className="container">
        <div className="clients-inner section-inner has-top-divider">
          <div className="container-sm">
            <ul className="list-reset mb-0">
              <li>
                <img
                  className="logo"
                  width="80"
                  height="80"
                  src="/angular_renaissance.png"
                />
              </li>
              <li>
                <img
                  className="logo"
                  width="80"
                  height="80"
                  src="/react-2.svg"
                />
              </li>
              <li>
                <img className="logo" width="80" height="80" src="/vue-9.svg" />
              </li>
              <li>
                <img
                  className="logo"
                  width="80"
                  height="80"
                  src="/nextjs-2.svg"
                />
              </li>
              <li>
                <img
                  className="logo"
                  width="80"
                  height="80"
                  src="/nuxt-2.svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
