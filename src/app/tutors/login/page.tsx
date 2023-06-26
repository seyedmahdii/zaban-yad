"use client";

import TutorLogin from "../../../containers/TutorLogin/TutorLogin";
import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

function LoginPage() {
  return (
    <div>
      <Head>
        <title>زبان یاد - ورود استاد</title>
      </Head>
      <Header />
      <TutorLogin />
      <Footer />
    </div>
  );
}

export default LoginPage;
