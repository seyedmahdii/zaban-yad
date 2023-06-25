import { useState } from "react";
import styles from "./TutorLogin.module.css";
import Alert from "@/components/Alert/Alert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@mdi/react";
import { mdiArrowDown, mdiEmail, mdiLock, mdiAccountTie } from "@mdi/js";

function TeacherLogin() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("login");
  const [alertData, setAlertData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const router = useRouter();

  const getCode = async (mobile) => {
    let body = { mobile: mobile };
    try {
      const res = await fetch(
        "https://api.barmansms.ir/api/teacher/register/mobile",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log("Error getting the code ", error);
    }
  };

  const checkCode = async (mobile, code) => {
    setLoading(true);
    let body = { mobile, code };
    try {
      const res = await fetch(
        "https://api.barmansms.ir/api/teacher/register/mobile/check",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const { data } = await res.json();
      setLoading(false);
      if (data?.length !== 0) {
        let step = data?.step;
        setCookie("tutor_token", data?.token, 730);
        setCookie("tutor_step", step, 730);
        let message = "لاگین با موفقیت انجام شد";
        showAlert(true, "success", message);
        if (Number(step) === 8) {
          router.replace(`/tutor/dashboard`);
        } else {
          router.replace(`/tutor/step${Number(step) + 1}`);
        }
      } else {
        let message = "کد ارسالی اشتباه است";
        showAlert(true, "danger", message);
      }
    } catch (error) {
      console.log("Error checking the code ", error);
    }
  };

  const handlePhone = () => {
    if (mobile?.length === 11) {
      getCode(mobile);
      setStep(2);
      let message = "رمز یکبار مصرف از طریق پیامک برای شما ارسال شد.";
      showAlert(true, "success", message);
    } else if (mobile.trim()?.length === 0) {
      let message = "شماره تماس باید وارد شود";
      showAlert(true, "danger", message);
    } else {
      let message = "فرمت شماره درست نیست";
      showAlert(true, "danger", message);
    }
  };

  const handleCode = () => {
    // Entering the code
    if (code?.length === 5) {
      checkCode(mobile, code);
    } else {
      let message = "طول کد تایید 5 کاراکتر است";
      showAlert(true, "danger", message);
    }
  };

  const showAlert = (show, type, message) => {
    setAlertData({ show, type, message });
  };

  return (
    <div>
      <section className={styles.login}>
        <div className="container">
          <h1 className={styles.login__title}>ورود / ثبت نام استاد زبان</h1>
          <h3 className={styles.login__subtitle}>
            جهت ثبت نام و یا ورود بعنوان مدرس در سامانه آموزش آنلاین زبان ،شماره
            تلفن همراه خود را وارد کرده تا کد تایید برای شما ارسال شود.
          </h3>
          <div className={styles["login__arrow-wrapper"]}>
            {/* <Icon path={mdiArrowDown} size={2} /> */}
          </div>
          <div className={styles.login__content}>
            {status === "register" && (
              <div className={styles.modal__input}>
                <input
                  type="text"
                  placeholder="نام کامل"
                  className={styles.phone__input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Icon path={mdiAccountTie} size={1} />
              </div>
            )}
            <div className={styles.modal__input}>
              <input
                type="text"
                autoFocus
                placeholder="نام کاربری"
                className={styles.phone__input}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Icon path={mdiEmail} size={1} />
            </div>
            <div className={styles.modal__input}>
              <input
                type="password"
                placeholder="کلمه عبور"
                className={styles.phone__input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Icon path={mdiLock} size={1} />
            </div>
            <button
              type="button"
              className={`${styles["login__btn"]} ${styles["login__btn--phone"]}`}
              onClick={handlePhone}
            >
              ورود
            </button>

            <button
              type="button"
              style={{ marginTop: 16, color: "gray", cursor: "pointer" }}
              onClick={() =>
                setStatus(status === "login" ? "register" : "login")
              }
            >
              {status === "login"
                ? "اکانت ندارید؟ ثبت نام کنید"
                : "عضو هستید؟ وارد شوید"}
            </button>

            {/* Alert */}
            <Alert
              {...alertData}
              removeAlert={showAlert}
              envoker={handlePhone || handleCode}
            />
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <div className="container">
          <h3 className={styles.login__subtitle}>
            شما می توانید با استفاده از امکانات سامانه آموزشی زبان‌یاد شاگرد و
            درآمد بیشتری داشته باشید
          </h3>
          <div className="row">
            <div
              className={`col-xs-12 col-md-6 col-lg-3 ${styles["work__item-wrapper"]}`}
            >
              <div className={styles.work__item}>
                <span
                  className={`${styles["work__item-icon"]} ${styles["work__item-icon-1"]}`}
                ></span>
                <span className={styles["work__item-title"]}>
                  زبان آموز بیشتری داشته باشید
                </span>
              </div>
            </div>
            <div
              className={`col-xs-12 col-md-6 col-lg-3 ${styles["work__item-wrapper"]}`}
            >
              <div className={styles.work__item}>
                <span
                  className={`${styles["work__item-icon"]} ${styles["work__item-icon-2"]}`}
                ></span>
                <span className={styles["work__item-title"]}>
                  درآمد بیشتری کسب کنید
                </span>
              </div>
            </div>
            <div
              className={`col-xs-12 col-md-6 col-lg-3 ${styles["work__item-wrapper"]}`}
            >
              <div className={styles.work__item}>
                <span
                  className={`${styles["work__item-icon"]} ${styles["work__item-icon-3"]}`}
                ></span>
                <span className={styles["work__item-title"]}>
                  کلاس خود را آنلاین برگزار کنید
                </span>
              </div>
            </div>
            <div
              className={`col-xs-12 col-md-6 col-lg-3 ${styles["work__item-wrapper"]}`}
            >
              <div className={styles.work__item}>
                <span
                  className={`${styles["work__item-icon"]} ${styles["work__item-icon-4"]}`}
                ></span>
                <span className={styles["work__item-title"]}>
                  در ساعت دلخواهتان تدریس کنید
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.money}>
        <div className="container">
          <h2>چقدر می توانید درآمد کسب کنید؟</h2>
          <div className={styles["money__income-wrapper"]}>
            <div className={styles["money__income-calculate"]}>
              <div className={styles["money__income-item"]}>
                <label htmlFor="class-number">تعداد کلاس در هفته</label>
                <input
                  type="number"
                  id="class-number"
                  className={styles["money__income-input"]}
                  placeholder="وارد کنید"
                />
              </div>
              <div className={styles["money__income-item"]}>
                <label htmlFor="class-price">هزینه هر کلاس(تومان)</label>
                <input
                  type="number"
                  id="class-price"
                  className={styles["money__income-input"]}
                  placeholder="وارد کنید"
                />
              </div>
              <div className={styles["money__income-item"]}>
                <label htmlFor="class-time">مدت زمان کلاس</label>
                <select
                  id="class-time"
                  name="classTime"
                  className={`${styles["money__income-input"]} ${styles["money__income-time"]}`}
                >
                  <option value="1">60 دقیقه</option>
                  <option value="1.5">90 دقیقه</option>
                  <option value="2">120 دقیقه</option>
                </select>
              </div>
              <div className={styles["money__income-btn-wrapper"]}>
                <button className={styles["money__income-btn"]}>
                  <Image
                    src="/icons/convert.png"
                    alt="Convert icon"
                    height={20}
                    width={20}
                  />
                </button>
              </div>
            </div>

            <div className={styles.money__output}>
              <p>درآمد ماهیانه شما:</p>
              <span>با کسر کمیسیون 25 درصد</span>
              <div className="d-flex align-center">
                <span className={styles["money__output-value"]}>2,475,000</span>
                <span className={styles["money__output-currency"]}>تومان</span>
              </div>
            </div>

            <div className={styles.money__wraning}>
              <p>لطفاً تمامی موارد را وارد نمائید.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeacherLogin;
