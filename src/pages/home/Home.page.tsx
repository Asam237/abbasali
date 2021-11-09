import React from "react";
import { About } from "../../components/about/About.component";
import { Header } from "../../components/header/Header.component"
import { Intro } from "../../components/intro/Intro.component";
import { Service } from "../../components/service/Service.component";

export const Home = () => {
    return (
        <div className="site">
            <Header />
            <main>
                <Intro />
                <About />
                <Service />
            </main>
        </div>
    )
}