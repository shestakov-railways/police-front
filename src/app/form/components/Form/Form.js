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
} from "../"

const Form = () => {
    const [step, setStep] = useState(1);
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

    const onButtonClick = () => {
        if (step === 1) {
            setStep(2);
        }else{
            handleSubmit(onSubmit)();
        }
    }

    return (
        <FormProvider {...methods}>
            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit)}
                autoComplete="off"
            >
                {
                    step === 1
                    ?
                    <FirstStep
                        register={register}
                        styles={styles}
                        errors={errors}
                    />
                    :
                    <SecondStep
                        register={register}
                        styles={styles}
                        errors={errors}
                        setStep={setStep}
                        setValue={setValue}
                    />
                }
                
                <div className={styles.button_wrapper}>
                    <Button
                        className={styles.button}
                        onClick={onButtonClick}
                    >
                        { step === 1 ? "Proceed" : "Submit report" }
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form;