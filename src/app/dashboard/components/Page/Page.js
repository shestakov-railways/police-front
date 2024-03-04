import {
    Header,
    Footer
} from "../../../components"
import {
    Welcome,
    News 
} from "../"

const Page = () => {
    return (
        <>
            <Header />

            <main>
                
                <Welcome />

                <News />
                
            </main>

            <Footer />
        </>
    )
}

export default Page;