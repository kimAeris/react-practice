import { DefaultSession } from "next-auth";

declare module "next-auth" {
  // next-auth 모듈 타입 확장
  interface Session {
    user?: {
      id?: string; // id 속성 타입 추가
      role?: string;
    } & DefaultSession["user"]; // 기존 필드를 유지함
  }
}
