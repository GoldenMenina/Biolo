import Head from "next/head";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const getsession = async () => {
    if (status === "authenticated") {
      router.replace("/perfil");
    }
  };

  useEffect(() => {
    getsession();
  }, [status]);

  var toaststate;
  const [email, setemail] = useState();
  const [senha, setsenha] = useState();
  const [loading, setloading] = useState();

  const onFormSubmit = async (e) => {
    e.preventDefault();

    setloading(true);

    toaststate = toast.loading("aguarde...", { closeOnClick: true });
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email: email.toLowerCase(),
      password: senha,
    });

    if (!result.error) {
      router.replace("/perfil");
    } else {
      setloading(false);
      console.log(result.error);
      toast.update(toaststate, {
        render: result.error,
        type: "error",
        isLoading: false,
        closeOnClick: true,
        autoClose: 1300,
      });
    }
  };

  return (
    <>
      <ToastContainer />

      {status == "unauthenticated" ? (
        <>
          <Head>
            <title>Iniciar Sessão - ANJE</title>
          </Head>
          <div className="login-box">
            <div className="card card-outline card-primary">
              <div className="card-header text-center">
                <img className="img-fluid" src="/img/logo.png" />
              </div>
              <div className="card-body">
                <p className="login-box-msg">Inciar Sessão</p>

                <form onSubmit={onFormSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Palavra passe"
                      onChange={(e) => {
                        setsenha(e.target.value);
                      }}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      {email && senha ? (
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Iniciar Sessão
                        </button>
                      ) : (
                        <button className="btn btn-primary btn-block" disabled>
                          Iniciar Sessão
                        </button>
                      )}
                      <Link href="/inscricao">
                        <a className="btn btn-sm btn-warning btn-block">
                          Inscrever
                        </a>
                      </Link>
                    </div>
                  </div>
                </form>

                <p className="mb-1 text-center">
                  <Link href="/recuperacao">
                    <a>Esquece minha Palavra passe</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
