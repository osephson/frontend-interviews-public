// components/Header.js

import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Product Listing</div>
      </Link>
    </header>
  );
};

export default Header;
