import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

const handler = NextAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },
  callbacks: {
    async session({ session }) {
      return session;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.BASE_API}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const resData = await res.json();

        const decodedToken = jwtDecode(resData.data.token) as {
          id: string;
          name: string;
          email: string;
        };

        if (!res.ok) {
          return null;
        }

        return {
          id: decodedToken?.id,
          name: decodedToken?.name,
          email: decodedToken?.id,
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
