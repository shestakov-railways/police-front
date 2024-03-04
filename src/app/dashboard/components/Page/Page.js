import {
    Header,
    Footer,
    Button
} from "../../../components"
import Link from 'next/link'
import styles from "./style.module.scss"

const Page = () => {
    return (
        <>
            <Header />

            <main>
                <section className={styles.welcome_section}>
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
                        >
                            <Button
                                className={styles.welcome_button}
                            >
                                Make a report
                            </Button>
                        </Link>
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