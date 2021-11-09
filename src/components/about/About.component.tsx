import React from "react";
import { LANGUAGES } from "../../constants/languages";

export const About = () => {
    return (
        <div className="site__about">
            <div className="flex flex-col px-2 md:px-0 pt-7 md:pt-14">
                <h1 className="site__about-title text-2xl md:text-5xl text-center font-medium" style={{ fontFamily: "cursive", color: "#00A78E" }}>{LANGUAGES.home.about}</h1>
                <div className="container mx-auto justify-between flex flex-col md:flex-row">
                    <section className="site__about-items">
                        <div className="site__about-picture w-full md:w-1/2"></div>
                        <div className="site__about-text w-full md:w-1/2">
                            <h2>{LANGUAGES.home.whyHireMe}</h2>
                            <p>{LANGUAGES.home.aboutBody}</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}