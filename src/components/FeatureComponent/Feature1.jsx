/* eslint-disable react/prop-types */
import React from "react";
import style from "../FeatureComponent/feature.module.css";

import Button from "../ButtonComponent/Button";
import Card1 from "../Card/Card1";
const Feature1 = ({
  title,
  desc,
  img1,
  cardTitle1,
  parag1,
  img2,

  cardTitle2,
  parag2,
}) => {
  return (
    <section className={style.features_container}>
      <div className={style.features_container_classroom}>
        <div className={style.features_class}>
          <div className={style.features_classroom_Line}></div>
          <h2 className={style.classroom_h2}>{title}</h2>
          <p className={style.classroom_desc}>{desc}</p>
          <Button
            style={{
              backgroundColor: "#FF8500",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textTransform: "lowercase",
              fontFamily: "Plus Jakarta Sans",

              fontWeight: "500",
            }}
          >
            learn more
          </Button>
          <div className={style.features_classroom_Line2}></div>
        </div>
        <div className={style.cardDetails}>
          <Card1 img={img1} cardTitle={cardTitle1} parag={parag1} />
          <Card1 img={img2} cardTitle={cardTitle2} parag={parag2} />
        </div>
      </div>
    </section>
  );
};

export default Feature1;
