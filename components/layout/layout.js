import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect, Children } from "react";
import Navbar from "./components/Navbar"
import AppBar from "./components/AppBar"
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../../lib/session";
import SideBar from "./components/Sidebar";

export default function Layout({ children }) {
  const router = useRouter();
  const [usuario, setusuario] = useState(null);
  const [newstatus, setnewstatus] = useState("");



  return (
    <div className="main-wrapper">
      <Navbar />
      <SideBar />
      <div className="main-content right-chat-active">
      <div className="middle-sidebar-bottom">
        <div className="middle-sidebar-left">
        <div className="preloader-wrap p-3">
                        <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                        <div className="box shimmer mb-3">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                        <div className="box shimmer">
                            <div className="lines">
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                                <div className="line s_shimmer"></div>
                            </div>
                        </div>
                    </div>


                    {children}
        </div>

      </div>
      </div>

      <AppBar />
    </div>
  );
}
