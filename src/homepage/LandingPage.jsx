import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import FirstContent from "../component/FirstContent";
import SecondContent from "../component/SecondContent";
import Product from "../component/Product";
import Footer from "../component/Footer";

export default function LandingPage(){
    return(
        <>
        <section className="h-full w-full border-box transition-all duration-500 linear bg-white">
        <div className="header-2-2">
        <Navbar/>
        <Hero/>
        </div>
        </section>
        <section class="h-full w-full border-box bg-white">
        <FirstContent/>
        </section>
        <section class="h-full w-full px-8 py-20 bg-white">
        <SecondContent/>
        </section>
        <section class="products bg-black-1">
        <Product/>
        </section>
        <section class="footer font-display bg-dark-6">
        <Footer/>
        </section>
        </>
    )
}