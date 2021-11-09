import React from "react";
import { SERVICES } from "../../assets/data/service.data";
import { LANGUAGES } from "../../constants/languages";

export const Service = () => {
    return (
        <div className="site__service pt-10 md:pt-20">
            <div className="flex flex-col px-4 md:px-20 py-10 md:py-20">
                <h4 className="site__servie-title font-bold text-xl text-center" style={{ fontFamily: "cursive", color: "#00A78E" }}>{LANGUAGES.home.service}</h4>
                <h1 className="text-xl md:text-3xl font-extrabold text-center pt-3" style={{ fontFamily: "cursive", color: "#293651" }}>{LANGUAGES.home.serviceProvide}</h1>
                <div className="site__line mx-auto border-solid my-2 md:my-4 w-24" style={{ background: '#00A78E', height: '2px' }}></div>
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
                        {SERVICES.map((i: any) => (
                            <div className="service__item mt-7 md:mt-14 shadow-2xl rounded-2xl p-4" style={{ borderWidth: '1px' }}>
                                <div style={{ background: "#00A78E" }} className="service__item-blogImg w-16 h-16 flex rounded-t-2xl rounded-bl-2xl items-center justify-center">
                                    <img className="w-8 h-8" src={i.image} alt="" />
                                </div>
                                <h3 className="service__item-title text-xl font-bold py-4" style={{ fontFamily: "cursive", color: "#293651" }}>{i.title}</h3>
                                <p className="font-normal text-base w-full md:w-3/4 leading-7" style={styles}>{i.subTitle}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = {
    color: "#293651"
}