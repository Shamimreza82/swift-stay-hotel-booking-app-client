const Newsletter = () => {
  return (
    <div className="max-w-7xl m-auto">
      <section className="text-gray-600 body-font relative ">
        <div className="md:w-[70%] m-auto">
          <div className=" flex flex-col md:ml-auto w-full  mt-8 md:mt-0 bg-green-300 py-10 md:px-40 rounded-md">
            <h2 className="text-zinc-800 text-2xl mb-1 font-medium title-font">
            Subscription for our Newsletter
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>

            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white hover:text-black bg-green-600 border-0 w-28 py-2 px-6 focus:outline-none hover:bg-yellow-50 rounded text-lg">
             Submit
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
