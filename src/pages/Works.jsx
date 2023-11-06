// import React, { useState, useRef, useEffect } from "react";
// import victory from "../img/work-victory.jpg";
// import nowak from "../img/work-alex-nowak.jpg";
// import metiew from "../img/work-metiew-smith.jpg";
// import prev from "../components/icons/prev.svg";
// import next from "../components/icons/next.svg";
// const Works = () => {
//   const totalWorks = 3; // O número total de itens no slider
//   const [curLeft, setCurLeft] = useState(0);
//   const [curCenter, setCurCenter] = useState(1);
//   const [curRight, setCurRight] = useState(2);

//   const sliderRef = useRef(null);

//   const handleSliderClick = (isNext) => {
//     if (isNext) {
//       setCurLeft((curLeft + 1) % totalWorks);
//       setCurCenter((curCenter + 1) % totalWorks);
//       setCurRight((curRight + 1) % totalWorks);
//     } else {
//       setCurLeft((curLeft - 1 + totalWorks) % totalWorks);
//       setCurCenter((curCenter - 1 + totalWorks) % totalWorks);
//       setCurRight((curRight - 1 + totalWorks) % totalWorks);
//     }
//   };

//   useEffect(() => {
//     const slider = sliderRef.current;
//     console.log(slider);
//     if (slider) {
//       slider.style.opacity = 0;
//       setTimeout(() => {
//         slider.style.opacity = 1;
//       }, 400);
//     }
//   }, [curLeft, curCenter, curRight]);
//   return (
//     <div className="work">
//       <h2>Selected work</h2>
//       <div className="work--lockup">
//         <ul className="slider" ref={sliderRef}>
//           <li className="slider--item slider--item-left">
//             <a href="#0">
//               <div className="slider--item-image">
//                 <img src={victory} alt="Welcome" />
//               </div>
//               <p className="slider--item-title">Victory</p>
//               <p className="slider--item-description">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
//               </p>
//             </a>
//           </li>
//           <li className="slider--item slider--item-center">
//             <a href="#0">
//               <div className="slider--item-image">
//                 <img src={nowak} alt="Welcome" />
//               </div>
//               <p className="slider--item-title">Metiew &amp; Smith</p>
//               <p className="slider--item-description">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
//               </p>
//             </a>
//           </li>
//           <li className="slider--item slider--item-right">
//             <a href="#0">
//               <div className="slider--item-image">
//                 <img src={metiew} alt="Welcome" />
//               </div>
//               <p className="slider--item-title">Alex Nowak</p>
//               <p className="slider--item-description">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.
//               </p>
//             </a>
//           </li>
//         </ul>
//         <div className="slider--prev" onClick={() => handleSliderClick(false)}>
//           <div
//             style={{
//               width: "15px", // Defina a largura da div conforme necessário
//               height: "15px", // Defina a altura da div conforme necessário
//               backgroundImage: `url("${prev}")`, // Use a variável seta para a imagem de fundo
//               backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
//               backgroundRepeat: "no-repeat",
//             }}
//           ></div>
//         </div>
//         <div className="slider--next" onClick={() => handleSliderClick(true)}>
// <div
//   style={{
//     width: "15px", // Defina a largura da div conforme necessário
//     height: "15px", // Defina a altura da div conforme necessário
//     backgroundImage: `url("${next}")`, // Use a variável seta para a imagem de fundo
//     backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
//     backgroundRepeat: "no-repeat",
//   }}
// ></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Works;
import React, { useState, useEffect } from "react";
import victory from "../img/work-victory.jpg";
import nowak from "../img/work-alex-nowak.jpg";
import metiew from "../img/work-metiew-smith.jpg";
import prev from "../components/icons/prev.svg";
import next from "../components/icons/next.svg";
const Works = ({ isDisabled }) => {
  const works = [
    {
      image: victory,
      title: "Victory",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
    },
    {
      image: nowak,
      title: "Metiew & Smith",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
    },
    {
      image: metiew,
      title: "Alex Nowak",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.",
    },
  ];

  const [currentWorkIndex, setCurrentWorkIndex] = useState(0);

  const handleSliderClick = (isNext) => {
    if (isNext) {
      setCurrentWorkIndex((currentWorkIndex + 1) % works.length);
    } else {
      setCurrentWorkIndex((currentWorkIndex - 1 + works.length) % works.length);
    }
  };

  useEffect(() => {
    const sliderItems = document.querySelectorAll(".slider--item");

    sliderItems.forEach((item, index) => {
      item.style.opacity = 0;
    });

    setTimeout(() => {
      sliderItems.forEach((item) => {
        item.style.opacity = 1;
      });
    }, 400);
  }, [currentWorkIndex]);

  const currentWork = works[currentWorkIndex];

  return (
    <div className="work">
      <h2>Selected work</h2>
      <div className="work--lockup">
        <ul className="slider">
          {works.map((work, index) => (
            <li
              key={index}
              className={`slider--item ${
                index === currentWorkIndex ? "slider--item-center" : ""
              } ${
                index === (currentWorkIndex - 1 + works.length) % works.length
                  ? "slider--item-left"
                  : ""
              } ${
                index === (currentWorkIndex + 1) % works.length
                  ? "slider--item-right"
                  : ""
              }`}
            >
              <a href="#0">
                <div className="slider--item-image">
                  <img src={work.image} alt={work.title} />
                </div>
                <p className="slider--item-title">{work.title}</p>
                <p className="slider--item-description">{work.description}</p>
              </a>
            </li>
          ))}
        </ul>
        <button
          className="slider--prev"
          onClick={() => handleSliderClick(false)}
          disabled={isDisabled}
          style={{ boxShadow: "none", border: "none" }}
        >
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${prev}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </button>
        <button
          className="slider--next"
          onClick={() => handleSliderClick(true)}
          disabled={isDisabled}
          style={{ boxShadow: "none", border: "none" }}
        >
          <div
            style={{
              width: "15px", // Defina a largura da div conforme necessário
              height: "15px", // Defina a altura da div conforme necessário
              backgroundImage: `url("${next}")`, // Use a variável seta para a imagem de fundo
              backgroundSize: "contain", // Ajuste o tamanho da imagem de acordo com suas necessidades
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Works;
