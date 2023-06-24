import { useState } from "react";
import Link from "next/link";
import styles from "./StudentLogin.module.css";
import Modal from "../../components/Modal/Modal";
import Alert from "../../components/Alert/Alert";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@mdi/react";
import {
  mdiAccountSchool,
  mdiHumanMaleBoard,
  mdiEmail,
  mdiLock,
  mdiAccountTie,
} from "@mdi/js";
// import { removeCookies } from "cookies-next";

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policyAgree, setPolicyAgree] = useState(true);
  const [status, setStatus] = useState("login");

  const router = useRouter();
  const [alertData, setAlertData] = useState({
    show: false,
    message: "",
    type: "",
  });

  const getCode = async (mobile) => {
    let body = { mobile: mobile };
    try {
      const res = await fetch(
        "https://api.barmansms.ir/api/user/register/mobile",
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
    let body = { mobile, code };
    try {
      const res = await fetch(
        "https://api.barmansms.ir/api/user/register/mobile/check",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const { data } = await res.json();
      if (data?.length !== 0) {
        await removeCookies("tika_user");
        await removeCookies("tika_user");
        await removeCookies("tutor_step");
        await removeCookies("tutor_step");
        await removeCookies("tutor_token");
        await removeCookies("tutor_token");

        setCookie("student_token", data?.token, 730);
        router.replace("/student/dashboard");
      } else {
        let message = "کد وارد شده اشتباه است";
        showAlert(true, "danger", message);
      }
    } catch (error) {
      console.log("Error checking the code ", error);
    }
  };

  const handlePhone = () => {
    if (mobile?.length === 11) {
      getCode(mobile);
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
  // initializing the geolocation

  const studentLogin = () => {
    if (
      false &&
      // getCookie("student_token")
      false
    ) {
      //   router.push("/student/dashboard");
    } else {
      setShowModal(true);
    }
  };

  return (
    <section className={styles.login}>
      <div className="row">
        <aside className="col-md-3 col-xs-12">
          <div className={styles.login__sidebar}>
            <div className={styles.login__logo}>
              <Link href="/">
                <div className={styles["login__logo-img"]}>
                  <Image
                    src="/logo.png"
                    alt="دوره های آنلاین زبان با اساتید باتجربه  در آموزشگاه مجازی زبان زبان‌یاد"
                    width={204}
                    height={302}
                  />
                </div>
              </Link>
            </div>
            <div className={styles.login__desc}>
              <h2>
                به سامانه آموزش زبان زبان‌یاد خوش آمدید.
                <br />
                برای ثبت نام و یا ورود به عنوان زبان آموز،
                <br />
                می تواند از دکمه پایین استفاده نمایید
                <br />
                سپس استاد زبان خود را از بین مدرسین ما انتخاب کنید
                <br />
              </h2>
            </div>
            <div className={styles.login__buttons}>
              <button
                className={`${styles["login__btn"]} ${styles["login__btn--student"]} gradient`}
                onClick={studentLogin}
              >
                <div className={styles["login__btn-img"]}>
                  <Icon path={mdiAccountSchool} size={1} />
                </div>
                <span>ورود زبان آموز</span>
              </button>
              <Link
                href="/tutors/login"
                className={`${styles["login__btn"]} ${styles["login__btn--teacher"]} flex items-center `}
              >
                <div className={styles["login__btn-img"]}>
                  <Icon path={mdiHumanMaleBoard} size={1} />
                </div>
                <span>ورود استاد</span>
              </Link>
            </div>
          </div>
        </aside>
        <div className="col-md-9 col-xs-12 hidden-xs block-md">
          <div className={styles.login__content}>
            <h1>
              زبان‌ یاد
              <br />
              سامانه آموزش آنلاین زبان
            </h1>
          </div>
        </div>
      </div>

      <Modal show={showModal} setter={setShowModal} showHeader={true}>
        <div className={styles.modal__header}>
          <div
            className={`${styles.login__logo} ${styles["login__logo--modal"]}`}
          >
            <img src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="d-flex d-column align-center">
          <div className={styles.modal__content}>
            <h3>ورود / ثبت نام</h3>
            <p>
              کاربر گرامی؛ جهت ورود و یا ثبت نام لطفاً اطلاعات زیر را وارد
              نمائید.
            </p>
            {status === "register" && (
              <div className={styles.modal__input}>
                <input
                  type="text"
                  placeholder="نام کامل"
                  maxLength={11}
                  className={styles.phone__input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Icon path={mdiAccountTie} size={1} />
              </div>
            )}
            <div className={styles.modal__input}>
              <input
                type="email"
                autoFocus
                placeholder="ایمیل"
                maxLength={11}
                className={styles.phone__input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Icon path={mdiEmail} size={1} />
            </div>
            <div className={styles.modal__input}>
              <input
                type="password"
                placeholder="کلمه عبور"
                maxLength={11}
                className={styles.phone__input}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Icon path={mdiLock} size={1} />
            </div>
            <div className={styles.policy__wrapper}>
              <label className={styles.checkbox__wrapper}>
                <input
                  type="checkbox"
                  id="policy"
                  className={styles.checkbox__input}
                  value={policyAgree}
                  defaultChecked
                  onChange={(e) => setPolicyAgree(e.target.checked)}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label htmlFor="policy" className={styles.policy__text}>
                با{" "}
                <Link href="/policy" className={styles.policy__link}>
                  شرایط و قوانین
                </Link>{" "}
                زبان‌یاد موافقم
              </label>
            </div>
            <button
              type="button"
              disabled={!policyAgree}
              className={`gradient ${styles.modal__btn}`}
              onClick={handlePhone}
            >
              {status === "login" ? "وارد شوید" : "ثبت نام کنید"}
            </button>

            <button
              type="button"
              disabled={!policyAgree}
              style={{ marginTop: 16, color: "gray", cursor: "pointer" }}
              onClick={() =>
                setStatus(status === "login" ? "register" : "login")
              }
            >
              {status === "login"
                ? "اکانت ندارید؟ ثبت نام کنید"
                : "عضو هستید؟ وارد شوید"}
            </button>
          </div>

          {/* Alert */}
          <Alert
            {...alertData}
            removeAlert={showAlert}
            envoker={handlePhone || handleCode}
          />
        </div>
      </Modal>
    </section>
  );
}

export default Login;
