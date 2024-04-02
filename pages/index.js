import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";
import CreatePostCard from './components/CreatePostCard'
import Stories from './components/Stories'
import PostCard from "./components/PostCard";


export default function Home() {
  const router = useRouter();


  return(
    <div className="row feed-body">
    <div className="col-xl-8 col-xxl-9 col-lg-8">


        <CreatePostCard />
    <PostCard />

      </div>
      </div>
  )
}
