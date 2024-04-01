import NextAuth from "next-auth";
import { useEffect } from "react";

import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../lib/auth";
import clientPromise from "../../../lib/mongodb";
import { setEncryptedCookie } from "../../../lib/session";

export default NextAuth({
  site: "http://localhost:3000",
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    jwt: true,
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const client = await clientPromise;
        const usersCollection = client.db("anje").collection("usuarios");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("usuario não existe.");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("verifique a senha.");
        }

        return user;
      },
    }),
  ],
});
