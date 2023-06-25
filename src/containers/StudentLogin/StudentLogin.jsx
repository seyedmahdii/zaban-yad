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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [policyAgree, setPolicyAgree] = useState(true);
  const [status, setStatus] = useState("login");

  const router = useRouter();
  const [alertData, setAlertData] = useState({
    show: false,
    message: "",
    type: "",
  });

  const register = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/custom-users/", {
        method: "POST",
        body: JSON.stringify({
          name,
          username,
          password,
          role: "learner",
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("res", res);
      const { data } = await res.json();
      if (true) {
        console.log("true");
      } else {
        let message = "کد وارد شده اشتباه است";
        showAlert(true, "danger", message);
      }
    } catch (error) {
      console.log(" ", error);
    }
  };

  const login = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/custom-users/", {
        method: "POST",
        body: JSON.stringify({
          name,
          username,
          password,
          role: "learner",
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log("res", res);
      const { data } = await res.json();
      if (true) {
        console.log("true");
      } else {
        let message = "کد وارد شده اشتباه است";
        showAlert(true, "danger", message);
      }
    } catch (error) {
      console.log(" ", error);
    }
  };

  const showAlert = (show, type, message) => {
    setAlertData({ show, type, message });
  };
  // initializing the geolocation

  const studentLogin = () => {
    setShowModal(true);
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
              onClick={status === "login" ? login : register}
            >
              {status === "login" ? "وارد شوید" : "ثبت نام کنید"}
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
          </div>

          {/* Alert */}
          <Alert
            {...alertData}
            removeAlert={showAlert}
            envoker={login || register}
          />
        </div>
      </Modal>
    </section>
  );
}

export default Login;
