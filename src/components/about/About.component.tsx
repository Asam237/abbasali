import React from "react";
import { LANGUAGES } from "../../constants/languages";
import profile from "../../assets/img/profile.jpg"
import { Progress } from "../progress/Progress.component";

export const About = () => {
    return (
        <div id="about" className="site__about">
            <div className="flex flex-col px-4 md:px-20 pt-7 md:pt-14">
                <h1 className="site__about-title text-2xl md:text-5xl text-center font-medium mb-6 md:mb-12" style={{ fontFamily: "cursive", color: "#00A78E" }}>{LANGUAGES.home.about}</h1>
                <div className="container mx-auto justify-between flex flex-col md:flex-row">
                    <div data-aos="fade-right" className="site__about-picture pt-6 md:pt-0 w-full md:w-1/2 flex">
                        <img src={profile} alt="" className="site__about-img bg-contain h-auto rounded-lg w-5/6 mx-auto md:mx-0" />
                    </div>
                    <div data-aos="fade-left" className="site__about-text w-full md:w-1/2 flex flex-col md:justify-center">
                        <h2 className="text-3xl md:text-4xl text-center md:text-left font-bold pt-4 md:pt-6" style={{ fontFamily: "cursive", color: "#293651" }}>{LANGUAGES.home.whyHireMe}</h2>
                        <div className="site__line mx-auto md:mx-0 border-solid my-2 md:my-4 w-2/3" style={{ background: '#00A78E', height: '2px' }}></div>
                        <p className="font-normal text-base w-full md:w-4/5 leading-7 my-5" style={styles}>{LANGUAGES.home.aboutBody}</p>
                        <Progress myTilte="UI/UX Design" myPercent="60%" />
                        <Progress myTilte="Web Design" myPercent="85%" />
                        <Progress myTilte="Java/Kotlin" myPercent="70%" />
                        <Progress myTilte="Javascript/TypeScript" myPercent="80%" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const styles = {
    color: "#293651"
}