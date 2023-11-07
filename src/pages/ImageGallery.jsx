import React from "react";

const ImageGallery = () => {
  return (
    <div className=" m-auto">
        <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-4xl font-medium title-font text-zinc-800 lg:w-1/3 lg:mb-0 mb-4">
          Escape to Luxury Unwind in Our Exquisite Hotel Getaway
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
          Indulge in a world of opulence and sophistication at our exquisite hotel getaway. From the moment you arrive, be prepared to be enveloped in an ambiance of luxury and comfort, where every detail has been meticulously curated to cater to your every need.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2 hover:scale-105 duration-300" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://i.postimg.cc/j2xCwKgj/img-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-105 duration-300" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://i.postimg.cc/Qd2tgc4w/img-6.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full hover:scale-105 duration-300 rounded-md" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src="https://i.postimg.cc/XvtwCZdY/img-2.jpg"
              />
            </div>
          </div >
          <div className="flex flex-wrap w-1/2 ">
            <div className="md:p-2 p-1 w-full hover:scale-105 duration-300 rounded-md" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src="https://i.postimg.cc/sxsGY5Xs/img-3.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-105 duration-300 rounded-md" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://i.postimg.cc/FzVc8DqY/img-4.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2 hover:scale-105 duration-300 rounded-md" data-aos="zoom-in">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src="https://i.postimg.cc/rp4D7fRq/img-5.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ImageGallery;
