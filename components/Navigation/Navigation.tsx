"use client";
import { usePathname } from "next/navigation";
import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

interface NavigLink {
  label: string;
  href: string;
}

interface IProps {
  navlinks: NavigLink[];
}

const Navigation = ({ navlinks }: IProps) => {
  const pathname = usePathname();
  const session = useSession();

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
        <Link href="#">Sign out</Link>
      ) : (
        <Link href="/api/auth/signin">Sign in </Link>
      )}
    </>
  );
};

export { Navigation };
