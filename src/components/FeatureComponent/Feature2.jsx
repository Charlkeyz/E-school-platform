import React from "react";
import style from "../FeatureComponent/feature2.module.css";
import Button from "../ButtonComponent/Button";
const Feature2 = ({ title, desc, img }) => {
  return (
    <section className={style.features_container}>
      <div className={style.Feature2_container_flex}>
        <div className={style.imgfeatures2}>
          <img src={img} className={style.imgfeaturesimg} />
        </div>
        <div>
          <div className={style.featuereene}>
            <div className={style.features_classroom_Line}></div>
            <h2 className={style.Feature2_container_flex_h2}>{title}</h2>
            <p className={style.Feature2_container_flex_des}>{desc}</p>
            <div style={{ marginBottom: "20px" }}>
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
                Learn more
              </Button>
            </div>

            <div className={style.features_classroom_Line2}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
