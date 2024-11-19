import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Navbar_Dark.module.css";

export const Navbar_Dark = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contactContainer}>
        <ul className={styles.contactList}>
          <li>
            <a href="#">
              <img src={getImageUrl("navbar-dark/call.svg")} alt="Call icon" />
              <span>(225) 555-0118</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={getImageUrl("navbar-dark/email.svg")}
                alt="Email icon"
              />
              <span>michelle.rivera@example.com</span>
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.promoText}>
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>

      <div className={styles.socialContainer}>
        <span className={styles.socialText}>
          <h6>Follow Us :</h6>
        </span>
        <ul className={styles.socialList}>
          <li>
            <a href="https://instagram.com" className={styles.socialLink}>
              <img
                src={getImageUrl("navbar-dark/instagram.svg")}
                alt="Instagram icon"
              />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" className={styles.socialLink}>
              <img
                src={getImageUrl("navbar-dark/youtube.svg")}
                alt="Youtube icon"
              />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" className={styles.socialLink}>
              <img
                src={getImageUrl("navbar-dark/facebook.svg")}
                alt="Facebook icon"
              />
            </a>
          </li>
          <li>
            <a href="https://x.com" className={styles.socialLink}>
              <img
                src={getImageUrl("navbar-dark/twitter.svg")}
                alt="Twitter icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
