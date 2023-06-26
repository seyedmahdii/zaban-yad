import React, { useState } from "react";
import styles from "./TeacherItem.module.css";
import Icon from "@mdi/react";
import { mdiAccountGroup } from "@mdi/js";
import { mdiMapMarker } from "@mdi/js";

function TeacherItem({ teacher }) {
  const [showModal, setShowModal] = useState(false);
  let name = teacher?.name + " - " + teacher?.username;
  let new_teacher = Number(teacher?.studentNumber) === 0;

  return (
    <div className={styles.teacher} key={teacher?.id}>
      <div className={styles.teacher__content}>
        <div className={styles.teacher__right}>
          <a target="_blank" href={`/teachers/${teacher?.id}`} rel="noreferrer">
            <img
              src={`https://avatars.githubusercontent.com/u/75500354?v=4`}
              // alt={`مشاهده پروفایل و رزرو کلاس خصوصی با استاد ${name} شیر برای زبان ${teacher?.language[0]?.persian_name} در آموزشگاه آنلاین تیکا`}
              alt={``}
            />
          </a>
          <button
            style={{ marginTop: "2px" }}
            className={`${styles["teacher__btn--purple"]} ${styles["teacher__btn"]}`}
            onClick={() => setShowModal(!showModal)}
          >
            ویدئو معرفی
          </button>
        </div>
        <div className={styles.teacher__left}>
          <div className={styles.teacher__info}>
            <div className="d-flex align-center f-wrap">
              <a
                target="_blank"
                href={`/teachers/${teacher?.id}`}
                rel="noreferrer"
                className={styles.teacher__name}
              >
                <h2>{name}</h2>
              </a>
              {/* <div className="d-flex align-center">
                {new_teacher ? (
                  <span className={styles.teacher__new}>مدرس جدید</span>
                ) : (
                  <></>
                )}
              </div> */}
            </div>
            <div className="d-flex align-center">
              {/* {teacher?.language?.map(
                (language, index) =>
                  index === 0 && (
                    <div className="d-flex" key={index}>
                      <img
                        src={`https://api.tikkaa.ir/credential/img/index/header/unitedKingdom.png`}
                        alt={`مدرس آنلاین زبان ${language?.persian_name} در پلتفرم یادگیری مجازی تیکا`}
                        className={styles.teacher__icon}
                      />
                      <span className={`gray ${styles["language"]}`}>
                        استاد زبان {language?.persian_name}
                      </span>
                    </div>
                  )
              )} */}
              {/* {teacher?.language?.length > 1 && (
                <span
                  className={[styles["tt-lang-count"], "flex-center"].join(" ")}
                  style={{ marginRight: "0.5em", direction: "ltr" }}
                >
                  <span>+</span>
                  <span>{teacher?.language.length - 1}</span>
                </span>
              )} */}
            </div>
            <div className="d-flex align-center">
              <Icon path={mdiAccountGroup} size={1} />

              {new_teacher ? (
                <span className="gray">تخفیف ویژه برای نفر اول</span>
              ) : (
                <span className="gray">
                  {12 + " "}
                  زبان آموز / {58} کلاس برگزار شده
                </span>
              )}
            </div>
            <div className="d-flex align-center hidden-xs flex-md">
              <Icon path={mdiMapMarker} size={0.7} />

              <span className="gray">
                ایران - {teacher?.province || "گیلان"}
              </span>
            </div>
            {/*<div className="d-flex align-center hidden-md">*/}
            {/*    <img*/}
            {/*        src="https://tikkaa.ir/img/teachers/money.png"*/}
            {/*        alt="هزینه اقتصادی و ارزان استاد زبان خارجی در تیکا"*/}
            {/*        className={`${styles.teacher__icon} ${styles["teacher__icon--price"]}`}*/}
            {/*    />*/}
            {/*    <span className="gray">*/}
            {/*        هزینه هر جلسه:*/}
            {/*        {*/}
            {/*            teacher?.cost[1] ? `${teacher?.cost[1]?.price / 1000}  هزار تومان` : "-"*/}
            {/*        }*/}

            {/*    </span>*/}
            {/*</div>*/}
          </div>
          <div className={styles.teacher__skills}>
            {/* {teacher.speciality?.map(
              (skill, index) =>
                (index === 0 || index === 1) && (
                  <a
                    href={`/find-teachers?skill=${skill.id}`}
                    className={`${styles["teacher__btn"]} ${styles["teacher__btn--green"]}  ${styles["dark-gray"]}`}
                  >
                    {skill?.persian_name}
                  </a>
                )
            )}
            {teacher?.speciality?.length > 2 && (
              <span
                className={[styles["tt-lang-count"], "flex-center"].join(" ")}
                style={{ direction: "ltr" }}
              >
                <span>+</span>
                <span> {teacher?.speciality?.length - 2}</span>
              </span>
            )} */}
          </div>
        </div>
      </div>
      <div className={styles.teacher__reserve}>
        <div className=" block-md">
          <div className={styles["teacher__meet-row"]}>
            <span className={styles["teacher__meet-title"]}>جلسه آزمایشی:</span>
            {teacher?.cost ? (
              <span
                className={`${styles["teacher__meet-price"]} ${
                  teacher?.cost[0] &&
                  teacher?.cost[0]?.price === 0 &&
                  styles["teacher__meet-price--free"]
                }`}
              >
                {teacher?.cost[0] && teacher?.cost[0]?.price === 0
                  ? "رایگان"
                  : 12000
                  ? `${70000 / 1000} هزار تومان`
                  : "-"}
              </span>
            ) : (
              `${70000 / 1000} هزار تومان`
            )}
          </div>
          <div className={styles["teacher__meet-row"]}>
            <span className={styles["teacher__meet-title"]}>
              هزینه هر جلسه:
            </span>
            {teacher?.cost ? (
              <span
                className={`${styles["teacher__meet-price"]} ${
                  teacher?.cost[0] &&
                  teacher?.cost[0]?.price === 0 &&
                  styles["teacher__meet-price--free"]
                }`}
              >
                {teacher?.cost[0] && teacher?.cost[0]?.price === 0
                  ? "رایگان"
                  : 12000
                  ? `${70000 / 1000} هزار تومان`
                  : "-"}
              </span>
            ) : (
              `${80000 / 1000} هزار تومان`
            )}
          </div>
        </div>
        <div className={styles["teacher__reserve-btn-wrapper"]}>
          <a
            target="_blank"
            href={`/teachers/${teacher?.id}`}
            className={"w-100"}
            rel="noreferrer"
          >
            {teacher?.cost && (
              <p className={styles["teacher__reserve-btn"]}>
                {teacher?.cost[0] && teacher?.cost[0].price === 0
                  ? "جلسه آزمایشی رایگان"
                  : "رزرو کلاس"}
              </p>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeacherItem;
