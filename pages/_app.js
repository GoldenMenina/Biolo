import Head from "next/head";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/layout/layout";
import $ from "jquery";
import { useRef, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();

  useEffect(() => {
    const element = document.querySelector("body");


    element.classList.add("color-theme-blue" ,"mont-font");
  }, [router]);


  return (  
      <Layout>
        <Head>
    <link rel="stylesheet" href="/css/themify-icons.css" />
    <link rel="stylesheet" href="/css/feather.css" />

    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/emoji.css" />
    
    <link rel="stylesheet" href="/css/lightbox.css" />

    <script src="/js/plugin.js"></script>

<script src="/js/lightbox.js"></script>
<script src="/js/scripts.js"></script>
        </Head>
        <Component {...pageProps} />
      </Layout>
  );
}
