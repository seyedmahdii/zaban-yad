import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from "./Hero.module.css";
import Search from "./Search/Search";
import LastClass from "./LastClass";

function Hero({ languages }) {
  const [value, setValue] = useState("");
  const router = useRouter();
  const formRef = useRef(null);

  function send() {
    languages?.map((lan) =>
      value === lan?.english_name
        ? router.push(`/find-teachers/${lan?.english_name}`)
        : console.log("no page found")
    );
  }

  return (
    <div className={styles.hero}>
      <div className={styles.hero__layover}>
        <div className="container">
          <div className={styles.hero__box}>
            <div className="row">
              <div className="col-xs-12">
                <h1 className={styles.hero__title}>
                  آموزش آنلاین زبان با اساتید حرفه ای
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h2 className={styles.hero__subtitle}>
                  سایت جست و جو و انتخاب استاد زبان در زمان دلخواه و با قیمت
                  مناسب
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-2 col-md-3"></div>
              <div className="col-xs-8 col-md-6">
                <form action="" className={styles.hero__form} ref={formRef}>
                  <div className={styles["hero__input-wrapper"]}>
                    <Search
                      languages={languages}
                      onChange={(value) => setValue(value)}
                    />
                  </div>
                  <button
                    className={styles.hero__button}
                    type="button"
                    onClick={send}
                  >
                    <img
                      src={`https://tikkaa.ir/img/index/header/search.png`}
                      alt={``}
                      className={styles["hero__button-text"]}
                    />
                  </button>
                </form>
              </div>
              <LastClass />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
