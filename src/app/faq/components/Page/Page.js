import {
    Header,
    Footer
} from "../../../components"
import styles from "./style.module.scss"
import {
    FAQ,
    Form
} from "../";

const Page = () => {
    return (
        <>
            <Header />

            <main>
                <section className={styles.section}>
                    <FAQ />
                    
                    <Form />
                </section>
            </main>

            <Footer
                noBackground={true}
            />
        </>
    )
}

export default Page;