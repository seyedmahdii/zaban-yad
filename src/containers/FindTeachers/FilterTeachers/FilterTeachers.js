import React, { useEffect, useRef, useState } from "react";
import styles from "./FilterTeachers.module.css";
// import Modal from "../../Modal/Modal";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function FilterTeachers(props) {
  const filterContainer = useRef(null);
  const [openFilters, setOpenFilters] = useState(false);
  const [searchValue, SetsearchValue] = useState("");
  const {
    formData,
    setFormData,
    languages,
    levels,
    ages,
    // fetchSkills,
    skills,
    setSkills,
    specialitys,
    setSpecialitys,
    search,
    setAppliedFilters,
    // filterRouteHandler,
    handelSubmitSearch,
  } = props;

  const handleOnChange = (e) => {
    const type = e.target.type;
    const name = e.target.name;
    const value = type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((oldFormData) => {
      return { ...oldFormData, [name]: value };
    });
  };

  const submitBtnHandler = async () => {
    let temp = {};
    Object.keys(formData).forEach((key) => {
      temp = { ...temp, [key]: formData[key] };
    });
    setAppliedFilters(() => temp);

    // filterRouteHandler();

    await search();
  };

  useEffect(() => {
    if (Number(formData.language) !== 0) {
      // fetchSpecialitys(formData.language);
    } else {
      setFormData({ ...formData, speciality: 0, skill: 0 });
      setSpecialitys([]);
    }
    setSkills([]);
  }, [formData.language]);

  useEffect(() => {
    if (Number(formData.speciality) !== 0) {
      // fetchSkills(formData.speciality);
    } else {
      setFormData({ ...formData, skill: 0 });
    }
    setSkills([]);
  }, [formData.speciality]);

  // Fixed Filter Container
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      let bodyHeight = window.document.body?.offsetHeight;
      if (scrollHeight < bodyHeight - 1100) {
        filterContainer?.current?.classList.add(
          styles["filter-container--fixed"]
        );
      } else {
        filterContainer?.current?.classList.remove(
          styles["filter-container--fixed"]
        );
      }
    });
  }, []);

  return (
    <aside className="col-xl-3 col-md-5">
      <div
        className={`${styles["filter-container"]} ${styles["filter-container--fixed"]}`}
        ref={filterContainer}
      >
        <div className={`box ${styles.filter__search}`}>
          <input
            type="text"
            className={styles["filter__search-input"]}
            placeholder="دنبال چی می گردی؟"
            name="q"
            value={searchValue || ""}
            onChange={(e) => SetsearchValue(e.target.value)}
          />
          <Icon path={mdiMagnify} size={1} />
        </div>
        <form>
          <div className="box hidden-xs block-md">
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>زبان مورد نظر</span>
              <select
                name="language"
                id="language"
                onChange={handleOnChange}
                value={formData.language || ""}
              >
                <option value={0}>انتخاب کنید</option>
                {languages?.map((lan) => (
                  <option value={lan?.id} key={generateKey(lan?.english_name)}>
                    {lan?.persian_name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>تخصص مورد نظر</span>
              <select
                name="speciality"
                id="speciality"
                onChange={handleOnChange}
                value={formData.speciality}
              >
                <option value={0}>انتخاب کنید</option>
                {specialitys?.map((spec) => (
                  <option
                    value={spec?.id}
                    key={generateKey(spec?.english_name)}
                  >
                    {spec?.persian_name}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>مهارت مورد نظر</span>
              <select
                name="skill"
                id="skill"
                onChange={handleOnChange}
                value={formData.skill}
              >
                <option value={0}>انتخاب کنید</option>
                {skills?.map((sk) => (
                  <option value={sk?.id} key={generateKey(sk?.english_name)}>
                    {sk?.persian_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="box hidden-xs block-md">
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>جنسیت</span>
              <div className="radio-wrapper">
                <div className="radio-item">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value={2}
                    checked={Number(formData.gender) === 2 ? true : false}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="female">خانم</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value={1}
                    checked={Number(formData.gender) === 1 ? true : false}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="male">آقا</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    name="gender"
                    id="both"
                    value={0}
                    checked={Number(formData.gender) === 0 ? true : false}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="both">هردو</label>
                </div>
              </div>
            </div>
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>سطح</span>
              <select
                name="level"
                id="level"
                value={formData.level}
                onChange={handleOnChange}
                className={styles["filter__select"]}
              >
                <option value={0}>انتخاب کنید</option>
                {levels?.map((level) => {
                  return (
                    <option
                      value={level?.id}
                      key={generateKey(level?.english_name)}
                    >
                      {level?.persian_name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>رده سنی</span>
              <select
                name="age_category"
                id="age_category"
                value={formData.age_category}
                onChange={handleOnChange}
              >
                <option value={0}>انتخاب کنید</option>
                {ages?.map((age) => {
                  return (
                    <option
                      value={age?.id}
                      key={generateKey(age?.english_name)}
                    >
                      {age?.persian_name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="box hidden-xs block-md">
            <div className={styles.filter__item}>
              <span className={styles.filter__title}>قیمت درخواستی</span>
              <div>
                <div>
                  <span>از </span>
                  <select
                    id="price_from"
                    name="price_from"
                    value={formData.price_from || ""}
                    onChange={handleOnChange}
                    className={styles.mb}
                  >
                    <option value="0">مهم نیست</option>
                    <option value="10000">10,000 تومان</option>
                    <option value="20000">20,000 تومان</option>
                    <option value="30000">30,000 تومان</option>
                    <option value="40000">40,000 تومان</option>
                    <option value="50000">50,000 تومان</option>
                  </select>
                </div>
                <div>
                  <span>تا </span>
                  <select
                    id="price_to"
                    name="price_to"
                    value={formData.price_to || ""}
                    onChange={handleOnChange}
                  >
                    <option value="0">مهم نیست</option>
                    <option value="60000">60,000 تومان</option>
                    <option value="70000">70,000 تومان</option>
                    <option value="80000">80,000 تومان</option>
                    <option value="90000">90,000 تومان</option>
                    <option value="100000">100,000 تومان</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["filter__btn-wrapper"]}>
            <button
              type="button"
              className={styles.filter__btn}
              onClick={submitBtnHandler}
            >
              اعمال فیلتر
            </button>
          </div>
        </form>
        {/* <div className="box hidden-xs block-md">
                    <h3 className={styles.filter__title}>مرتب سازی بر اساس:</h3>
                    <button
                        className={`${styles["filter__sort-btn"]} ${styles["filter__sort-btn--active"]}`}
                    >
                        پیشنهادی
                    </button>
                    <button className={styles["filter__sort-btn"]}>
                        محبوب ترین
                    </button>
                    <button className={styles["filter__sort-btn"]}>
                        پربازدید ترین
                    </button>
                    <button className={styles["filter__sort-btn"]}>
                        بیشترین کلاس
                    </button>
                    <button className={styles["filter__sort-btn"]}>
                        جدیدترین
                    </button>
                </div> */}
        <div className="box hidden-xs block-md">
          <div className={styles.filter__item}>
            <span className={styles.filter__title}>جلسه آزمایشی رایگان</span>
            <label className="switch">
              <input
                type="checkbox"
                name="free"
                onChange={handleOnChange}
                value={formData.free}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </div>
        <div className={styles.filter__mobile}>
          <div className={styles["filter__mobile-teacherscount"]}>
            <span>364</span>&nbsp;
            <span>مدرس</span>
          </div>
          <button
            className={styles["filter__mobile-filter"]}
            onClick={() => setOpenFilters(true)}
          >
            <img src="/icons/sort.png" alt="فیلتر اساتید" />
            <span>فیلتر</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

export default FilterTeachers;
