import { BsArrowRight } from "react-icons/bs";
import S1 from "../assets/para.png"
import P1 from "../assets/invest.png"
import S2 from "../assets/marriage.png"
import S3 from "../assets/screen.png"
import S4 from "../assets/pep.png"

function Project() {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-10 max-w-[1200px] mx-auto py-16 md:py-32 px-4 md:px-12">
        <div className="text-white">
          <p className="text-[#A1A1A1]">Portfolio</p>
          <h1 className="w-full md:w-2/3 mt-4 text-3xl">
            All Creative Works, Selected Projects
          </h1>
          <p className="mt-4 text-[#A1A1A1]">
           This section is a collection of all my recent projects and I have a more web application in progress
          </p>
          <div className="flex mb-8 drop-shadow-lg">
            <a
              href="/"
              className="font-semibold px-6 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white"
            >
              Explore more
              <BsArrowRight  color="black"/>
            </a>
          </div>
        </div>
        <div className="h-[250px] bg-[#2e3039] relative md:min-h-[100px] md:h-[350px] drop-shadow-lg row-span-2">
          <img src={P1} alt="project_display"/>

          <div className="flex px-8 pt-4 text-white justify-between items-center">
             <h1 className="text-sm md:text-xl font-[600]">Invest Trust Limited</h1> 
             <div className="border-b-[.5px] pb-1 border-white">
                <a href="/" className="text-sm md:text-base" target="_blanket">Show more</a>
             </div>
          </div> 
        </div>
        <div className="h-[280px] bg-[#2e3039] md:min-h-[100px] md:h-[400px] row-span-2 drop-shadow-lg">
            <img src={S4} alt="project_display"/>
             <div className="flex px-8 pt-4 text-white justify-between items-center">
             <h1 className="text-sm md:text-xl font-[600]">Invest Trust Limited</h1> 
             <div className="border-b-[.5px] pb-1 border-white">
                <a href="/" className="text-sm md:text-base" target="_blanket">Show more</a>
             </div>
          </div> 

        </div>
        <div className="h-[240px] bg-[#2e3039] md:min-h-[100px] md:h-[330px] drop-shadow-lg">
            <img src={S2} alt="project_display"/>

            <div className="flex px-8 pt-4 text-white justify-between items-center">
             <h1 className="text-sm md:text-xl font-[600]">Invest Trust Limited</h1> 
             <div className="border-b-[.5px] pb-1 border-white">
                <a href="/" className="text-sm md:text-base" target="_blanket">Show more</a>
             </div>
          </div> 
        </div>
        <div className="h-[250px] bg-[#2e3039] md:min-h-[100px] md:h-[350px] row-span-2 drop-shadow-lg">
              <img src={S1} alt="project_display"/>
             <div className="flex px-8 pt-4 text-white justify-between items-center">
             <h1 className="text-sm md:text-xl font-[600]">Invest Trust Limited</h1> 
             <div className="border-b-[.5px] pb-1 border-white">
                <a href="/" className="text-sm md:text-base" target="_blanket">Show more</a>
             </div>
          </div> 

        </div>
        <div className="h-[250px] bg-[#2e3039] md:min-h-[100px] md:h-[350px] row-span-2 drop-shadow-lg">
              <img src={S3} alt="project_display"/>
             <div className="flex px-8 pt-4 text-white justify-between items-center">
             <h1 className="text-sm md:text-xl font-[600]">Invest Trust Limited</h1> 
             <div className="border-b-[.5px] pb-1 border-white">
                <a href="/" className="text-sm md:text-base" target="_blanket">Show more</a>
             </div>
          </div> 

        </div>
      </div>
    </div>
  );
}

export default Project;
