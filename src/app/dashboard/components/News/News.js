import {
    Button
} from "../../../components"
import styles from "./style.module.scss"

const News = () => {
    return (
        <section className={styles.section}>
            <div className={styles.title_wrapper}>
                <div className={styles.title}>
                    News
                </div>
                <a
                    href="https://cyberpolice.gov.ua/"
                    target="blank"
                >
                    <Button>
                        Read more
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default News;