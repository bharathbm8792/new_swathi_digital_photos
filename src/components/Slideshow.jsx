import { useEffect, useState } from "react";
import style from "./Slideshow.module.css";

import first from "/src/images/slideshow/meragi.celebrations-20240408-0001.jpg";
import second from "/src/images/slideshow/meragi.celebrations-20240408-0002.jpg";
import third from "/src/images/slideshow/meragi.celebrations-20240408-0003.jpg";
import fourth from "/src/images/slideshow/meragi.celebrations-20240408-0004.jpg";
import fifth from "/src/images/slideshow/meragi.celebrations-20240408-0005.jpg";
import sixth from "/src/images/slideshow/meragi.celebrations-20240408-0006.jpg";
import seventh from "/src/images/slideshow/meragi.celebrations-20240408-0007.jpg";
import eighth from "/src/images/slideshow/meragi.celebrations-20240408-0008.jpg";
import ninth from "/src/images/slideshow/meragi.celebrations-20240408-0009.jpg";
import Pic10 from "/src/images/home_warming/05.jpg";
import Pic11 from "/src/images/candid_wedding/02.jpg";
import Pic12 from "/src/images/candid_wedding/32.jpg";
import Pic13 from "/src/images/candid_wedding/33.jpg";
import Pic14 from "/src/images/pre_wedding_service/003.jpg";
import Pic15 from "/src/images/pre_wedding_service/035.jpg";

//import Pic10 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/home_warming/05.jpg";
//import Pic11 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/02.jpg";
//import Pic12 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/32.jpg";
//import Pic13 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/candid_wedding/33.jpg";
//import Pic14 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/pre_wedding_service/003.jpg";
//import Pic15 from "/home/bharathbm/practice/React/swathi-digital-photos/src/images/pre_wedding_service/035.jpg";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

export default function Slideshow() {
  const images = [
    Pic11,
    Pic12,
    Pic13,
    Pic10,
    Pic14,
    Pic15,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className={style.container}>
      <p className={style.service_para}>
        <span className={style.first_letter}>O</span>UR WORKS
      </p>
      <div className={style.slideshow}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={style.fadeIn}
        />
        <button className={style.prev} onClick={goToPrevious}>
          <GrPrevious />
        </button>
        <button className={style.next} onClick={goToNext}>
          <GrNext />
        </button>
      </div>
      <div className={style.navigation_dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? style.dot_active : style.dot}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
