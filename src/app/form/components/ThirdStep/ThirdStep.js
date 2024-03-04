'use client'
import {
    Input,
    Select,
    Button
} from "../../../components"
import { useFieldArray } from "react-hook-form";
import {
    useEffect
} from "react"

const ThirdStep = ({
    register,
    styles,
    errors,
    setStep,
    setValue,
    control,
}) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "criminals"
    });

    useEffect(() => {
        if(fields.length == 0){
            append({});
        }
    }, []);

    return (
        <>
            <div className={styles.title}>
                Criminal information
            </div>

            <div
                className={styles.back}
                onClick={() => setStep(2)}
            >
                <img
                    src="/icons/icon-chevrone-left.svg"
                    className={styles.icon}
                />
                Go back
            </div>

            {
                fields.map((item, index) => (
                    <div
                        key={item.id}
                        className={styles.criminal_wrapper}
                    >
                        <div className={`${styles.row} ${styles.criminal_row}`}>
                            <div className={styles.label}>
                                Criminal #{index + 1}
                            </div>
                            <Button
                                onClick={() => remove(index)}
                                style="outline"
                                className={styles.remove_button}
                            >
                                <div
                                    className={styles.remove_wrapper}
                                >
                                    <img
                                        src="/icons/icon-delete.svg"
                                        alt=""
                                        className={styles.remove_icon}
                                    />
                                </div>
                                Remove
                            </Button>
                        </div>
                        <div
                            className={styles.columns}
                        >
                            <div className={styles.column}>
                                <div className={styles.row}>
                                    <div className={styles.label}>
                                        First name
                                    </div>
                                    <Input
                                        name={`criminals.${index}.first_name`}
                                        placeholder="Enter first name"
                                        className={styles.input}
                                        register={register}
                                        displayErrors={true}
                                        required={false}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.row}>
                                    <div className={styles.label}>
                                        Last name
                                    </div>
                                    <Input
                                        name={`criminals.${index}.last_name`}
                                        placeholder="Enter last name"
                                        className={styles.input}
                                        register={register}
                                        displayErrors={true}
                                        required={false}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.row}>
                                    <div className={styles.label}>
                                        Middle name
                                    </div>
                                    <Input
                                        name={`criminals.${index}.middle_name`}
                                        placeholder="Enter middle name"
                                        className={styles.input}
                                        register={register}
                                        displayErrors={true}
                                        required={false}
                                        errors={errors}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

            <div
                className={styles.add_button_wrapper}
            >
                <Button
                    onClick={() => append()}
                    style="outline"
                    className={styles.add_button}
                >
                    <div
                        className={styles.add_wrapper}
                    >
                        <img
                            src="/icons/icon-add.svg"
                            alt=""
                            className={styles.add_icon}
                        />
                    </div>
                    Add criminal
                </Button>
            </div>
        </>
    )
}

export default ThirdStep;