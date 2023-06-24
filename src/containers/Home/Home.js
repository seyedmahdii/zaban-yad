"use client";

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const languages = [
  {
    english_name: "English",
    persian_name: "انگلیسی",
    flag_image:
      "https://api.tikkaa.ir/credential/img/index/header/unitedKingdom.png",
  },
  {
    english_name: "Russian",
    persian_name: "روسی",
    flag_image: "https://api.tikkaa.ir/credential/img/index/header/russia.png",
  },
  {
    english_name: "Spanish",
    persian_name: "اسپانیایی",
    flag_image: "https://api.tikkaa.ir/credential/img/index/header/spain.png",
  },
  {
    english_name: "French",
    persian_name: "فرانسه",
    flag_image: "https://api.tikkaa.ir/credential/img/index/header/france.png",
  },
];

function Home() {
  return (
    <main>
      <Header />
      <Hero languages={languages} />
      <Footer />
    </main>
  );
}

export default Home;
