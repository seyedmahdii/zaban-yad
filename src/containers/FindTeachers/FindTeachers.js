import React, { useEffect, useState } from "react";
import FilterTeachers from "./FilterTeachers/FilterTeachers";
import styles from "./FindTeachers.module.css";
import TeachersContent from "./TeachersContent/TeachersContent";
import { useRouter } from "next/navigation";

const languageSchema = {
  id: "",
  persian_name: "",
  english_name: "",
  url: "",
  flag_image: "",
  flag_image_thumbnail: "",
  created_at: "",
  updated_at: "",
};

const specialitySchema = {
  id: "",
  language_id: "",
  persian_name: "",
  english_name: "",
  url: "",
};

const skillSchema = {
  id: "",
  speciality_id: "",
  persian_name: "",
  english_name: "",
  url: "",
};

const levelSchema = {
  id: "",
  persian_name: "",
  english_name: "",
  url: "",
};

function FindTeachers(props) {
  const {
    languages = [],
    levels = [],
    age_categorys = [],
    // teachersData: { data, ...restData },
    searchData = [],
    Description = [],
  } = props;

  const [formData, setFormData] = useState(searchData);
  const [appliedFilters, setAppliedFilters] = useState(searchData);
  const [specialitys, setSpecialitys] = useState([]);
  const [skills, setSkills] = useState([]);
  const [ages, setAges] = useState(age_categorys);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const search = async (page = 1, ignoreKey = []) => {
    // Scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setLoading(true);

    try {
      const res = await fetch(`http://127.0.0.1:8000/custom-users/teachers/`);
      let aa = await res.json();
      console.log();
      if (aa) {
        setTeachers(aa);
        // console.log(aa);
      }
    } catch (error) {
      console.log("Error searching", error);
    }
    setLoading(false);
  };

  const handelSubmitSearch = async (search) => {
    // Scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    setLoading(true);

    try {
      const res = await fetch(`http://127.0.0.1:8000/custom-users/teachers/`);
      let aa = await res.json();
      if (aa) {
        setTeachers(aa);
      }
    } catch (error) {
      console.log("Error searching", error);
    }
    setLoading(false);
  };

  const findItem = (data, id) => {
    return data?.find((item) => item?.id === Number(id));
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <main className={styles["main-content"]}>
      <div className="container" style={{ minHeight: "500px" }}>
        <div className="row">
          <FilterTeachers
            formData={formData}
            setFormData={setFormData}
            languages={languages}
            levels={levels}
            ages={ages}
            specialitys={specialitys}
            setSpecialitys={setSpecialitys}
            skills={skills}
            setSkills={setSkills}
            languageSchema={languageSchema}
            specialitySchema={specialitySchema}
            skillSchema={skillSchema}
            levelSchema={levelSchema}
            search={search}
            appliedFilters={appliedFilters}
            setAppliedFilters={setAppliedFilters}
            findItem={findItem}
            // filterRouteHandler={filterRouteHandler}
            handelSubmitSearch={handelSubmitSearch}
          />
          <TeachersContent
            languages={languages}
            specialitys={specialitys}
            skills={skills}
            ages={ages}
            levels={levels}
            // pagData={pagData}
            // setPagData={setPagData}
            formData={formData}
            setFormData={setFormData}
            teachers={teachers}
            loading={loading}
            setLoading={setLoading}
            search={search}
            appliedFilters={appliedFilters}
            setAppliedFilters={setAppliedFilters}
            languageSchema={languageSchema}
            specialitySchema={specialitySchema}
            skillSchema={skillSchema}
            levelSchema={levelSchema}
            findItem={findItem}
            Description={Description}
          />
        </div>
      </div>
    </main>
  );
}

export default FindTeachers;
