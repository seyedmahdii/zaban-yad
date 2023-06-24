import React from "react";
import styles from "./Modal.module.css";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

function Modal({ children, show, setter, showHeader, padding }) {
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
                <Icon path={mdiClose} size={1} />
              </button>
            </div>
          )}
          <div className={styles.modal__body}>{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
