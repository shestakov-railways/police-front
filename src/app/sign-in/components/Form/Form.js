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
import {
    isValidEmail
} from "../../../utils/validation"
import {
    signIn
} from "../../../services/sign-in"
import { useRouter } from 'next/navigation';
import {
    useState
} from "react"
import Cookie from 'js-cookie';

const Form = () => {
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const router = useRouter();

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
        setDisabled(true);
        try {
            const loginData = await signIn(data);
            setError(null);
            
            Cookie.set('token', loginData?.access_token, { expires: 3 });
    
            router.push('/dashboard');
        } catch (error) {
            setError(error?.message);
        }
        setDisabled(false);
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
                                required={true}
                                errors={errors}
                                validation={(v) => isValidEmail(v)}
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
                                type="password"
                                placeholder="Enter your password"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                                validation={(val) => {
                                    return val.length < 9 ? "Password must be at least 9 characters long" : true;
                                }}
                            />
                        </div>
                    </div>
                </div>

                {
                    error
                    ?
                    
                    <div className={styles.row}>
                        <div className="error-message">
                            { error }
                        </div>
                    </div>
                    : null
                }

                <Button
                    type="submit"
                    className={styles.button}
                    disabled={disabled}
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