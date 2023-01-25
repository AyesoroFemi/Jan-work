import Work from "./Work";
import { FiDownload } from "react-icons/fi";

function Experience() {
  return (
    <div className="ml-4 dark:text-white mr-4 mx-0 md:mr-10 md:ml-10 text-black">
      <div className="max-w-[1200px] mx-auto bg-[#2e3039] rounded-xl py-32  px-4 md:px-8 dark:bg-gray-100 ">
        <h1 className="md:text-center text-4xl text-white	font-semibold dark:text-black">
          My Experience
        </h1>
        <div className="flex md:justify-center drop-shadow-lg">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1kmekeIaUlhr2jr9zOq1sE71TEhsl3M4P/preview"
            className="font-semibold px-8 py-4 mt-8 rounded-full cursor-pointer flex items-center gap-3 text-black bg-white dark:bg-black dark:text-white"
          >
            Download CV
            <FiDownload size={24} />
          </a>
        </div>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm dark:text-black">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). <br />
            Translate UI/UX designs into scalable and responsive web
            applications(Decagon Institute website).
          </p>
        </Work>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm dark:text-black">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). Translate UI/UX designs
            into scalable and responsive web applications(Decagon Institute
            website)."
          </p>
        </Work>
        <Work
          year="2021-2023"
          company="Decagon"
          role="Frontend / Fullstack"
          profile="Engineer"
        >
          <p className="text-sm dark:text-black">
            Develops scalable, reusable web application for admitting new
            students into the decagon institute(portal). Translate UI/UX designs
            into scalable and responsive web applications(Decagon Institute
            website)."
          </p>
        </Work>
      </div>
    </div>
  );
}

export default Experience;



