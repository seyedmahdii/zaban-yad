"use client";

import FindTeachers from "../../containers/FindTeachers/FindTeachers";
import Head from "next/head";

function LoginPage() {
  return (
    <div>
      <Head>
        <title>زبان یاد - جستجوی اساتید</title>
      </Head>
      <FindTeachers />
    </div>
  );
}

export default LoginPage;
