// import {} from "react";
// import bannerImg from "../../assets/photo-C8q0KQHG.webp";
// const ProjectCard = ({ title, main }) => {
//   return (
//     <div className="p-3 md:p-6 flex flex-col w-80 bg-[#5699d7] shadow-xl shadow-slate-900 rounded-2xl">
//       <img className="p-4" src={bannerImg} alt="" />
//       <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
//         {title}
//       </h3>
//       <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
//       <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Demo
//         </button>
//         <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
//           Source Code
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import { useState } from "react";
import bannerImg1 from "../../assets/photo-C8q0KQHG.webp";
import bannerImg2 from "../../assets/photo-sample1.webp";
import bannerImg3 from "../../assets/photo-sample2.webp";

const images = [bannerImg1, bannerImg2, bannerImg3];

const ProjectCard = ({ title, main }) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#5699d7] shadow-xl shadow-slate-900 rounded-2xl">
      {/* <img
        className="p-4"
        src={images[currentImage]}
        alt="Project Banner"
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
      /> */}
      <img
        className="p-4"
        src={images[currentImage]}
        alt="Project Banner"
        onClick={() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
          console.log("Image index:", currentImage); // Debug log
        }}
      />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Demo
        </button>
        <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
