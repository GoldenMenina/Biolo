import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

import { getDecryptedCookie, setEncryptedCookie } from "../../lib/session";
import axios from "axios";
import { verifyPassword, hashPassword } from "../../lib/auth";

export default function Profile({ usuario }) {
  var toaststate;
  const { data: session, status } = useSession();

  const [ProfileFile, setProfileFile] = useState("");
  const [ProfilePic, setProfilePic] = useState("");

  const [Coverphoto, setCoverphoto] = useState("");

  const [CoverFile, setCoverFile] = useState("");

  const [loading, setloading] = useState(false);

  const [education, setEducation] = useState(usuario ? usuario.educacao : "");
  const [profissao, setProfissao] = useState(usuario ? usuario.profissao : "");

  const [classe, setclasse] = useState(usuario ? usuario.classe : "");
  const [tipoconta, settipoconta] = useState(usuario ? usuario.tipo : "");

  const [skills, setSkills] = useState(usuario ? usuario.habilidades : "");
  const [notes, setNotes] = useState(usuario ? usuario.motivacao : "");

  return (
    <section className="content">
      <ToastContainer />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-3">
            <div className="card card-primary card-outline">
              <div className="card-body box-profile">
                <div
                  className="text-center"
                  style={{
                    backgroundImage: Coverphoto
                      ? `url('${Coverphoto}')`
                      : usuario && usuario.cover
                      ? `url('${usuario.cover}')`
                      : "url('/img/hero-bgg1.jpg')",
                    backgroundPosition: "center",
                    backgroundSize: "contain", // Garante que a imagem seja totalmente visív
                    Maxwidth: "auto",
                    Maxheight: "auto",
                    backgroundRepeat: "no-repeat",
                    padding: "10px",
                  }}
                >
                  <img
                    className="profile-user-img img-fluid img-circle"
                    src={
                      usuario && usuario.avatar
                        ? usuario.avatar
                        : "https://picsum.photos/200/300"
                    }
                    alt="User profile picture"
                    style={{
                      objectFit: "cover",
                      width: "100px", // Defina a largura desejada
                      height: "100px",
                      padding: "10px",
                    }}
                  />
                </div>

                {usuario && usuario.estado ? (
                  <div className="text-center text-success">
                    {" "}
                    <small>
                      <i className="fa fa-circle"></i> activo
                    </small>{" "}
                  </div>
                ) : (
                  <div className="text-center text-danger">
                    {" "}
                    <small>
                      <i className="fa fa-circle"></i> Inactivo
                    </small>{" "}
                  </div>
                )}
                <h3 className="x profile-username text-center">
                  {usuario &&
                    usuario.nome.slice(0, 8) +
                      " " +
                      usuario.ultimonome.slice(0, 8)}
                </h3>

                <p className="text-muted text-center">
                  {usuario && usuario.classe}
                </p>

                <ul className="list-group list-group-unbordered mb-3">
                  <li className="list-group-item">
                    <b>Parceiros</b>{" "}
                    <a className="float-right">
                      {usuario && usuario.parceiro ? usuario.parceiro : 0}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <b>Seguidores</b>{" "}
                    <a className="float-right">
                      {usuario && usuario.seguidores ? usuario.seguidores : 0}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-9 mt-3">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Sobre mim</h3>
              </div>

              <div className="card-body">
                <>
                  <strong>
                    <i className="fas fa-certificate mr-1"></i> Profissão
                  </strong>
                  <p className="text-muted">{profissao}</p>
                  <hr />
                  <strong>
                    <i className="fas fa-book mr-1"></i> Educação
                  </strong>
                  <p className="text-muted">{education}</p>
                  <hr />

                  <strong>
                    <i className="fas fa-pencil-alt mr-1"></i> Habilidades
                  </strong>
                  <p className="text-muted">{skills}</p>
                  <hr />
                  <strong>
                    <i className="far fa-file-alt mr-1"></i> Motivação
                  </strong>
                  <p className="text-muted">{notes}</p>
                  <hr />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch(
    "https://portal-eta-eight.vercel.app/api/usuarios/user",
    {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: context.query.id,
      }),
    }
  );
  const usuario = await data.json();
  return {
    props: { usuario },
  };
}
