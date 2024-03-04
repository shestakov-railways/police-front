import styles from "./style.module.scss"
import {
    Form
} from "../"

const Page = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.column}>
                <div>
                    <div className={styles.image_wrapper}>
                        <img
                            src="/sign-in.png"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.title}>
                        Cyber Police Department
                    </div>
                    <div className={styles.text}>
                        Unlock user account benefits
                    </div>
                </div>
            </div>

            <div className={`${styles.column} ${styles.column_login}`}>
                <img
                    src="/logo.png"
                    className={styles.logo}
                />

                <Form />
            </div>
        </main>
    )
}

export default Page;