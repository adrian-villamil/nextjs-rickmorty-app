'use client';

import Link from 'next/link';
import styles from './header.module.css';
import { usePathname } from 'next/navigation';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

const navLinks = [
  { id: 1, pathname: '/', title: 'Home' },
  { id: 2, pathname: '/characters', title: 'Characters' },
  { id: 3, pathname: '/locations', title: 'Locations' },
  { id: 4, pathname: '/episodes', title: 'Episodes' },
];

export default function Header() {
  const pathname = usePathname();
  const [isResponsive, setIsResponsive] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsResponsive(prevState => !prevState);
  };

  const handleLinkClick = () => {
    if (isResponsive) {
      setIsResponsive(false);
    }
  }

  return (
    <header className={styles.header}>
      <Link
        href={'/'}
        className={styles.link}
      >
        LOGO
      </Link>
      <nav
        className={isResponsive ? `${styles.navbar} ${styles.responsive}` : `${styles.navbar}`}
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
        <FaBars />
      </button>
    </header>
  );
}