

// import React, { useState } from "react";
// import Card from "../components/Card";

// function HomePage() {
//   const [data] = useState([
//     {
//       name: "Abcd",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores distinctio cupiditate consequatur vel minus quidem voluptates, doloribus quos accusantium id nostrum voluptatum est omnis laboriosam rem quo ullam modi ipsa!",
//     },
//     {
//       name: "Abcd",
//       description:
//         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores distinctio cupiditate consequatur vel minus quidem voluptates, doloribus quos accusantium id nostrum voluptatum est omnis laboriosam rem quo ullam modi ipsa!",
//     },
//   ]);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="min-h-screen bg-[#31443e] text-white overflow-hidden">
//         <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
//           <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-16">

//             {/* Left Content */}
//             <div className="w-full lg:w-[48%]">
//               <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
//                 Honest
//                 <br />
//                 nutrition for
//                 <br />
//                 healthy
//                 <br />
//                 weight loss
//               </h1>

//               <p className="mt-7 text-base sm:text-2xl md:text-2xl">
//                 Images from{" "}
//                 <a
//                   href="#"
//                   className="underline underline-offset-4"
//                 >
//                   Freepik
//                 </a>
//               </p>

//               <button className="mt-7 bg-[#d7b525] hover:bg-[#c5a51e] px-12 py-5 font-bold text-sm tracking-wide rounded-tl-[25px] rounded-br-[25px] transition duration-300">
//                 WORK WITH US →
//               </button>
//             </div>

//             {/* Right Image */}
//             <div className="w-full lg:w-[52%] relative flex justify-center">
//               <div className="w-full max-w-[440px] h-[590px] overflow-hidden rounded-t-[170px]">
//                 <img
//                   src="/woman1.png"
//                   alt="Nutrition expert"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Experience Box */}
//               <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 lg:left-[-20px] lg:translate-x-0 bg-[#d7b525] w-[205px] sm:w-[220px] h-[230px] sm:h-[240px] p-6 sm:p-7">
//                 <span className="absolute right-5 top-4 text-4xl font-light">
//                   ↗
//                 </span>

//                 <h2 className="text-5xl sm:text-6xl font-bold mt-12">
//                   10+
//                 </h2>

//                 <p className="mt-4 text-lg sm:text-xl font-bold leading-tight">
//                   YEARS OF
//                   <br />
//                   EXPERIENCE
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="relative bg-[#f4f0f7] py-20">
//         <div className="max-w-6xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

//             {data.length > 0 ? (
//               data.map((item, index) => (
//                 <Card
//                   key={index}
//                   des={item.description}
//                   name={item.name}
//                 />
//               ))
//             ) : (
//               <p>No Data found</p>
//             )}

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default HomePage;





import React from "react";
import Card from "../components/Card";

