'use client'

import {
    Button
} from "../../../components"
import styles from "./style.module.scss"
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";
import 'swiper/css';

const News = () => {
    const swiperRef = useRef();

    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.title_wrapper}>

                    <div className={styles.title}>
                        News
                    </div>

                    <div>
                        <div className={styles.controls}>
                            <div
                                onClick={() => swiperRef.current?.slidePrev()}
                                className={`${styles.controller} ${styles.controller_prev}`}
                            />
                            <div
                                onClick={() => swiperRef.current?.slideNext()}
                                className={`${styles.controller} ${styles.controller_next}`}
                            />
                        </div>

                        <a
                            href="https://cyberpolice.gov.ua/"
                            target="blank"
                        >
                            <Button
                                className={styles.button}
                            >
                                Read more
                                <img
                                    src="/icons/icon-arrow.svg"
                                    className={styles.icon}
                                />
                            </Button>
                        </a>
                    </div>
                    
                </div>

                <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    Cybersecurity alert <br /> issued
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-1.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    New security breach discovered
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-2.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    Incident prevention strategies
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-3.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    User security: Stay informed and protected
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-4.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    Data breach alert
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-3.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a
                            href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                            target="blank"
                            className={styles.news}
                        >
                            <div>
                                <div className={styles.news_title}>
                                    Incident analysis
                                </div>
                                <div className={styles.news_text}>
                                    Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                                </div>
                            </div>
                            <div className={styles.image_wrapper}>
                                <img
                                    src="/news/image-2.png"
                                    alt=""
                                    className={styles.image}
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </section>
    )
}

export default News;