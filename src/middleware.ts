export { default } from "next-auth/middleware";

// 로그인된 유저만 matcher안에있는 경로에 접근가능
// :path* : 모든경로
export const config = { matcher: ["/user", "/admin:path*"] };
