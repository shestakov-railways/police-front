'use client'
import {
    FormProvider,
    useForm
} from "react-hook-form"
import styles from "./style.module.scss"
import {
    useState,
    useEffect
} from "react"
import {
    Input,
    Button
} from "../../../components"
import Cookie from 'js-cookie';
import {
    isValidEmail,
    isValidPhone
} from "../../../utils/validation"

const Form = () => {
    const [user, setUser] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            text: ""
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
            const token = Cookie.get('token');
        } catch (error) {
            alert(error?.message);
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
                    Personal information
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.row}>
                            <div className={styles.label}>
                                First name <span className={styles.required}>*</span>
                            </div>
                            <Input
                                name="first_name"
                                placeholder="Enter your first name"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.label}>
                                Middle name <span className={styles.required}>*</span>
                            </div>
                            <Input
                                name="middle_name"
                                placeholder="Enter your middle name"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.label}>
                                Email <span className={styles.required}>*</span>
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
                    </div>

                    <div className={styles.column}>
                        <div className={styles.row}>
                            <div className={styles.label}>
                                Last name <span className={styles.required}>*</span>
                            </div>
                            <Input
                                name="last_name"
                                placeholder="Enter your last name"
                                className={styles.input}
                                register={register}
                                displayErrors={true}
                                required={true}
                                errors={errors}
                            />
                        </div>

                        <div className={styles.row}>
                            <div className={styles.label}>
                                Phone <span className={styles.required}>*</span>
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
                    </div>
                </div>
                
                <div className={styles.button_wrapper}>
                    <Button
                        type="submit"
                        className={styles.button}
                    >
                        Proceed
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form;