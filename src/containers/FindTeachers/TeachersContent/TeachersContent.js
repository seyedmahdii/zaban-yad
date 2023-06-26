import React from "react";
import styles from "./TeachersContent.module.css";
import TeacherItem from "./TeacherItem/TeacherItem";
import TeacherItemLoading from "./TeacherItemLoading/TeacherItemLoading";
import TeacherNotFound from "./TeacherNotFound/TeacherNotFound";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

function TeachersContent(props) {
  const isFilterEnabled = (key) =>
    Number(appliedFilters[key]) !== 0 && appliedFilters[key] !== undefined;
  const {
    languages,
    specialitys,
    skills,
    ages,
    levels,
    teachers,
    formData,
    setFormData,
    loading,
    pagData,
    search,
    appliedFilters,
    setAppliedFilters,
    findItem,
    filterRouteHandler,
    Description,
  } = props;

  let showFiltersBox =
    isFilterEnabled("gender") ||
    isFilterEnabled("language") ||
    isFilterEnabled("speciality") ||
    isFilterEnabled("skill") ||
    isFilterEnabled("level") ||
    isFilterEnabled("price_from") ||
    isFilterEnabled("price_to") ||
    isFilterEnabled("age_category");

  return (
    <div className="col-xl-9 col-md-7">
      <div className={styles["content-container"]}>
        <div className={`${styles.content__title} hidden-xs block-md`}>
          <h1 className="teachers-h1">جست و جو و انتخاب استاد زبان آنلاین</h1>
        </div>

        {showFiltersBox && (
          <div className={`${styles.content__filters} box`}>
            <div className={styles["content__filters-top"]}>
              <span>فیلترهای اعمال شده</span>
              <a href="/find-teachers">حذف فیلترها</a>
            </div>
            <div className={styles["content__filters-bottom"]}>
              {isFilterEnabled("language") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {
                      findItem(languages, appliedFilters?.language)
                        ?.persian_name
                    }
                  </span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        language: 0,
                        speciality: 0,
                        skill: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        language: 0,
                        speciality: 0,
                        skill: 0,
                      });
                      filterRouteHandler(["language", "speciality", "skill"]);
                      search(1, ["language", "speciality", "skill"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("speciality") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {
                      findItem(specialitys, appliedFilters?.speciality)
                        ?.persian_name
                    }
                  </span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        speciality: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        speciality: 0,
                      });
                      filterRouteHandler(["speciality", "skill"]);
                      search(1, ["speciality", "skill"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("skill") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {findItem(skills, appliedFilters?.skill)?.persian_name}
                  </span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        skill: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        skill: 0,
                      });
                      filterRouteHandler(["skill"]);
                      search(1, ["skill"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("gender") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {Number(appliedFilters?.gender) === 1 ? "آقا" : "خانم"}
                  </span>
                  <span
                    onClick={() => {
                      setAppliedFilters({
                        ...appliedFilters,
                        gender: 0,
                      });
                      setFormData({
                        ...formData,
                        gender: 0,
                      });
                      filterRouteHandler(["gender"]);
                      search(1, ["gender"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("level") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {
                      levels?.find(
                        (level) => level?.id === Number(formData?.level)
                      )?.persian_name
                    }
                  </span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        level: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        level: 0,
                      });
                      search(1, ["level"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("age_category") && (
                <div className={styles["content__filter-item"]}>
                  <span>
                    {
                      ages?.find(
                        (age) => age?.id === Number(formData?.age_category)
                      )?.persian_name
                    }
                  </span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        age_category: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        age_category: 0,
                      });
                      search(1, ["age_category"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("price_from") && (
                <div className={styles["content__filter-item"]}>
                  <span>{formData?.price_from} تومان</span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        price_from: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        price_from: 0,
                      });
                      filterRouteHandler(["price_from"]);
                      search(1, ["price_from"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
              {isFilterEnabled("price_to") && (
                <div className={styles["content__filter-item"]}>
                  <span>{formData?.price_to} تومان</span>
                  <span
                    onClick={() => {
                      setFormData({
                        ...formData,
                        price_to: 0,
                      });
                      setAppliedFilters({
                        ...appliedFilters,
                        price_to: 0,
                      });
                      filterRouteHandler(["price_to"]);
                      search(1, ["price_to"]);
                    }}
                  >
                    <Icon path={mdiClose} size={1} />
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
        <div className={styles.teachers__list}>
          {loading ? (
            <>
              <TeacherItemLoading />
              <TeacherItemLoading />
              <TeacherItemLoading />
            </>
          ) : teachers?.length === 0 ? (
            <TeacherNotFound />
          ) : (
            teachers?.map((teacher) => (
              <TeacherItem teacher={teacher} key={teacher?.id} />
            ))
          )}
        </div>
        <div className={styles.content__breadcrubms}>
          <div className="breadcrumbs">
            <a
              href="/find-teachers"
              className={`breadcrumbs-link ${
                isFilterEnabled("language") && "breadcrumbs-link--active"
              }`}
            >
              teachers
            </a>
            {isFilterEnabled("language") && (
              <a
                href={`/find-teachers/${
                  findItem(languages, formData?.language)?.url
                }`}
                className={`breadcrumbs-link ${
                  isFilterEnabled("speciality")
                    ? "breadcrumbs-link--active"
                    : undefined
                }`}
              >
                {findItem(languages, formData?.language)?.english_name}
              </a>
            )}
            {isFilterEnabled("speciality") && (
              <a
                href={`/find-teachers/${
                  findItem(languages, formData?.language)?.url
                }/${findItem(specialitys, formData?.speciality)?.url}`}
                className={`breadcrumbs-link ${
                  isFilterEnabled("skill")
                    ? "breadcrumbs-link--active"
                    : undefined
                }`}
              >
                {findItem(specialitys, formData?.speciality)?.english_name}
              </a>
            )}
            {isFilterEnabled("skill") && (
              <a
                href={`/find-teachers/${
                  findItem(languages, formData?.language)?.url
                }/${findItem(specialitys, formData?.speciality)?.url}/${
                  findItem(skills, formData?.skill)?.url
                }`}
                className="breadcrumbs-link breadcrumbs-link--active"
              >
                {findItem(skills, formData?.skill)?.english_name}
              </a>
            )}
          </div>
        </div>
        {Description && Object.keys(Description).length > 0 && (
          <div
            className="text-scroll-find"
            dangerouslySetInnerHTML={createMarkup(Description?.second_desc)}
          />
        )}
        {/*<div className={styles.content__questions}>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}

export default TeachersContent;

function createMarkup(html) {
  return { __html: html };
}
