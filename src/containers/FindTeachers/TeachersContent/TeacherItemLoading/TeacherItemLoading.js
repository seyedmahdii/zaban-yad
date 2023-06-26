import React from "react";
import styles from "./TeacherItemLoading.module.css";

function TeacherItemLoading() {
    return (
        <div className={styles.teacher__loading}>
            <div
                className={`${styles["teacher__loading-right"]} ${styles["animated-background"]}`}
            ></div>
            <div className={styles["teacher__loading-left"]}>
                <div
                    className={`${styles["teacher__loading-row"]} ${styles["animated-background"]}`}
                ></div>
                <div
                    className={`${styles["teacher__loading-row--rest"]} ${styles["animated-background"]}`}
                ></div>
            </div>
        </div>
    );
}

export default TeacherItemLoading;
