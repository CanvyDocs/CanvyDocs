import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession, type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    session({ session }) {
      return session;
    },
    async jwt({ token }) {
      return token;
    },
  },
};

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}

export async function getCurrentUser() {
  return {
    id: "4c153576-5ff9-4f35-a469-d8b6df1a2ff7",
    name: "Emilien",
    email: "emilien@etadam.com",
    image: null,
    isAdmin: true,
  };
}
