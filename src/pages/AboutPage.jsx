import React from 'react'

function AboutPage() {
  return (
    <section className="min-h-screen bg-[#31443e] flex items-center">
      <div className="max-w-6xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-16">

        <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-16">

          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="
                w-full
                max-w-[490px]
                h-[620px]
                overflow-hidden
                rounded-t-[180px]
                bg-white "  >

              <img src="/women2.png"  alt="Nutrition expert"
                className="w-full h-full object-cover" />
            </div>
          </div>

          
          <div className="w-full lg:w-1/2 text-white">

            <h2
              className="
                text-5xl
                sm:text-8xl
                lg:text-7xl
                md:text-8xl
                font-bold
                leading-[1.05] "> Over 10 <br /> years of<br /> Experience </h2>

            <p className="mt-8 text-base sm:text-2xl md:text-2xl">
              Images from{" "}
              <a
                href="#"
                className="underline underline-offset-4">
                Freepik
              </a>
            </p>

            <button
              className="
                mt-8
                bg-[#d7b525]
                hover:bg-[#c4a31d]
                text-white
                font-bold
                px-12
                py-5
                rounded-tl-[25px]
                rounded-br-[25px]
                transition
                duration-300 ">  WORK WITH US →</button>

          </div>

        </div>
      </div>
    </section>

  );
}


export default AboutPage