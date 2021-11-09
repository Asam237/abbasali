import React from "react";
import { LANGUAGES } from "../../constants/languages";

export const HireMe = () => {
    return (
        <div className="site__hireme py-7 md:py-14">
            <div className="flex flex-col px-4 md:px-20 md:flex-row">
                <div style={{ background: '#00A78E' }} className="container rounded-xl mx-auto p-4 md:p-20">
                    <div className="flex flex-col md:flex-row">
                        <div className="site__hireme-text w-full md:w-1/2 flex flex-col md:justify-center">
                            <h4 className="site__servie-title font-bold text-2xl md:text-3xl text-center md:text-left" style={{ fontFamily: "cursive", color: "#fff" }}>{LANGUAGES.home.hireMeTitle}</h4>
                            <div className="site__line mx-auto md:mx-0 border-solid my-2 md:my-4 w-52" style={{ background: '#fff', height: '2px' }}></div>
                            <p className="font-normal text-base w-full leading-7 text-center md:text-left text-white">{LANGUAGES.home.hireMeSubTitle}</p>
                        </div>
                        <div className="site__hireme-btn pt-6 md:pt-0 w-full md:w-1/2 flex justify-center md:justify-end items-center">
                            <button className="px-4 h-12 bg-white font-semibold py-2 rounded-md" style={{ color: "#00A78E" }}>{LANGUAGES.home.hireMe}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}