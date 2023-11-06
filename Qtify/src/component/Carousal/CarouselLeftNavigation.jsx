import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftIcon } from "../../assets/LeftIcon.svg";
import styles from "./Carousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [isBeginning, swiper, swiper.isBeginning]);
  return (
    <div className={styles.leftNavigation}>
      {!isBeginning && <LeftIcon onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;