function HomePage() {
  const data = [
    {
      name: "Health Strategy",
      description:
        "Build healthy habits with a personalized nutrition strategy for your lifestyle.",
    },
    {
      name: "Nutritional Levels",
      description:
        "Learn about balanced nutrition and the foods your body needs every day.",
    },
    {
      name: "Healthy Diet",
      description:
        "Discover simple and delicious ways to enjoy a balanced and healthy diet.",
    },
    {
      name: "Meal Plans",
      description:
        "Explore practical meal plans designed to make healthy eating easier.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#292929]">

      {/* SECTION 1 - HERO */}
      <section className="min-h-screen bg-[#31443e] text-white">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 md:px-10 lg:flex-row lg:gap-16 lg:px-16">

          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
              Honest
              <br />
              nutrition
              <br />
              for healthy
              <br />
              weight loss
            </h1>

            <p className="mt-7 text-lg md:text-2xl">
              Images from{" "}
              <a href="#" className="underline underline-offset-4">
                Freepik
              </a>
            </p>

            <a
              href="#about"
              className="mt-8 inline-block rounded-tl-3xl rounded-br-3xl bg-[#d7b525] px-10 py-5 text-sm font-bold tracking-widest text-white transition hover:bg-[#bea01c]"
            >
              WORK WITH US →
            </a>
          </div>

          <div className="relative w-full max-w-[520px] lg:w-1/2">
            <div className="h-[440px] overflow-hidden rounded-t-[160px] sm:h-[570px]">
              <img
                src="/woman1.png"
                alt="Nutrition expert holding fruit"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-12 left-0 w-[220px] bg-[#d7b525] p-7 text-white sm:w-[250px] sm:p-9">
              <span className="absolute right-6 top-4 text-4xl">↗</span>
              <h2 className="mt-8 text-5xl font-bold">10+</h2>
              <p className="mt-4 text-lg font-bold leading-tight">
                YEARS OF
                <br />
                EXPERIENCE
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2 - HEALTH CARDS */}
      <section className="bg-[#f4f0f7] px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-[#b49a25]">
              What I Offer
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Your Journey to Better Health
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <Card
                key={item.name}
                name={item.name}
                des={item.description}
              />
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 - ABOUT ME */}
      <section id="about" className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

          <div className="h-[400px] overflow-hidden rounded-t-[150px] sm:h-[520px]">
            <img
              src="/woman1.png"
              alt="Nutritionist preparing fresh fruit"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#b49a25]">
              About Me
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Nutritionist &amp;
              <br />
              Naturopath
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-600">
              I offer free 15-minute wellness chats to help you understand
              what to expect from a treatment.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              If you're curious about my approach and want to see if we're
              a good fit, let's connect!
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Image from Freepik
            </p>

            <a
              href="#program"
              className="mt-8 inline-block rounded-tl-3xl rounded-br-3xl bg-[#d7b525] px-10 py-5 text-sm font-bold tracking-widest text-white transition hover:bg-[#bea01c]"
            >
              LEARN MORE →
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 4 - TRANSFORMATION PROGRAM */}
      <section id="program" className="bg-[#d3b52b] px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div className="rounded-tr-[65px] rounded-bl-[65px] bg-white p-8 sm:p-12 lg:p-16">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#b49a25]">
              Start Today
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              90 Day Body &amp; Mind Transformation Program
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover practical ways to develop healthy routines, improve
              your relationship with food, and support your overall
              well-being.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-tl-3xl rounded-br-3xl bg-[#d3b52b] px-9 py-4 text-sm font-bold tracking-widest text-white transition hover:bg-[#b99c1d]"
            >
              HOW IT WORKS →
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/man.png"
              alt="Fitness and wellness program"
              className="max-h-[580px] w-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* SECTION 5 - HEALTHY COOKING BOOK */}
      <section className="bg-white px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-16">

          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#b49a25]">
              My Book
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              How to Cook Healthy
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover easy recipes and practical meal ideas to make
              nutritious food part of your everyday routine.
            </p>

            <p className="mt-5 text-sm text-gray-500">
              Image from Freepik
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-tl-3xl rounded-br-3xl bg-[#d3b52b] px-10 py-5 text-sm font-bold tracking-widest text-white transition hover:bg-[#b99c1d]"
            >
              BUY NOW →
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src="/book.png"
              alt="Healthy cooking book"
              className="max-h-[500px] w-full object-contain"
            />
          </div>

        </div>
      </section>

      {/* SECTION 6 - CONTACT */}
      <section id="contact" className="bg-[#31443e] px-6 py-20 text-white md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-[#d7b525]">
            Get In Touch
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Start Your Wellness Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Take the first step toward healthier habits. Get in touch to
            learn more about nutrition guidance and wellness support.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-block rounded-tl-3xl rounded-br-3xl bg-[#d7b525] px-10 py-5 text-sm font-bold tracking-widest transition hover:bg-[#bea01c]"
          >
            CONTACT ME →
          </a>

        </div>
      </section>

    </main>
  );
}

export default HomePage;
