import React from "react";
import styles from "./ModalResponsive.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

function ModalResponsiveInfo({ children, show, setter, showHeader, padding }) {
  const closeModal = () => {
    setter(!show);
  };

  return (
    show && (
      <div className={styles.modal}>
        <div className={styles.modal__overlay} onClick={closeModal}></div>

        <div
          className={styles.modal__wrapper}
          style={{ padding: !padding && 0 }}
        >
          {showHeader && (
            <div className={styles.modal__header}>
              <button onClick={closeModal}>
                <img
                  src="/icons/remove.png"
                  className={styles["modal__close-img"]}
                  alt="بستن مودال"
                />
              </button>
            </div>
          )}
          <div className={styles.modal__body}>
            <div className="  text_Title page-top-header d-flex justify-content-start align-items-center">
              <span className="closeModalInfo" onClick={closeModal}>
                <AiFillCloseCircle size={"2rem"} />
              </span>

              <span
                style={{ fontSize: "1.2rem", fontWeight: "700" }}
                className="mr-2"
              >
                راهنما
              </span>
            </div>

            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default ModalResponsiveInfo;
