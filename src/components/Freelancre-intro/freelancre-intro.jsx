/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = ({ headerData, image }) => {
  if (!headerData) return (
    <>
      <div className="freelancre valign">
        <p>communication data error</p>
      </div>
    </>
  )
  const { header_text, header_text_options, header_number_1, header_number_1_desc, header_number_2, header_number_2_desc, ...rest } = headerData;
  const { email } = rest;
  const strings = header_text_options.split(",");
  return (
    <header className="freelancre valign">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img src={image} alt="" />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="cont">
              <h1 className="cd-headline clip">
                {header_text}
                <span
                  style={{ marginLeft: ".5rem", lineHeight: "49px", overflowWrap: "break-word" }}
                  className="cd-words-wrapper"
                >
                  <Typewriter
                    options={{
                      wrapperClassName: "color-font fw-600",
                      strings,
                      autoStart: true,
                      deleteSpeed: 10,
                      loop: true,
                    }}
                    loop={true}
                    onInit={(typewriter) => {
                      typewriter;
                    }}
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="states">
          <div className="container">
            <ul className="flex">
              <li className="flex">
                <div className="numb valign">
                  <h3>{header_number_1}</h3>
                </div>
                <div className="text valign">
                  <p>
                    {header_number_1_desc}
                  </p>
                </div>
              </li>

              <li className="flex">
                <div className="numb valign">
                  <h3>{header_number_2}</h3>
                </div>
                <div className="text valign">
                  <p>
                    {header_number_2_desc}
                  </p>
                </div>
              </li>

              <li className="mail-us">
                <a href="mailto:your@email.com?subject=Subject">
                  <div className="flex">
                    <div className="text valign">
                      <div className="full-width">
                        <p>Ponte en contacto conmigo</p>
                        <h6>{email}</h6>
                      </div>
                    </div>
                    <div className="mail-icon">
                      <div className="icon-box">
                        <span className="icon color-font pe-7s-mail"></span>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line bottom left"></div>
    </header>
  );
};

export default FreelancreIntro;
