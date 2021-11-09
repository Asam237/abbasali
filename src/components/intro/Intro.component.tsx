import React from "react";
import { LANGUAGES } from "../../constants/languages";
import laptop from "../../assets/img/laptop.png"

export const Intro = (props: any) => {
    return (
        <div className="site__intro">
            <div className="flex flex-col md:flex-row px-4 md:px-20 pt-10 md:pt-24">
                {/* <div className="site__into-socials hidden md:flex">AAAAA</div> */}
                <div className="container mx-auto justify-between flex flex-col md:flex-row">
                    <div className="site__intro-description w-full md:w-1/2">
                        <h1 className="text-2xl md:text-3xl font-medium" style={{ fontFamily: "cursive", color: "#00A78E" }}>Hello</h1>
                        <h1 className="text-3xl md:text-5xl font-extrabold pt-4 md:pt-6" style={{ fontFamily: "cursive", color: "#293651" }}>{LANGUAGES.home.intro}</h1>
                        <p className="font-bold py-2 text-sm" style={styles}>{LANGUAGES.home.subTitle}</p>
                        <p className="font-normal text-base w-full md:w-5/6 leading-7" style={styles}>{LANGUAGES.home.content}</p>
                        <button className="px-4 mt-4 rounded-sm text-white font-semibold py-2" style={{ background: "#00A78E" }}>{LANGUAGES.home.hireMe}</button>
                    </div>
                    <div className="site__intro-picture pt-6 md:pt-0 w-full md:w-1/2 flex justify-center">
                        <img className="bg-cover h-2/3" src={laptop} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    color: "#293651"
}