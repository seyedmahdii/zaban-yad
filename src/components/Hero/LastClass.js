import styles from "./LastClass.module.css";
import Link from "next/link";

const LastClass = () => {
  return (
    <div className={styles.lastclass_wrapper}>
      <span>
        {" "}
        آخرین کلاس برگزار شده توسط استاد
        <Link
          href={`/teachers/SeyedMahdiJalali`}
          className={styles.lastclass_link}
        >
          سیدمهدی جلالی&nbsp;
        </Link>
        مدرس زبان{" "}
        <Link
          href={`/find-teachers/SeyedMahdiJalali`}
          className={styles.lastclass_link}
        >
          کلاس انگلیسی
        </Link>
      </span>
    </div>
  );
};

export default LastClass;
