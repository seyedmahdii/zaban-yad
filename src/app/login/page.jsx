"use client";

import StudentLogin from "../../containers/StudentLogin/StudentLogin";
import Head from "next/head";

function LoginPage() {
  return (
    <div>
      <Head>
        <title>زبان یاد - ورود زبان آموز</title>
      </Head>
      <StudentLogin />
    </div>
  );
}

export default LoginPage;
