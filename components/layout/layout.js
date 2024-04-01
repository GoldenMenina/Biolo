import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import InactiveAccountModal from "../modalComponent";
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../../lib/session";

export default function Layout({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [usuario, setusuario] = useState(null);
  const [newstatus, setnewstatus] = useState("");

  const getsession = async () => {
    if (status === "unauthenticated" && router.pathname != "/inscritos") {
      const element = document.querySelector("body");
      element.classList.add("hero");
      if (router.pathname != "/inscricao") {
        router.replace("/login");
      }
    }

    if (status == "unauthenticated" || router.pathname == "/inscritos") {
      const element = document.querySelector("body");
      element.classList.remove("hero");
    }
  };

  const deleteCookies = async () => {
    await deleteCookie("authsesh");
    signOut();
  };

  const getuser = async () => {
    const response = await getDecryptedCookie("authsesh");

    if (!response) {
      try {
        const res = await fetch("/api/usuarios/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session.user.email,
          }),
        });

        const response = await res.json();

        setusuario(response);
        setEncryptedCookie("authsesh", response);
      } catch (error) {
        console.log(error);
      }
    } else {
      setusuario(response);
    }
  };

  // const getsesh = async () => {
  //   const response = await getDecryptedCookie("authsesh");

  // };

  // useEffect(() => {
  //   $("#inactiveAccountModal").modal("show");

  //   $("#inactiveAccountModal").modal({
  //     backdrop: "static",
  //     keyboard: false,
  //   });
  // }, []);

  useEffect(() => {
    getsession();
    if (usuario == null) {
      getuser();
    }
    setInterval(() => {
      getuser();
    }, 5000); // Intervalo de 5 segundos

    setnewstatus(status);
  }, [status, session]);

  return (
    <div className="wrapper">
      {usuario && !usuario.estado && router.pathname != "/perfil" && (
        <InactiveAccountModal />
      )}

      {newstatus == "authenticated" ? (
        router.pathname != "/empresa/[empresa_id]" ? (
          <>
            <div
              className={
                router.pathname == "/login"
                  ? "wrapper login-page-inactivo"
                  : router.pathname == "/recuperacao"
                  ? "wrapper login-page-inactivo"
                  : router.pathname == "/empresa/[empresa_id]"
                  ? "wrapper login-page-inactivo"
                  : "login-page-activo"
              }
            >
              <nav className="main-header navbar navbar-expand navbar-white navbar-light fixed-top">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-widget="pushmenu"
                      href="#"
                      role="button"
                    >
                      <i className="fas fa-bars"></i>
                    </a>
                  </li>
                  <li className="nav-item ">
                    <Link href="/comunidade">
                      <a className="nav-link" role="button">
                        <i
                          className={`fas fa-home ${
                            router.pathname == "/comunidade" && " text-primary"
                          }`}
                        ></i>
                      </a>
                    </Link>
                  </li>
                  {/* <li className="nav-item ">
                    <Link href="/live">
                      <a className="nav-link" role="button">
                        <i
                          className={`fas fa-podcast ${
                            router.pathname == "/live" && " text-primary"
                          }`}
                        ></i>
                      </a>
                    </Link>
                  </li> */}

                  <li className="nav-item ">
                    <Link href="/membros">
                      <a className="nav-link" role="button">
                        <i
                          className={`fas fa-users ${
                            router.pathname == "/membros" && " text-primary"
                          }`}
                        ></i>
                      </a>
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <Link href="/inbox">
                      <a className="nav-link" role="button">
                        <i
                          className={`fas fa-envelope ${
                            router.pathname == "/inbox" && " text-primary"
                          }`}
                        ></i>
                      </a>
                    </Link>
                  </li>
                </ul>

                {/* <li className="nav-item dropdown">
            <a
              id="dropdownSubMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
            >
              Clientes
            </a>
            <ul
              aria-labelledby="dropdownSubMenu1"
              className="dropdown-menu border-0 shadow"
            >
              <li>
                <Link href="/cliente-pipeline">
                  <a className="dropdown-item">Pipeline</a>
                </Link>
              </li>

              <li>
                <a href="#/vendas" className="dropdown-item">
                  Vendas
                </a>
              </li>

              <li>
                <a href="#/crm-clientes" className="dropdown-item">
                  Ver clientes
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              id="dropdownSubMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
            >
              Negociações
            </a>
            <ul
              aria-labelledby="dropdownSubMenu1"
              className="dropdown-menu border-0 shadow"
            >
              <li>
                <a href="#/negociacao" className="dropdown-item">
                  Nova
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  ver negociações
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              id="dropdownSubMenu1"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              className="nav-link dropdown-toggle"
            >
              Empresas
            </a>
            <ul
              aria-labelledby="dropdownSubMenu1"
              className="dropdown-menu border-0 shadow"
            >
              <li>
                <Link href="/cadastar-empresa">
                  <a className="dropdown-item">Nova</a>
                </Link>
              </li>
              <li>
                <Link href="/ver-empresas">
                  <a className="dropdown-item">Gerir Empresas</a>
                </Link>
              </li>
            </ul>
          </li>*/}
                {/* </ul> */}

                <ul className="navbar-nav ml-auto">
                  {/* <li className="nav-item">
                    <a
                      className="nav-link"
                      data-widget="navbar-search"
                      href="#"
                      role="button"
                    >
                      &nbsp; <i className="fas fa-search"></i>
                    </a>
                    <div className="navbar-search-block">
                      <form className="form-inline">
                        <div className="input-group input-group-sm">
                          <input
                            className="form-control form-control-navbar"
                            type="search"
                            placeholder="Pesquisar Membro"
                            aria-label="Search"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-navbar" type="submit">
                              <i className="fas fa-search"></i>
                            </button>
                            <button
                              className="btn btn-navbar"
                              type="button"
                              data-widget="navbar-search"
                            >
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li> */}
                  <li></li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="#"
                      role="button"
                      onClick={() => {
                        deleteCookies();
                      }}
                    >
                      <i className="fas fa-power-off text-danger"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <Link href="/perfil">
                      <a className="nav-link" role="button">
                        <i
                          className={`fas fa-user ${
                            router.pathname == "/perfil" && " text-primary"
                          }`}
                        ></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>

              <aside className="main-sidebar sidebar-dark-primary elevation-4 ">
                <Link href="/">
                  <a class="brand-link">
                    <img
                      src="/img/logo.png"
                      alt="ANJE"
                      className="img-fluid"
                      style={{ opacity: " .8" }}
                    />
                  </a>
                </Link>

                <div className="sidebar">
                  <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                      <img
                        src={
                          usuario && usuario.avatar
                            ? usuario.avatar
                            : "https://cdn-icons-png.flaticon.com/128/1144/1144760.png"
                        }
                        className="img-circle elevation-2"
                        alt="User Image"
                        style={{
                          objectFit: "cover",
                          width: "45px", // Defina a largura desejada
                          height: "45px",
                        }}
                      />
                    </div>
                    <div className="info">
                      <a href="#" className="d-block">
                        {usuario &&
                          usuario.nome.slice(0, 8) +
                            " " +
                            usuario.ultimonome.slice(0, 10)}
                      </a>
                    </div>
                  </div>

                  <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                      <input
                        className="form-control form-control-sidebar"
                        type="search"
                        placeholder="Pesquisar"
                        aria-label="Search"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-sidebar">
                          <i className="fas fa-search fa-fw"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <nav className="mt-2">
                    <ul
                      className="nav nav-pills nav-sidebar flex-column"
                      data-widget="treeview"
                      role="menu"
                      data-accordion="false"
                    >
                      {usuario && usuario.tipo == "administrador" && (
                        <>
                          <li className="nav-header">Gestão Administrativo</li>

                          <li className="nav-item disabled">
                            <Link href="/gestao-usuarios">
                              <a className="nav-link disabled">
                                <i className="nav-icon fas fa-users"></i>
                                <p>Administradores</p>
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/inscricoes">
                              <a className="nav-link">
                                <i className="nav-icon fas fa-pencil-alt"></i>
                                <p>Inscrições</p>
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/recursos">
                              <a className="nav-link">
                                <i className="nav-icon fas fa-book"></i>
                                <p>Recursos</p>
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/brevemente">
                              <a className="nav-link">
                                <i className="nav-icon fas fa-users-cog"></i>
                                <p>Membros</p>
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/noticias">
                              <a className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt"></i>
                                <p>Notiçias</p>
                              </a>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link href="/brevemente">
                              <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-image"></i>
                                <p>Galeria</p>
                              </a>
                            </Link>
                          </li>
                        </>
                      )}
                      <>
                        <li className="nav-header">Ferramentas e Recursos</li>
                        <li className="nav-item">
                          <Link href="/recursos">
                            <a className="nav-link">
                              <i className="nav-icon fas fa-book"></i>
                              <p>Recursos</p>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/recursos">
                            <a className="nav-link">
                              <i className="nav-icon fas fa-calendar-alt"></i>
                              <p>Eventos</p>
                            </a>
                          </Link>
                        </li>
                      </>

                      {/* <li className="nav-item">
                        <Link href="/brevemente">
                          <a className="nav-link">
                            <i className="nav-icon fas fa-brain"></i>
                            <p>Inteligência artificial</p>
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/brevemente">
                          <a href="#" className="nav-link">
                            <i className="nav-icon fas fa-briefcase"></i>
                            <p>Gestor de Tarefas</p>
                          </a>
                        </Link>
                      </li> */}

                      {/* <li className="nav-item">
                      <Link href="/gestao-usuarios">
                        <a className="nav-link">
                          <i className="nav-icon fas fa-users"></i>
                          <p>Gestão de Usuários</p>
                        </a>
                      </Link>
                    </li> */}
                    </ul>
                  </nav>
                </div>
              </aside>
              <div className="content-wrapper">
                <div className="content">
                  <div className="" style={{ marginTop: "60px" }}>
                    {newstatus == "authenticated" && children}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div id="hero" className="containerNew login-page-activo">
            {children}
          </div>
        )
      ) : (
        <div className="containerNew">{children} </div>
      )}
      <aside className="control-sidebar control-sidebar-dark"></aside>
    </div>
  );
}
