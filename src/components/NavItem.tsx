import { User } from "@prisma/client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

interface navItemProps {
  mobile?: boolean;
  currentUser: User | null;
}

// ? : mobile 옵셔널을 주기위함
const NavItem = ({ mobile, currentUser }: navItemProps) => {
  // const { data: session, status } = useSession();
  // console.log("session", session);
  return (
    <ul
      className={`text-md justify-center flex gap-4 w-full items-center ${
        mobile && "flex-col h-full"
      }`}
    >
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/admin">Admin</Link>
      </li>
      <li className="py-2 text-center border-b-4 cursor-pointer">
        <Link href="/user">User</Link>
      </li>
      {currentUser ? (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          <button onClick={() => signOut()}>Signout</button>
        </li>
      ) : (
        <li className="py-2 text-center border-b-4 cursor-pointer">
          {/* /api/auth/signin 으로 이동 */}
          <button onClick={() => signIn()}>Signin</button>
        </li>
      )}
    </ul>
  );
};

export default NavItem;
