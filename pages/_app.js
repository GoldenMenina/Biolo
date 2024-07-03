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

/*  useEffect(() => {
    const element = document.querySelector("body");


    element.classList.add("color-theme-blue" ,"mont-font");
  }, [router]); */


  return (  
      <Layout>
        <Head>
     <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />

    <title>Giannu Carnes - Melhor Carne de Angola</title>

    
    <link rel="icon" href="/assets/images/favicon.ico" type="image/x-icon" />

   
    <link
      href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet"
    />

    
    <link href="/assets/css/font-awesome-all.css" rel="stylesheet" />
    <link href="/assets/css/flaticon.css" rel="stylesheet" />
    <link href="/assets/css/owl.css" rel="stylesheet" />
    <link href="/assets/css/bootstrap.css" rel="stylesheet" />
    <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />
    <link href="/assets/css/animate.css" rel="stylesheet" />
    <link href="/assets/css/color.css" rel="stylesheet" />
    <link href="/assets/css/style.css" rel="stylesheet" />
    <link href="/assets/css/responsive.css" rel="stylesheet" />
  
        </Head>
        <Component {...pageProps} />
        
  <script src="/assets/js/jquery.js"></script>
    <script src="/assets/js/popper.min.js"></script>
    <script src="/assets/js/bootstrap.min.js"></script>
    <script src="/assets/js/owl.js"></script>
    <script src="/assets/js/wow.js"></script>
    <script src="/assets/js/validation.js"></script>
    <script src="/assets/js/jquery.fancybox.js"></script>
    <script src="/assets/js/appear.js"></script>
    <script src="/assets/js/scrollbar.js"></script>
    <script src="/assets/js/nav-tool.js"></script>

    
    <script src="/assets/js/script.js"></script>
    <script src="/assets/js/mainscript.js"></script>
      </Layout>
  );
}
