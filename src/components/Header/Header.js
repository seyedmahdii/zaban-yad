"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";
import FixedButton from "./FixedButton/FixedButton";
import { FaUserAlt } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { useRouter, usePathname } from "next/navigation";
import { Collapse } from "react-collapse";
import { getCookie as cookie } from "cookies-next";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [LinkGoProfile, setLinkGoProfile] = useState("/");
  const [dropdownState, setDropdownState] = useState(false);
  const header = useRef(null);
  const toggleBtn = useRef(null);
  const navCollapse = useRef(null);
  const dropdown = useRef(null);
  const [languages, setLanguages] = useState([]);
  const router = useRouter();
  const pathname = usePathname();
  console.log("pathname", pathname);

  useEffect(() => {
    // Fixed Header
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > 50) {
        header.current?.classList?.add(styles["header--fixed"]);
      } else {
        header.current?.classList?.remove(styles["header--fixed"]);
      }
    });
    let linkISGO = handelGoLogin();
    console.log(linkISGO);
    setLinkGoProfile(linkISGO);
    fetchLanguages();

    // getCookies();
    console.log(cookie("userinfo"));
  }, []);

  const fetchLanguages = async () => {
    try {
      const res = await fetch("https://api.barmansms.ir/api/data/language", {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const { data } = await res.json();
      setLanguages(data);
    } catch (error) {
      console.log("error fetching languages", error);
    }
  };

  // const getCookies = () => {
  //   console.log(getCookie("userinfo"));
  // };

  // Nav Toggle
  const handleNavToggle = () => {
    navCollapse.current.classList?.toggle(styles["nav__collapse--show"]);
  };

  // Nav Dropdown menu -- Languages
  const handleDropdown = () => {
    dropdown.current.classList?.toggle(styles["nav__dropdown--show"]);
  };
  const handelGoLogin = () => {
    if (cookie("student_token")) {
      return "/student/dashboard";
    } else if (cookie("tutor_token")) {
      return "/tutor/dashboard";
    } else {
      return "/login";
    }
  };

  return (
    <header className={styles.header} ref={header}>
      <div className="container">
        {router.pathname !== "/payment" ? (
          <nav className={styles.nav}>
            <div className={styles["nav__small-row"]}>
              {/* Logo is visible both on lg and sm screens */}
              <a href="/">
                <img
                  src="/images/tikkaLogo.png"
                  alt="یادگیری آنلاین زبان در خانه با پلتفرم برگزاری کلاس آنلاین  با هزینه کلاس زبان مناسب با تیکا"
                  className={styles.nav__img}
                  width={132}
                  height={52}
                />
              </a>
              {/* Hidden in lg screens */}
              <a
                href="/find-teachers"
                className={`${styles["nav__link-btn"]} gradient gradient--hoverable hidden-lg`}
              >
                لیست اساتید
              </a>
              {/* Hidden in lg screens */}
              <button
                className={`
                                ${styles["nav__toggle"]} hidden-lg
                            `}
                onClick={handleNavToggle}
                ref={toggleBtn}
              >
                <VscThreeBars className={`${styles["toggle-icon"]}`} />
              </button>
            </div>

            {/* nav__collapse is visible both on lg and sm screens */}
            <div className={styles.nav__collapse} ref={navCollapse}>
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <a href="/courses" className={styles.nav__link}>
                    لیست دوره ها
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <a href="/tutors/login" className={styles.nav__link}>
                    جذب استاد
                  </a>
                </li>
                <li className={styles.nav__item}>
                  <button
                    className={`${styles.nav__link} ${styles["dropdown-btn"]}`}
                    onClick={() => setDropdownState(!dropdownState)}
                  >
                    زبان ها
                    <div>
                      <IoIosArrowDown className={styles["arrowIcon"]} />
                    </div>
                  </button>
                  <Collapse isOpened={dropdownState}>
                    <div className="position-relative">
                      <div className={styles.nav__dropdown}>
                        <div className="row">
                          {languages?.map((lan) => (
                            <div className="col-xs-6" key={lan?.id}>
                              <a
                                href={`/find-teachers/${lan?.english_name}`}
                                className={styles["nav__dropdown-item"]}
                              >
                                <div
                                  className={`${styles["nav__dropdown-item-flag"]} ${styles["nav__dropdown-item-flag--uk"]}`}
                                >
                                  <img
                                    src={`${lan?.flag_image}`}
                                    alt={`${lan?.english_name} flag`}
                                  />
                                </div>
                                <span>
                                  زبان&nbsp;
                                  {lan?.persian_name}
                                </span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </li>
              </ul>
              <div className={styles["nav__link-btns"]}>
                <div>
                  <a
                    href="/find-teachers"
                    className={`${styles["nav__link-btn"]} gradient gradient--hoverable hidden-xs block-lg`}
                  >
                    لیست اساتید
                  </a>
                </div>
                <div className={styles["navBtnLogin"]}>
                  {pathname.includes("tutor/step") ? (
                    <a
                      href={"/exit"}
                      onClick={() => {
                        console.log("thi is exit");
                      }}
                      className={`${styles["nav__link-btn"]} ${styles["nav__link-btn--bordered"]}`}
                    >
                      <div>
                        <FaUserAlt className={styles["userIcon"]} />
                        خروج
                      </div>
                    </a>
                  ) : (
                    <a
                      href={LinkGoProfile}
                      className={`${styles["nav__link-btn"]} ${styles["nav__link-btn--bordered"]}`}
                    >
                      <div>
                        <FaUserAlt className={styles["userIcon"]} />
                        {/* {userInfo.name ? userInfo.name : userInfo.name_family} */}
                        mahdi
                      </div>
                    </a>
                  )}
                </div>
                <div>
                  <button
                    className={`${styles["nav__link-btn"]} ${styles["nav__link-btn--bordered"]} ${styles["nav__link-modal"]} ${styles["navLinkphone"]}`}
                    onClick={() => setShowModal(!showModal)}
                  >
                    <div>
                      <CgPhone className={styles["phoneIcon"]} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <div className={styles["nav__small-row"]}>
              {/* Logo is visible both on lg and sm screens */}
              <a href="/">
                <img
                  src="https://tikkaa.ir/img/index/header/tikkaLogo.png"
                  alt="یادگیری آنلاین زبان در خانه با پلتفرم برگزاری کلاس آنلاین  با هزینه کلاس زبان مناسب با تیکا"
                  className={styles.nav__img}
                  width={132}
                  height={52}
                />
              </a>
            </div>
          </nav>
        )}
      </div>
      <FixedButton />
    </header>
  );
}

export default Header;
