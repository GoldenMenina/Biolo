import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

export default function Recuperacao() {
  return (
    <>
      <Head>
        <title>Iniciar Sessão - ANJE</title>
      </Head>
      <div className="login-box">
        <div className="card card-outline card-primary">
          <div className="card-body">
            <p className="login-box-msg">Esqueceste sua palavra passe ?</p>
            <form action="recover-password.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Seu Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    requira nova palavra passe
                  </button>
                  <Link href="/login">
                    <a className="btn btn-xs btn-warning btn-block">
                      Iniciar Sessão
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
