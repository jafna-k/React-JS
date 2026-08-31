import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-[#31443e] text-white">
      
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">

     
        <div className="text-center">
          <h1 className="text-5xl sm:text-8xl md:text-8xl lg:text-7xl font-bold">
            Contact Us
          </h1>

          <p className="mt-6 text-base sm:text-2xl md:text-2xl">
            Images from{" "}
            <a
              href="#"
              className="underline underline-offset-4"
            >
              Freepik
            </a>
          </p>
        </div>

     
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-16">

          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              className="
                w-full
                max-w-[490px]
                h-[600px]
                overflow-hidden
                rounded-t-[180px]
              "
            >
              <img
                src="/woman3.png"
                alt="Nutrition expert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 max-w-[500px]">

            <h2 className="text-4xl sm:text-7xl md:text-6xl font-bold leading-tight">
              Your results are our
              <br />
              top priority!
            </h2>

            <p className="mt-6 text-base sm:text-2xl md:text-3xl">
              Sample text. Click to select the Text Element.
            </p>

            <p className="mt-6 text-base sm:text-2xl md:text-2xl">
              Images from{" "}
              <a
                href="#"
                className="underline underline-offset-4"
              >
                Freepik
              </a>
            </p>

            <button
              className="
                mt-8
                bg-[#d7b525]
                hover:bg-[#c4a31d]
                px-12
                py-5
                font-bold
                rounded-tl-[25px]
                rounded-br-[25px]
                transition
                duration-300
              "
            >
              WORK WITH US →
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;