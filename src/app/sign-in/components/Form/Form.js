import {
    FormProvider,
    useForm
} from "react-hook-form"
import styles from "./style.module.scss"
import {
    Input,
    Button
} from "../../../components"
import Link from 'next/link'

const Form = () => {
    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = methods;

    const onSubmit = async (data) => {
        console.log(JSON.stringify(data));
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                <div className={styles.title}>
                    Log in
                </div>
                
                <div>
                    <div className={styles.row}>
                        <div className={styles.label}>
                            Email
                        </div>
                        <div>
                            <Input
                                name="email"
                                placeholder="Enter your email"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                errors={errors}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.row}>
                        <div className={styles.label}>
                            Password
                        </div>
                        <div>
                            <Input
                                name="password"
                                placeholder="Enter your password"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                errors={errors}
                            />
                        </div>
                    </div>
                </div>

                <Button
                    type="submit"
                    className={styles.button}
                >
                    Log in
                </Button>

                <div>
                    Don't have an account? <Link href="/sign-up">Sign up</Link>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form;