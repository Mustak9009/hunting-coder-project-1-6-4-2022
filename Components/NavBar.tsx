import React from 'react'
import Link from 'next/link';
import styles from "../styles/Home.module.scss";
const NavBar = () => {
  return (
    <nav className={styles.MainNav}>
    <ul>
      <Link href="/">
        <li>Home</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/blog">
        <li>Blogs</li>
      </Link>
      <Link href="/contact">
        <li>Contact US</li>
      </Link>
    </ul>
  </nav>
  )
}

export default NavBar;