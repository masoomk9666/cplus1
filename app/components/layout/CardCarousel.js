


// "use client";
// import { motion } from "framer-motion";

// const CardCarousel = () => {
//   const images = [
//     "/images/carousel/01.png",
//     "/images/carousel/02.png",
//     "/images/carousel/03.png",
//     "/images/carousel/04.png",
//     "/images/carousel/05.png",
//     "/images/carousel/06.png",
//     "/images/carousel/07.png",
//     "/images/carousel/08.png",
//     "/images/carousel/09.png",
//     "/images/carousel/10.png",
//     "/images/carousel/11.png",
//     "/images/carousel/12.png",
//     "/images/carousel/13.png",
//     "/images/carousel/14.png",
//     "/images/carousel/15.png",
//     "/images/carousel/16.png",
//     "/images/carousel/17.png",
//     "/images/carousel/18.png",
//   ];

//   return (
//     <div className="relative w-full overflow-hidden py-32">
//       <style>
//     {`
//       @keyframes bounceHover {
//         0%, 100% { transform: translateY(0); }
//         50% { transform: translateY(-100px); }
//       }
//     `}
//   </style>
//       <div className="relative  w-full h-[400px]">
//         {images.map((src, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-60 h-110"
//             style={{ zIndex: images.length * 2 - index }}
//             initial={{ x: "100vw", y: 100 }}
//             animate={{
//               x: [ "125vw", "100vw", "75vw","50vw", "25vw", "0vw", "-25vw" ],
//               // y: [ 20,0, -50, -100, -50, 0 , 20],
//               y: [ 100,0, -100,  0 , 100],
//             }}
//             transition={{
//               duration: 20,      // total duration for one iteration
//           ease: "linear",
//           repeat: Infinity,  // infinite loop
//           repeatType: "loop",
//           delay: index * (20 / images.length), // stagger each image evenly
//             }}
//           >
//             <img
//               src={src}
//               alt={`Slide ${index}`}
//               className="w-full h-full  rounded-xl transition-transform"
//               style={{ cursor: "pointer" }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.animation = "bounceHover 0.5s ease-out";
//           }}
//           onAnimationEnd={(e) => {
//             e.currentTarget.style.animation = "";
//           }}

//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>




//   );
// };

// export default CardCarousel;




// "use client";
// import { motion } from "framer-motion";

// const CardCarousel = () => {
//   const images = [
//     "/images/carousel/01.png",
//     "/images/carousel/02.png",
//     "/images/carousel/03.png",
//     "/images/carousel/04.png",
//     "/images/carousel/05.png",
//     "/images/carousel/06.png",
//     "/images/carousel/07.png",
//     "/images/carousel/08.png",
//     "/images/carousel/09.png",
//     "/images/carousel/10.png",
//     "/images/carousel/11.png",
//     "/images/carousel/12.png",
//     "/images/carousel/13.png",
//     "/images/carousel/14.png",
//     "/images/carousel/15.png",
//     "/images/carousel/16.png",
//     "/images/carousel/17.png",
//     "/images/carousel/18.png",
//   ];

//   return (
//     <div className="relative w-full overflow-hidden py-32">
//       <style>
//     {`
//       @keyframes bounceHover {
//         0%, 100% { transform: translateY(0); }
//         50% { transform: translateY(-100px); }
//       }
//     `}
//   </style>
//       <div className="relative  w-full h-[400px]">
//         {images.map((src, index) => (
//           <motion.div
//             key={index}
//             className="absolute w-60 h-110"
//             style={{ zIndex: images.length * 2 - index }}
//             initial={{ 
//               x: "100vw",
//               // y: 100,
//             }}
//             animate={{
//               x: [ "125vw", "100vw", "75vw","50vw", "25vw", "0vw", "-25vw" ],
//               // y: [ 20,0, -50, -100, -50, 0 , 20],
//               // y: [ 100,0, -100,  0 , 100],
//             }}
//             transition={{
//               duration: 20,      // total duration for one iteration
//           ease: "linear",
//           repeat: Infinity,  // infinite loop
//           // repeatType: "loop",
//           // delay: index * (20 / images.length), // stagger each image evenly
//           delay: index * (30 / images.length), // stagger each image evenly
//             }}
//           >
//             <img
//               src={src}
//               alt={`Slide ${index}`}
//               className="w-full h-full  rounded-xl transition-transform"
//               style={{ cursor: "pointer" }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.animation = "bounceHover 0.5s ease-out";
//           }}
//           onAnimationEnd={(e) => {
//             e.currentTarget.style.animation = "";
//           }}

//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>




//   );
// };

// export default CardCarousel;


"use client";
import { motion } from "framer-motion";

const CardCarousel = () => {
  const images = [
    "/images/carousel/01.png",
    "/images/carousel/02.png",
    "/images/carousel/03.png",
    "/images/carousel/04.png",
    "/images/carousel/05.png",
    "/images/carousel/06.png",
    "/images/carousel/07.png",
    "/images/carousel/08.png",
    "/images/carousel/09.png",
    "/images/carousel/10.png",
    "/images/carousel/11.png",
    "/images/carousel/12.png",
    "/images/carousel/13.png",
    "/images/carousel/14.png",
    "/images/carousel/15.png",
    "/images/carousel/16.png",
    "/images/carousel/17.png",
    "/images/carousel/18.png",
  ];

  return (
    <div className="relative w-full overflow-hidden pt-25">
      <style>
        {`
          @keyframes bounceHover {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-100px); }
          }
        `}
      </style>

      <div className="relative w-full h-[350px] flex items-center">
        <motion.div
          className="flex gap-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="w-50 h-[350px] flex-shrink-0"
            >
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full h-full rounded-xl transition-transform cursor-pointer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.animation =
                    "bounceHover 0.5s ease-out";
                }}
                onAnimationEnd={(e) => {
                  e.currentTarget.style.animation = "";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CardCarousel;

