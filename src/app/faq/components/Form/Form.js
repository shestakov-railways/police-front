'use client'
import {
    FormProvider,
    useForm
} from "react-hook-form"
import styles from "./style.module.scss"
import {
    useState
} from "react"
import {
    Textarea,
    Button
} from "../../../components"

const Form = () => {
    const [disabled, setDisabled] = useState(false);

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
            console.log(data);
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
                    Didn't find the answer to your question?<br />You can ask it here
                </div>
                <div className={styles.textarea_wrapper}>
                    <Textarea
                        name="text"
                        placeholder="Enter your question"
                        className={styles.textarea}
                        register={register}
                        displayErrors={true}
                        required={true}
                        errors={errors}
                    />
                </div>
                <div className={styles.button_wrapper}>
                    <Button>
                        Submit question
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form;