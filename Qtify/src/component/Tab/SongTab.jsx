import React, { useState } from "react";
import styles from "./Tab.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousal/Carousel";
import BasicTabs from "../Tab/tab";

const SongTab = ({
  title,
  data,
  type,
  //   filteredData = null,
  filteredDatValues = [],
  value = 0,
  handleChange = null,
}) => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!toggle ? "Collapse All" : "Show All"}
        </h4>
      </div>

      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}

      {!toggle ? (
        <div className={styles.wrapper}>
          {filteredDatValues.map((item) => (
            <Card data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={filteredDatValues}
          renderComponent={(data) => <Card data={data} type={type} />}
        />
      )}
    </div>
  );
};

export default SongTab;
