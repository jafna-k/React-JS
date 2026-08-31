import React from "react";

function NutritionPlans() {
  return (
    <section className="min-h-screen bg-[#31443e] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16">

      
        <div>
          <h1 className="
            text-4xl
            sm:text-6xl
            md:text-6xl
            lg:text-7xl
            font-bold
            leading-[1.05]
            max-w-5xl  "> Transform your health with <br className="hidden md:block" />
            personalized nutrition plans
          </h1>

          <p className="mt-8 text-base sm:text-2xl md:text-2xl">
            Images from{" "}
            <a
              href="#"
              className="underline underline-offset-4"
            >
              Freepik
            </a>
          </p>
        </div>

       
        <div className="relative mt-10 sm:mt-12 flex justify-center">

          
          <div className="
            w-full
            max-w-[830px]
            h-[420px]
            sm:h-[500px]
            md:h-[560px]
            lg:h-[580px]
            overflow-hidden
            rounded-tl-[150px]
            rounded-br-[150px]
          ">
            <img
              src="/women4.png"
              alt="Nutrition"
              className="w-full h-full object-cover"
            />
          </div>

        
          <div className="
            absolute
            left-0
            sm:left-4
            md:left-8
            lg:left-0
            bottom-0
            translate-y-1
            bg-[#d7b525]
            w-[190px]
            sm:w-[220px]
            md:w-[240px]
            p-6
            sm:p-7
            md:p-8
          ">

          
            <div className="
              absolute
              top-5
              right-5
              text-4xl
              font-light
            ">
              ↗
            </div>

            <h2 className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-bold
              leading-none
              mt-12
            ">
              10+
            </h2>

            <p className="
              mt-5
              text-lg
              sm:text-xl
              font-bold
              leading-tight
            ">
              YEARS OF
              <br />
              EXPERIENCE
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default NutritionPlans;