import React, { useState } from "react";
import Card from "../components/Card";




function HomePage() {

  const [count,setCount] = useState(6)
  const [active, setActive] = useState(false)
  const [data,setData] = useState([
    {
      name:"Abcd",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores distinctio cupiditate consequatur vel minus quidem voluptates, doloribus quos accusantium id nostrum voluptatum est omnis laboriosam rem quo ullam modi ipsa!"
    },
    
    {
      name:"Abcd",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores distinctio cupiditate consequatur vel minus quidem voluptates, doloribus quos accusantium id nostrum voluptatum est omnis laboriosam rem quo ullam modi ipsa!"
    },
  ])


  return (
    <>
    <section className="min-h-screen bg-[#31443e] text-white overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 py-16">

        
          <div className="w-full lg:w-[48%]">

            <h1 className="
              lg:text-8xl
              sm:text-8xl
              md:text-8xl
              font-bold
              "> Honest<br />  nutrition for  <br />healthy <br />  weight loss
            </h1>

            <p className="mt-7 text-base  md:text-2xl sm:text-2xl">
              Images from{" "}
              <a
                href="#"
                className="underline underline-offset-4" >
                Freepik
              </a>
            </p>

            <button className="
              mt-7
              bg-[#d7b525]
              hover:bg-[#c5a51e]
              px-12
              py-5
              font-bold
              text-sm
              tracking-wide
              rounded-tl-[25px]
              rounded-br-[25px]
              transition
              duration-300 "> WORK WITH US →
            </button>

          </div>
        
          <div className="w-full lg:w-[52%] relative flex justify-center">
        
            <div className="
              w-full
              max-w-[440px]
              h-[590px]
              overflow-hidden
              rounded-t-[170px] ">
              <img
                src="/woman1.png"
                alt="Nutrition expert"
                className="w-full h-full object-cover"/>
            </div>

 
            <div className="
              absolute
              bottom-[-60px]
              left-1/2
              -translate-x-1/2
              lg:left-[-20px]
              lg:translate-x-0
              bg-[#d7b525]
              w-[205px]
              sm:w-[220px]
              h-[230px]
              sm:h-[240px]
              p-6
              sm:p-7">

              <span className="
                absolute
                right-5
                top-4
                text-4xl
                font-light "> ↗
              </span>

              <h2 className="
                text-5xl
                sm:text-6xl
                font-bold
                mt-12 "> 10+
              </h2>

              <p className="
                mt-4
                text-lg
                sm:text-xl
                font-bold
                leading-tight "> YEARS OF<br />EXPERIENCE
              </p>

            </div>
          </div>
        </div>

      </div>  
      </section>

    
  
<section className="relative bg-[#f4f0f7] py-20">


  <div className="relative z-10 max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <button onClick={()=>setActive(!active)}>Hide and show</button>

          {data.length > 0 ? data.map((item)=>( <Card des={item.description} name={item.name} />)) : "No Data found"}
         
        {active && (

          <div className="flex space-x-2.5 items-center">
            <button className="bg-red-400 text-white p-5 cursor-pointer" onClick={()=>setCount(count+1)}>+</button>
            <span>{count}</span>
             <button className="bg-blue-400 text-white p-5 cursor-pointer" onClick={()=>setCount(count-1)}>-</button>
          </div>
        )}

        </div>
  </div>
</section>
   
   
    </>

     
    
    
    
    
    
  );
}

export default HomePage;



