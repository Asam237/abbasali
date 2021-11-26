import React from "react";
import { SOCIALS } from "../../assets/data/socials.data";
import { LANGUAGES } from "../../constants/languages";

export const Footer = () => {
  return (
    <div id="contact" className="site__footer">
      <div className="flex flex-col md:flex-row px-4 md:px-20 pt-10 md:pt-24">
        <div className="container mx-auto justify-center flex flex-col">
          <h1
            className="text-2xl text-center md:text-3xl"
            style={{ fontFamily: "'Poppins', sans-serif", color: "#00A78E" }}
          >
            {LANGUAGES.home.title}
          </h1>
          <div className="site__footer-socials pt-8 pb-4">
            <div className="flex justify-center items-center">
              {SOCIALS.map((i: any) => (
                <div
                  className="rounded-full bg-gray-200 p-2 mx-2 border-gray-400"
                  style={{ borderWidth: "1px" }}
                >
                  <a href={i.link}>
                    <img className="w-6 h-6" src={i.image} />
                  </a>
                </div>
              ))}
            </div>
            <div className="site__footer-adress">
              <p
                className="font-normal text-base text-center py-4 leading-7"
                style={styles}
              >
                {LANGUAGES.home.mail}
              </p>
              <p
                className="font-normal text-base text-center leading-7"
                style={styles}
              >
                {LANGUAGES.home.number}
              </p>
              <p
                className="font-normal text-base text-center py-4 leading-7"
                style={styles}
              >
                {LANGUAGES.home.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  color: "#293651",
  fontFamily: "'Poppins', sans-serif",
};
