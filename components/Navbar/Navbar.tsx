import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.sass';

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <menu>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}

export default Navbar;
