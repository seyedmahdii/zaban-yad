import React, { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import Modal from "../Modal/Modal";
import { useGlobalContext } from "../../context";
import Link from "next/link";

function Footer({ pages }) {
  const footer = useRef(null);
  const readMoreBtn = useRef(null);
  const moreDesc = useRef(null);
  const dots = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const { setFooterHeight } = useGlobalContext();

  const handleReadMore = () => {
    moreDesc.current.classList.toggle(styles["footer__more-desc--show"]);
    dots.current.classList.toggle(styles["footer__dots--hide"]);
    if (
      moreDesc.current.classList.contains(styles["footer__more-desc--show"])
    ) {
      readMoreBtn.current.textContent = "کمتر";
    } else {
      readMoreBtn.current.textContent = "بیشتر";
    }
  };

  useEffect(() => {
    setFooterHeight(footer.current?.offsetHeight);
  }, [setFooterHeight]);

  return (
    <footer className={styles.footer} ref={footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <img
                
                src="/images/tikkaLogo (1).png"
                alt="آموزش زبان با متد تدریس آنلاین زبان در آکادمی تیکا، یادگیری زبان خصوصی انگلیسی و برگزاری کلاس آنلاین در هر زمان در آموزشگاه زبان همراه شما!"
                 className={styles.footer__logo}
              />
              <p className={styles.footer__desc}>
                تیکا، یک سامانه جستجو و انتخاب استاد زبان به همراه دروس و دوره
                های آموزشی فشرده و غیر فشرده مختلف برای یادگیری زبان آموزان است.
                <br />
                با استفاده از پلتفرم آموزش آنلاین زبان تیکا می توانید با اساتید
                مختلف آموزش زبان ارتباط می گیرید و روند پیشرفت خود را در هر
                مرحله از یادگیری زبان خواهید دید.
                <span className={styles.footer__dots} ref={dots}>
                  ...&nbsp;
                </span>
                <span className={styles["footer__more-desc"]} ref={moreDesc}>
                  <br />
                  هدف ما در تیکا آموزش مهارت های زبان شامل مکالمات انگلیسی ،
                  رایتینگ ، مهارت شنیداری زبان های مختلف به صورت آنلاین با
                  کمترین هزینه و بی نیاز از صرف زمان و هزینه ی رفت و آمد برای
                  مدرسین و زبان آموزان می شود.
                  <br />
                  در کلاس های آنلاین زبان تمرکز بر روی مهارت های مورد نیاز زبان
                  آموز ، و تمرین مکالمه زبان آنلاین ، و استفاده از بهترین منابع
                  و کتب برای یادگیری زبان ، داستان های کوتاه انگلیسی و زبان های
                  دیگر و استفاده از متدهای مختلف و جذاب آموزشی می باشد.
                  <br />
                  در واقع تیکا تلاش می کند که پاسخی برای نیازهای هر نوع زبان
                  آموزی داشته باشد و چه زبان آموزی دوست داشته باشد به تنهایی و
                  از طریق خودآموز و بدون کمک مدرس زبان یادگیری را شروع کند و چه
                  دوست داشته باشد که استاد زبان مسیر آموزش زبان را برای او مشخص
                  کند می تواند در تیکا پاسخی به سوالات زبان خود پیدا کند.
                  <br />
                  کلاس های آنلاین زبان تیکا به صورت خصوصی و گروهی با استاد
                  دلخواه زبان آموز در روز و ساعتی که بخواهد برگزار می شوند.
                  <br />
                  از جمله مزایای سایت آموزش آنلاین تیکا می توان به رنج قیمتی
                  متفاوت اساتید مختلف اشاره کرد تا زبان آموز بتواند با هر بودجه
                  ای استاد زبان مورد نظر خود را پیدا کند.
                  <br />
                  از دیگر مزایای آموزش آنلاین زبان می توان به امکان انتخاب کلاس
                  آزمایشی رایگان اشاره کرد و در این کلاس رایگان استاد زبان می
                  تواند هر چه بیشتر با استاد زبان و متد آموزشی او آشنا شود و یک
                  تعیین سطح آنلاین رایگان نیز توسط استاد زبان از زبان آموز انجام
                  می شود.
                  <br />
                  در تیکا علاوه بر زبان انگلیسی برای زبان های فرانسه ، اسپانیایی
                  ، ترکی استانبولی ، ایتالیایی ، روسی ، چینی ، کره ای ، ژاپنی ،
                  آلمانی ، عربی و ... نیز مدرس زبان فعال در تیکا هستند.
                  <br />
                  این خدماتی که اسم بردیم فقط خدماتی هست که ما توی آکادمی تیکا
                  به شما ارائه میدیم و کلی امکانات دیگه هم داریم که توی
                  اپلیکیشنمون قرار دادیم.
                  <br />
                  مثل دوره آموزشی خود آموز و دوره های مختلفی که اساتیدمون جدا از
                  کالج تیکا برامون طراحی کردن٬ کلیپ های سرگرم کننده با زیرنویس
                  دو زبانه و خیلی امکانات دیگه که توی لیست بالا آوردیم.
                  <br />
                  شما همینطور میتونید از طریق استفاده از اپلیکیشن آموزش زبان
                  تیکا از کد تخفیف اختصاصیمون برای شرکت در آزمون تعیین سطح موسسه
                  زبان سفیر استفاده کنید و مدرکتون رو از موسسه ی معتبر سفیر
                  دریافت کنید.
                  <br />
                  امیدواریم بتونیم بهترین خدمات رو به شما ارائه کنیم.
                </span>
                <button
                  className={styles["footer__read-more-btn"]}
                  ref={readMoreBtn}
                  onClick={handleReadMore}
                >
                  بیشتر
                </button>
              </p>
              <div className={styles["footer__social-media"]}>
                <p>ما را دنبال کنید</p>
                <ul>
                  <li>
                    <a href="https://instagram.com/tikkaa.ir/">
                      <img
                        src="/icons/instagram.png"
                        alt="صفحه اینستاگرام تیکا"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/18399239">
                      <img src="/icons/linkedin.png" alt="صفحه لینکدین تیکا" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/tikkaa_ir/">
                      <img src="/icons/pinterest.png" alt="صفحه پینترست تیکا" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/tikkaa">
                      <img src="/icons/telegram.png" alt="صفحه تلگرام تیکا" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/tikkaa_app">
                      <img src="/icons/twitter.png" alt="صفحه توئیتر تیکا" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC-0ENqkYoj19OSI3DO6yyOQ">
                      <img src="/icons/youtube.png" alt="صفحه یوتیوب تیکا" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aparat.com/tikkaa">
                      <img src="/icons/aparat.png" alt="آپارات تیکا" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <h4 className={styles["footer__item-title"]}>سایت</h4>
              <ul className={styles.footer__list}>
                {pages?.data?.map((item) => (
                  <li key={item.id}>
                    <Link href={`/other-pages/${item.url}`}>
                      <a className={styles.footer__link}>{item.name}</a>
                    </Link>
                  </li>
                ))}

                <li>
                  <a
                    href="https://tikkaa.ir/%D8%AF%D8%B1%D8%AE%D9%88%D8%A7%D8%B3%D8%AA-%D9%85%D8%AF%D8%B1%DA%A9-%D9%85%D8%B9%D8%AA%D8%A8%D8%B1-%D8%B2%D8%A8%D8%A7%D9%86"
                    className={styles.footer__link}
                  >
                    درخواست مدرک
                  </a>
                </li>

                <li>
                  <Link href="/faq" passHref>
                    <a className={styles.footer__link}>سوالات متداول</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other-pages/our-supporters" passHref>
                    <a className={styles.footer__link}>حامیان</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" passHref>
                    <a className={styles.footer__link}>وبلاگ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/other-pages/our-team" passHref>
                    <a className={styles.footer__link}>تیم تیکا</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <h4 className={styles["footer__item-title"]}>بیشتر</h4>
              <ul className={styles.footer__list}>
                <li>
                  <Link href="/other-pages/organization">
                    <a className={styles.footer__link}>
                      پکیج سازمانی آموزش زبان
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/other-pages/invite-friends" passHref>
                    <a className={styles.footer__link}>دعوت از دوستان</a>
                  </Link>
                </li>
                {/* <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D8%B2%D9%85%D9%88%D9%86-%D8%AA%D8%B9%DB%8C%DB%8C%D9%86-%D8%B3%D8%B7%D8%AD"
                    className={styles.footer__link}
                  >
                    آزمون تعیین سطح
                  </a>
                </li> */}
                <li>
                  <Link href="/other-pages/contact" passHref>
                    <a className={styles.footer__link}>تماس با ما</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className={styles.footer__item}>
              <h4 className={styles["footer__item-title"]}>آموزش زبان ها</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%85%DA%A9%D8%A7%D9%84%D9%85%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان انگلیسی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D9%81%D8%B1%D8%A7%D9%86%D8%B3%D9%87"
                    className={styles.footer__link}
                  >
                    زبان فرانسه
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A2%D9%84%D9%85%D8%A7%D9%86%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان آلمانی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D8%AA%D8%B1%DA%A9%DB%8C-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%A8%D9%88%D9%84%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان ترکی استانبولی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%DA%A9%D8%B1%D9%87-%D8%A7%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان کره ای
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%DA%86%DB%8C%D9%86%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان چینی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%DB%8C%D8%AA%D8%A7%D9%84%DB%8C%D8%A7%DB%8C%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان ایتالیایی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D8%B1%D9%88%D8%B3%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان روسی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%B2%D8%A8%D8%A7%D9%86-%D8%B9%D8%B1%D8%A8%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان عربی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D8%B2%D8%A8%D8%A7%D9%86-%D8%A7%D8%B3%D9%BE%D8%A7%D9%86%DB%8C%D8%A7%DB%8C%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان اسپانیایی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%85%DA%A9%D8%A7%D9%84%D9%85%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%D9%87%D9%84%D9%86%D8%AF%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان هلندی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%85%DA%A9%D8%A7%D9%84%D9%85%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%DA%98%D8%A7%D9%BE%D9%86%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان ژاپنی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/%D8%A2%D9%85%D9%88%D8%B2%D8%B4-%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86-%D9%85%DA%A9%D8%A7%D9%84%D9%85%D9%87-%D8%B2%D8%A8%D8%A7%D9%86-%D8%B3%D9%88%D8%A6%D8%AF%DB%8C"
                    className={styles.footer__link}
                  >
                    زبان سوئدی
                  </a>
                </li>
                <li>
                  <a
                    href="https://tikkaa.ir/Learning-Hindi-conversation"
                    className={styles.footer__link}
                  >
                    زبان هندی
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.footer__reserve}>
              <a
                href="https://tikkaa.ir/find-teachers"
                className="primary-btn gradient gradient--hoverable"
              >
                رزرو کلاس
              </a>
              <div className={styles.footer__call}>
                <span>شماره تماس:</span>
                <a href="tel:02191016620" dir="ltr">
                  021-91016620
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className={`col-md-2 col-sm-3 col-xs-6 ${styles.footer__image}`}>
            <button
              className={styles["footer__image-btn"]}
              onClick={() =>
                window.open(
                  "https://logo.samandehi.ir/Verify.aspx?id=145934&p=rfthaodsdshwpfvlxlaoaods",
                  "Popup",
                  "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
                )
              }
            >
              <img
                src="https://tikkaa.ir/img/index/footer/enamad1.png"
                alt="نماد رسانه های دیجیتال ، آموزش زبان ، تیکا"
                width={100}
                height={100}
              />
            </button>
          </div>
          <div className={`col-md-2 col-sm-3 col-xs-6 ${styles.footer__image}`}>
            <a
              href="https://trustseal.enamad.ir/?id=125959&Code=hl2vBB4NsNRouOFkYHD9"
              className={styles["footer__image-btn"]}
            >
              <img
                src="https://trustseal.enamad.ir/Content/Images/Star/star1.png?v=5.0.0.47"
                alt="نماد اعتماد الکترونیکی تیکا"
                width={125}
                height={136}
              />
            </a>
          </div>
          <div className={`col-md-2 col-sm-3 col-xs-6 ${styles.footer__image}`}>
            <a
              href="https://tikkaa.ir/secure-payment"
              className={styles["footer__image-btn"]}
            >
              <img
                src="https://tikkaa.ir/img/secure-payment/secure-logo.png"
                alt="پرداخت امن تیکا"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className={`col-md-2 col-sm-3 col-xs-6 ${styles.footer__image}`}>
            <button
              className={styles["footer__image-btn"]}
              onClick={() => setShowModal(!showModal)}
            >
              <img
                src="https://tikkaa.ir/img/index/footer/enamad3.png"
                alt="انجمن صنفی کارفرمایی فروشگاه های اینترنتی"
                width={100}
                height={86}
              />
            </button>
            <Modal show={showModal} setter={setShowModal}>
              <img
                src="https://tikkaa.ir/img/index/footer/anjoman-senfi.jpg"
                alt="گواهی عضویت انجمن صنفی کارفرمایی"
                style={{ width: "100%" }}
                width={500}
                height={359}
              />
            </Modal>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className={styles.subfooter}>
              تمامی حقوق سایت متعلق به&nbsp;
              <a href="http://tikkaa.ir/" className={styles.footer__link}>
                تیکا
              </a>
              ؛ پلتفرم جست و جو و انتخاب استاد آنلاین زبان و معلم خصوصی می باشد.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
