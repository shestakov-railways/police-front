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
    Button
} from "../../../components"
import Cookie from 'js-cookie';

import {
    FirstStep,
    SecondStep,
    ThirdStep,
} from "../"

const Form = () => {
    const [submitted, setSubmitted] = useState(false);
    const [user, setUser] = useState(null);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const methods = useForm({
        mode: "onChange",
        defaultValues: {
            first_name: "",
            last_name: "",
            middle_name: "",
            phone: "",
            email: "",
        }
    });

    const {
        register,
        handleSubmit,
        setValue,
        control,
        getValues,
        trigger,
        reset,
        formState: {
            errors,
            isValid
        }
    } = methods;

    const onSubmit = async (data) => {
        setDisabled(true);
        try {
            console.log(123, data);
            setSubmitted(true);
            const token = Cookie.get('token');
        } catch (error) {
            alert(error?.message);
        }
        setDisabled(false);
    }

    const reSubmit = (e) => {
        reset();
        setSubmitted(false);
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                {
                    submitted === false
                    ?
                    <>
                        <div className={styles.form_block}>
                            <FirstStep
                                register={register}
                                styles={styles}
                                errors={errors}
                            />
                        </div>

                        <div className={styles.form_block}>
                            <SecondStep
                                register={register}
                                styles={styles}
                                errors={errors}
                                setValue={setValue}
                            />
                        </div>

                        <div className={styles.form_block}>
                            <ThirdStep
                                register={register}
                                styles={styles}
                                errors={errors}
                                setValue={setValue}
                                control={control}
                                getValues={getValues}
                                trigger={trigger}
                            />
                        </div>

                        <div className={styles.button_wrapper}>
                            <Button
                                type="submit"
                                className={styles.button}
                                disabled={disabled}
                            >
                                Submit report
                            </Button>
                        </div>
                    </>
                    : null
                }

                {
                    submitted === true
                    ?
                    <div className={styles.form_block}>
                        <div className={`${styles.title} ${styles.report_submitted_title}`}>
                            Report submitted successfully
                        </div>

                        <div className={styles.button_wrapper}>
                            <Button
                                onClick={reSubmit}
                                className={styles.button}
                            >
                                Resubmit
                            </Button>
                        </div>
                    </div>
                    : null
                }
            </form>
        </FormProvider>
    )
}

export default Form;