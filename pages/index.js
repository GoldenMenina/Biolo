import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/comunidade");
  }, []);
  return <></>;
}
