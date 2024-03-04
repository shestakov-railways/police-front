import {
    Button
} from "../../../components"
import styles from "./style.module.scss"
import Link from 'next/link'

const Welcome = () => {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div>
                    <div className={styles.title}>
                        Cyber Police Department
                    </div>
                    <div className={styles.subtitle}>
                        National Police
                    </div>
                    <div className={styles.slogan}>
                        Proactivity. Serviceability. Responsibility.
                    </div>
                    <Link
                        href="/form"
                        className={styles.link}
                    >
                        <Button
                            className={styles.button}
                        >
                            Make a report
                        </Button>
                    </Link>
                    <div className={styles.social_media}>
                        <a
                            href="https://www.linkedin.com/feed/"
                            target="blank"
                            className={styles.icon_wrapper}
                        >
                            <img
                                src="/icons/icon-linkedin.svg"
                                className={styles.icon}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="blank"
                            className={styles.icon_wrapper}
                        >
                            <img
                                src="/icons/icon-instagram.svg"
                                className={styles.icon}
                            />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="blank"
                            className={styles.icon_wrapper}
                        >
                            <img
                                src="/icons/icon-twitter.svg"
                                className={styles.icon}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome;