'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { creepster } from '@/app/fonts';

const navLinks = [
  { id: 1, pathname: '/', title: 'Home' },
  { id: 2, pathname: '/characters', title: 'Characters' },
  { id: 3, pathname: '/locations', title: 'Locations' },
  { id: 4, pathname: '/episodes', title: 'Episodes' },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpenMobileNav, setOpenMobileNav] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpenMobileNav(prevState => !prevState);
  };

  const handleLinkClick = () => {
    if (isOpenMobileNav) {
      setOpenMobileNav(false);
    }
  }

  return (
    <header className={styles.header}>
      <Link
        href={'/'}
        className={`${styles.logo} ${creepster.className}`}
      >
        Rick And Morty
      </Link>
      <nav
        className={isOpenMobileNav ? `${styles.navbar} ${styles.mobile}` : `${styles.navbar}`}
      >
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.pathname}
            className={`
              ${styles.link} 
              ${navLink.pathname === pathname ? styles.active : ''}
            `}
            onClick={handleLinkClick}
          >
            {navLink.title}
          </Link>
        ))}
      </nav>
      <button
        className={styles.button}
        onClick={handleButtonClick}
      >
        {isOpenMobileNav ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
    </header>
  );
}