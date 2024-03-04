import {
    Header,
    Footer
} from "../../../components"
import styles from "./style.module.scss"

const Page = () => {
    return (
        <>
            <Header />

            <main>
                <section className={styles.welcome_section}>
                    <div className={styles.title}>
                        Cyberpolice Department
                    </div>
                    <div className={styles.subtitle}>
                        National Police
                    </div>
                    <div className={styles.slogan}>
                        Proactive, innovative, responsibility
                    </div>
                </section>
                <section>
                    124
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Page;