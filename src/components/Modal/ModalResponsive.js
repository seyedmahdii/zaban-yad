import React from "react";
import styles from "./ModalResponsive.module.css";

function ModalResponsive({ children, show, setter, showHeader, padding }) {
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
          <div className={styles.modal__body}>{children}</div>
        </div>
      </div>
    )
  );
}

export default ModalResponsive;
