import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./StudentLogin.module.css";
import Modal from "../Modal/Modal";
import Alert from "../Alert/Alert";
import Image from "next/image";
import { useRouter } from "next/router";
import { useGlobalContext } from "../../context/index";
import { removeCookies } from "cookies-next";
import { getGeolocation } from "../../utility/HelperFunction";
const ModalStudentLogin = ({ showModal, setShowModal, action }) => {
  // const [showModal, setShowModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [policyAgree, setPolicyAgree] = useState(true);
  const [step, setStep] = useState(1);
  const [code, setCode] = useState("");
  let geolocation = useRef(null);
  const router = useRouter();
  const [alertData, setAlertData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const ip = "";
  useEffect(() => {
    getGeolocation(ip, geolocation);
  }, []);

  const { setCookie } = useGlobalContext();

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
        // router.replace("/student/dashboard");
        action();
        setShowModal(false);
      } else {
        let message = "کد ارسالی اشتباه است";
        showAlert(true, "danger", message);
      }
    } catch (error) {
      console.log("Error checking the code ", error);
    }
  };

  useEffect(() => {
    if (code.length === 5) {
      handleCode();
    }
  }, [code]);

  const handlePhone = () => {
    if (mobile?.length === 11) {
      getCode(mobile);
      setStep(2);
      let message = "رمز یکبار مصرف از طریق پیامک برای شما ارسال شد.";
      showAlert(true, "success", message);
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
    <Modal show={showModal} setter={setShowModal} showHeader={true}>
      <div className={styles.modal__header}>
        <div
          className={`${styles.login__logo} ${styles["login__logo--modal"]}`}
        >
          <img
            src="https://www.tikkaa.ir/img/login/loginLogo.png"
            alt="دوره های آنلاین زبان با اساتید باتجربه  در آموزشگاه مجازی زبان تیکا"
          />
        </div>
      </div>
      <div className="d-flex d-column align-center">
        {step === 1 && (
          <div className={styles.modal__content}>
            <h3>ورود / ثبت نام</h3>
            <p>
              کاربر گرامی؛ جهت ورود و یا ثبت نام لطفاً شماره موبایل خود را وارد
              نمائید.
            </p>
            <div className={styles.modal__input}>
              <input
                type="tel"
                autoFocus
                placeholder="09 *********"
                maxLength={11}
                className={styles.phone__input}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <img
                src="/icons/mobile.png"
                alt="mobile icon"
                width={17}
                height={30}
              />
            </div>
            <div className={styles.policy__wrapper}>
              <label className={styles.checkbox__wrapper}>
                <input
                  type="checkbox"
                  id="tikkaa__policy"
                  className={styles.checkbox__input}
                  value={policyAgree}
                  defaultChecked
                  onChange={(e) => setPolicyAgree(e.target.checked)}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label htmlFor="tikkaa__policy" className={styles.policy__text}>
                با{" "}
                <Link href="/other-pages/policy">
                  <a className={styles.policy__link}>شرایط و قوانین</a>
                </Link>{" "}
                تیکا موافقم
              </label>
            </div>
            <button
              type="button"
              disabled={!policyAgree}
              className={`gradient ${styles.modal__btn}`}
              onClick={handlePhone}
            >
              دریافت کد
            </button>

            {geolocation && geolocation?.current?.country !== "Iran" && (
              <>
                <div className={styles.modal__or}>
                  <span className={styles["modal__or-dash"]}>
                    ----------------
                  </span>{" "}
                  یا{" "}
                  <span className={styles["modal__or-dash"]}>
                    ----------------
                  </span>
                </div>
                <a
                  href="https://tikkaa.ir/auth/google"
                  className={`${styles.modal__btn} ${styles["modal__btn--gmail"]}`}
                >
                  <img
                    src="/images/google.png"
                    alt="google icon"
                    width={20}
                    height={21}
                  />
                  <span>ورود با حساب گوگل</span>
                </a>
              </>
            )}
          </div>
        )}
        {step === 2 && (
          <div className={styles.modal__content}>
            <h3>تایید کد دریافتی</h3>
            <p>کد تایید ارسال شده به شماره موبایل خود را وارد کنید</p>
            <div
              className={`${styles.modal__input} ${styles["modal__input--noborder"]}`}
            >
              <input
                type="number"
                autoFocus
                maxLength={5}
                className={styles.code__input}
                value={code}
                onChange={(e) => setCode(e.target.value.slice(0, 5))}
              />
            </div>
            <button
              type="button"
              className={`gradient ${styles.modal__btn}`}
              onClick={handleCode}
            >
              تائید
            </button>
          </div>
        )}

        {/* Alert */}
        <Alert
          {...alertData}
          removeAlert={showAlert}
          envoker={handlePhone || handleCode}
        />
      </div>
    </Modal>
  );
};
export default ModalStudentLogin;
