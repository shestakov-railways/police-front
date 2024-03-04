import {
    Button
} from "../../../components"
import styles from "./style.module.scss"

const News = () => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.title_wrapper}>
                    <div className={styles.title}>
                        News
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

                <div className={styles.news_list}>
                    <a
                        href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                        target="blank"
                        className={styles.news}
                    >
                        <div className={styles.news_title}>
                            Cybersecurity alert issued
                        </div>
                        <div className={styles.news_text}>
                            Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                        </div>
                        <div className={styles.image_wrapper}>
                            <img
                                src="/news/image-1.png"
                                alt=""
                                className={styles.image}
                            />
                        </div>
                    </a>

                    <a
                        href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                        target="blank"
                        className={styles.news}
                    >
                        <div className={styles.news_title}>
                            Cybersecurity alert issued
                        </div>
                        <div className={styles.news_text}>
                            Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                        </div>
                        <div className={styles.image_wrapper}>
                            <img
                                src="/news/image-1.png"
                                alt=""
                                className={styles.image}
                            />
                        </div>
                    </a>

                    <a
                        href="https://cyberpolice.gov.ua/news/biznes-z-miljonnym-oborotom-grupa-narkodilkiv-postane-pered-sudom-na-lvivshhyni-4123/"
                        target="blank"
                        className={styles.news}
                    >
                        <div className={styles.news_title}>
                            Cybersecurity alert issued
                        </div>
                        <div className={styles.news_text}>
                            Stay ahead of potential threats and protect your data with our comprehensive incident prevention strategies. Learn how to safeguard your information and enhance your online security today.
                        </div>
                        <div className={styles.image_wrapper}>
                            <img
                                src="/news/image-1.png"
                                alt=""
                                className={styles.image}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default News;