import {
    FormProvider,
    useForm,
    useWatch
} from "react-hook-form"
import styles from "./style.module.scss"
import {
    Input,
    Button
} from "../../../components"
import Link from 'next/link'
import {
    isValidEmail,
    isValidPhone
} from "../../../utils/validation"
import {
    signUp
} from "../../../services/sign-up"
import {
    useState
} from "react"
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

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
        control,
        formState: {
            errors
        }
    } = methods;

    const passwordValue = useWatch({
        control,
        name: "password", 
        defaultValue: "",
    });

    const onSubmit = async (data) => {
        setDisabled(true);
        try{
            const signUpData = await signUp(data);
            setError(null); 
        
            localStorage.setItem('user', JSON.stringify(signUpData?.user));
            Cookie.set('token', signUpData?.access_token, { expires: 3 });
        
            router.push('/dashboard');
        }catch(e){
            setError(e?.message);
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
                    Sign up
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
                            Phone
                        </div>
                        <div>
                            <Input
                                name="phone"
                                placeholder="Enter your phone"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                                validation={(v) => isValidPhone(v)}
                                maxLength={13}
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

                    <div className={styles.row}>
                        <div className={styles.label}>
                            Confirm password
                        </div>
                        <div>
                            <Input
                                name="confirm_password"
                                type="password"
                                placeholder="Repeat your password"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                                validation={(val) => {
                                    if(val !== passwordValue) return "Passwords don't match";
                                    return val.length < 9 ? "Password must be at least 9 characters long" : true;
                                }}
                            />
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
                </div>

                <Button
                    type="submit"
                    className={styles.button}
                    disabled={disabled}
                >
                    Sign up
                </Button>

                <div>
                    Already have an account? <Link href="/">Sign in</Link>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form;