import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      // session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.user.role = "Lawyer";

      return session;
    },
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      authorize: async () => {
        return {
          id: "asd",
          name: "Bambang",
          email: "bambang@gmail.com",
        };
      },
    }),
  ],
});

export { handler as GET, handler as POST };
