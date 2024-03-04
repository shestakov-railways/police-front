import {
    Header,
    Footer
} from "../../../components"
import {
    Form,
} from "../"

const Page = () => {
    return (
        <>
            <Header />

            <main>
                <Form />
            </main>

            <Footer
                noBackground={true}
            />
        </>
    )
}

export default Page;