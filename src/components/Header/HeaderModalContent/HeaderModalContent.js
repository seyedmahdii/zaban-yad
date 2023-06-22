import React from "react";
import styles from "./HeaderModalContent.module.css";

function HeaderModalContent() {
  return (
    <>
      <p>تیم پشتیبانی تیکا، پاسخگوی سوالات شماست</p>
      <div className="row">
        <div className={`col-md-6 col-xs-12 ${styles["nav__modal-side"]}`}>
          <a href="tel:02191016620" className={styles["nav__modal-support"]}>
            <div
              className={`${styles["nav__modal-icon"]} ${styles["nav__modal-phone"]}`}
            ></div>
            <div className={styles["nav__modal-text"]}>
              <b> تماس تلفنی </b>
              <span> 021-91016620 </span>
            </div>
          </a>
        </div>
        <div className={`col-md-6 col-xs-12 ${styles["nav__modal-side"]}`}>
          <a
            target="_blank"
            href="/chat"
            className={styles["nav__modal-support"]}
          >
            <div
              className={`${styles["nav__modal-icon"]} ${styles["nav__modal-chat"]}`}
            ></div>
            <div className={styles["nav__modal-text"]}>
              <b>درخواست مشاوره</b>
              <span>گفت و گو با پشتیبانی</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderModalContent;
