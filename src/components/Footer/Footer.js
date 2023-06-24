import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <p className={styles.footer__desc}>
                زبان یاد یک سامانه جستجو و انتخاب استاد زبان به همراه دروس و
                دوره های آموزشی فشرده و غیر فشرده مختلف برای یادگیری زبان آموزان
                است.
                <br />
                با استفاده از پلتفرم آموزش آنلاین زبان زبان یاد می توانید با
                اساتید مختلف آموزش زبان ارتباط می گیرید و روند پیشرفت خود را در
                هر مرحله از یادگیری زبان خواهید دید.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <h4 className={styles["footer__item-title"]}>سایت</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="/certificate" className={styles.footer__link}>
                    درخواست مدرک
                  </a>
                </li>

                <li>
                  <Link href="/faq" passHref className={styles.footer__link}>
                    سوالات متداول
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-supporters"
                    passHref
                    className={styles.footer__link}
                  >
                    حامیان
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref className={styles.footer__link}>
                    وبلاگ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-team"
                    passHref
                    className={styles.footer__link}
                  >
                    تیم ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <h4 className={styles["footer__item-title"]}>بیشتر</h4>
              <ul className={styles.footer__list}>
                <li>
                  <Link
                    href="/other-pages/organization"
                    className={styles.footer__link}
                  >
                    پکیج سازمانی آموزش زبان
                  </Link>
                </li>

                <li>
                  <Link
                    href="/other-pages/invite-friends"
                    passHref
                    className={styles.footer__link}
                  >
                    دعوت از دوستان
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    passHref
                    className={styles.footer__link}
                  >
                    تماس با ما
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.footer__reserve}>
              <a
                href="/find-teachers"
                className="primary-btn gradient gradient--hoverable"
              >
                رزرو کلاس
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.subfooter}>
              تمامی حقوق سایت متعلق به&nbsp;
              <a href="/" className={styles.footer__link}>
                زبان یاد
              </a>
              ؛ پلتفرم جست و جو و انتخاب استاد آنلاین زبان و معلم خصوصی می باشد.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
