import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";
import covers from "../../data/covers.json";
import thumbnails from "../../data/thumbnails.json";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === covers.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? covers.length - 1 : prev - 1));
  };

  const currentItem = covers[currentIndex];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.breadcrumb}>
          <a href="/home" className={styles.breadcrumbHome}>
            Home
          </a>
          <span className={styles.breadcrumbIconWrapper}>
            <img
              className={styles.breadcrumbIcon}
              src={getImageUrl("hero/breadcrumb.svg")}
              alt="Breadcrumb icon"
            />
          </span>
          <span className={styles.breadcrumbCurrent}>Shop</span>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
              <img
                src={getImageUrl(currentItem.imageSrc)}
                alt={currentItem.product}
                className={styles.sliderImage}
              />

              <button className={styles.sliderPrevBtn} onClick={prevSlide}>
                <img
                  src={getImageUrl("hero/chevronLeft.svg")}
                  alt="Chevron left icon"
                />
              </button>
              <button className={styles.sliderNextBtn} onClick={nextSlide}>
                <img
                  src={getImageUrl("hero/chevronRight.svg")}
                  alt="Chevron right icon"
                />
              </button>
            </div>
          </div>

          <div className={styles.productInfo}>
            <h1 className={styles.productTitle}>{currentItem.product}</h1>

            <div className={styles.productRating}>
              <div className={styles.ratingStars}>
                {[...Array(parseInt(currentItem.star))].map((_, i) => (
                  <span key={i} className={styles.star}>
                    <img src={getImageUrl("hero/star.svg")} alt="Star image" />
                  </span>
                ))}
              </div>
              <span className={styles.reviewCount}>{currentItem.reviews}</span>
            </div>

            <div className={styles.productPrice}>${currentItem.price}</div>
            <div className={styles.currentAvailability}>
              <p>Availability :</p>
              <div className={styles.productAvailability}>
                {currentItem.avaibility}
              </div>
            </div>
            <p className={styles.productDescription}>
              {currentItem.description}
            </p>
            <hr />
            <div className={styles.color}>
              <div className={styles.colorBlue}></div>
              <div className={styles.colorGreen}></div>
              <div className={styles.colorBrown}></div>
              <div className={styles.colorBlack}></div>
            </div>
            <div className={styles.interaction}>
              <button className={styles.options}>Select Options</button>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("hero/love.svg")} alt="Love icon" />
              </div>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("hero/cart.svg")} alt="Cart icon" />
              </div>
              <div className={styles.iconContainer}>
                <img src={getImageUrl("hero/eye.svg")} alt="Eye icon" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.thumbnailsContainer}>
          {thumbnails.map((thumbnail, idx) => (
            <div
              key={idx}
              className={`${styles.thumbnailWrapper} ${
                currentIndex === idx ? styles.thumbnailActive : ""
              }`}
              onClick={() => setCurrentIndex(idx)}
            >
              <img
                src={getImageUrl(thumbnail.imageSrc)}
                alt={`Thumbnail ${idx + 1}`}
                className={styles.thumbnailImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
