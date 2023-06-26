import styles from "./TeacherNotFound.module.css";

function TeacherNotFound() {
  return (
    <div className={styles["teacher__not-found"]}>
      <span>مدرس مورد نظر شما یافت نشد</span>
    </div>
  );
}

export default TeacherNotFound;
