"use client";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

interface NavigLink {
  label: string;
  href: string;
}

interface IProps {
  navlinks: NavigLink[];
}

const handleLogout = () => {
  signOut({ callbackUrl: "/" });
};

const Navigation = ({ navlinks }: IProps) => {
  const pathname = usePathname();
  const session = useSession();
  console.log(session?.data);

  return (
    <>
      {navlinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? styles.active : styles.basic}
          >
            {link.label}
          </Link>
        );
      })}
      {session?.data && <Link href="/profile">Profile</Link>}
      {session?.data ? (
        <Link href="#" onClick={handleLogout}>
          Sign out
        </Link>
      ) : (
        <Link href="/signin">SignIn</Link>
      )}
    </>
  );
};

export { Navigation };
