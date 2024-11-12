import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      // 로그인 버튼 누를 시 호출

      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: "J Smith",
          email: "jsmith@example.com",
          role: "User",
        };

        if (user) {
          // useSession => data.user 에 저장됨
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          return null;
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 30 * 24 * 60 * 60, // 30days
  },
  callbacks: {
    async jwt({ token, user }) {
      // 아래 session 데이터 token에 return 해줌
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // 위에서 token을 리턴받으면서 id 속성 추가됨 =>  next-auth.d.ts 에 타입 속성 정의
      session.user = token;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
};

export default NextAuth(authOptions);
