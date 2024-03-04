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
            </div>
        </section>
    )
}

export default News;