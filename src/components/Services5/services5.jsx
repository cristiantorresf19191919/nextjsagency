import React from "react";
import featuresData from "../../data/sections/features.json";

const Services5 = ({ caracteristicas }) => {
  if (!caracteristicas) return (
    <>
      <h5>no se ha configurado caracteristicas</h5>
    </>
  )
  const { title, caption, body_title_1, body_caption_1, body_title_2, body_cap_2, body_title_3, body_cap_3, body_title_4, body_cap_4 } = caracteristicas;
  const featuresDataList = [
    {
      "id": 1,
      "icon": "pe-7s-paint-bucket",
      "title": body_title_1,
      "content": body_caption_1
    },
    {
      "id": 2,
      "icon": "pe-7s-paint-bucket",
      "title": body_title_2,
      "content":body_cap_2
    },
    {
      "id": 3,
      "icon": "pe-7s-paint-bucket",
      "title": body_title_3,
      "content": body_cap_3
    },
    {
      "id": 3,
      "icon": "pe-7s-paint-bucket",
      "title": body_title_4,
      "content": body_cap_4
    },
  ]
  return (
    <section className="services box lficon section-padding position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                {title}
              </h6>
              <h3 className="wow color-font">
                {caption}
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {featuresDataList.map((item, index) => (
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay={
                index == 0
                  ? ".5s"
                  : index == 1
                    ? ".7s"
                    : index === 2
                      ? ".9s"
                      : ".5s"
              }
              key={item.id}
            >
              <div className="item-box no-curve">
                <div>
                  <span className={`icon color-font ${item.icon}`}></span>
                </div>
                <div className="cont">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="line bottom right"></div>
    </section>
  );
};

export default Services5;
