import React from 'react'

function Services() {
  const services = [
    {
      title: "Health Strategy",
      icon: "📋",
      text: "Sample text. Click to select the Text Element.",
    },
    {
      title: "Nutritional Levels",
      icon: "🥗",
      text: "Sample text. Click to select the Text Element.",
    },
    {
      title: "Healthy Diet",
      icon: "🍽️",
      text: "Sample text. Click to select the Text Element.",
    },
    {
      title: "Meal Plans",
      icon: "📱",
      text: "Sample text. Click to select the Text Element.",
    },
  ];

  return (
    <section className="bg-white">

      {/* GREEN TOP AREA */}
      <div className="bg-[#31443e] h-[300px] sm:h-[330px]">
      </div>

      {/* CARDS */}
      <div className="-mt-[190px] relative z-10 max-w-6xl mx-auto px-6">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
        ">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                min-h-[300px]
                p-7
                shadow-xl
                border-b-4
                border-[#d7b525]
                rounded-tr-[45px]
                flex
                flex-col
              "
            >

              {/* ICON */}
              <div className="
                w-20
                h-20
                rounded-full
                bg-[#dce6e3]
                flex
                items-center
                justify-center
                text-4xl
                mb-7
              ">
                {service.icon}
              </div>

              {/* TITLE */}
              <h2 className="
                text-xl
                font-bold
                text-gray-900
              ">
                {service.title}
              </h2>

              {/* TEXT */}
              <p className="
                mt-5
                text-gray-700
                text-base
                leading-7
              ">
                {service.text}
              </p>

              {/* MORE */}
              <a
                href="#"
                className="
                  mt-auto
                  pt-5
                  w-fit
                  text-sm
                  font-semibold
                  tracking-wide
                  text-gray-900
                  border-b
                  border-[#d7b525]
                  pb-1
                "
              >
                MORE
              </a>

            </div>
          ))}

        </div>

      </div>

      {/* WHITE SPACE */}
      <div className="h-40"></div>

    </section>
  );
}


export default Service