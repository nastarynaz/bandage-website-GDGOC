import React, { useState } from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Navbar_Light.module.css";

export const Navbar_Light = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoMenuWrapper}>
          <a href="/" className={styles.title}>
            <h3>Bandage</h3>
          </a>
          <button className={styles.menuBtn}>
            <img
              src={
                menuOpen
                  ? getImageUrl("navbar-light/closeIcon.svg")
                  : getImageUrl("navbar-light/menuIcon.svg")
              }
              alt="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </button>
        </div>

        <div className={styles.menu}>
          <div className={styles.mainMenu}>
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
            >
              <li>
                <a href="#Home" className={styles.menuLink}>
                  Home
                </a>
              </li>
              <li>
                <a href="#shop" className={styles.menuLink}>
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className={styles.menuLink}>
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className={styles.menuLink}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className={styles.menuLink}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#pages" className={styles.menuLink}>
                  Pages
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.userMenu}>
            <ul
              className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick={() => setMenuOpen(false)}
            >
              <li>
                <a href="#login" className={styles.loginLink}>
                  <img
                    src={getImageUrl("navbar-light/login.svg")}
                    alt="Login icon"
                    className={styles.icon}
                  />
                  <span>Login / Register</span>
                </a>
              </li>
              <li>
                <a href="#search" className={styles.iconLink}>
                  <img
                    src={getImageUrl("navbar-light/search.svg")}
                    alt="Search icon"
                    className={styles.icon}
                  />
                </a>
              </li>
              <li>
                <a href="#cart" className={styles.iconLink}>
                  <img
                    src={getImageUrl("navbar-light/cart.svg")}
                    alt="Cart icon"
                    className={styles.icon}
                  />
                  <span className={styles.badge}>1</span>
                </a>
              </li>
              <li>
                <a href="#love" className={styles.iconLink}>
                  <img
                    src={getImageUrl("navbar-light/love.svg")}
                    alt="Love icon"
                    className={styles.icon}
                  />
                  <span className={styles.badge}>1</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
