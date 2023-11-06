import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightIcon } from "../../assets/RightIcon.svg";
import styles from "./Carousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.rightNavigation}>
      {!isEnd && <RightIcon onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRightNavigation;
