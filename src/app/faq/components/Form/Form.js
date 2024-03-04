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
    Textarea,
    Button
} from "../../../components"
import {
    sendQuestion
} from "../../../services/faq"
import Cookie from 'js-cookie';

const Form = () => {
    const [sent, setSent] = useState(false);
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
            let formData = {
                text: data?.text,
                email: user?.email
            }
            await sendQuestion(token, formData);
            setSent(true);
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
                <div className={`${styles.title} ${sent ? styles.sent_title : ""}`}>
                    {
                        sent
                        ? "Thank you for your question!"
                        : <> Didn't find the answer to your question?<br />You can ask it here </>
                    }
                    
                </div>
                {
                    sent
                    ? null
                    :
                    <>
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
                            <Button
                                type="submit"
                            >
                                Submit question
                            </Button>
                        </div>
                    </>
                }
            </form>
        </FormProvider>
    )
}

export default Form;