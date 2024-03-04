'use client'

import { useFieldArray } from "react-hook-form";
import {
    useEffect
} from "react"
import {
    Button,
    Input,
    Select,
} from "../../../components"

const NestedArray = ({
    register,
    styles,
    errors,
    setValue,
    control,
    nestIndex,
}) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: `criminals[${nestIndex}].additional`
    });

    useEffect(() => {
        if(fields.length == 0){
            append({});
        }
    }, []);

    return (
        <>
            {
                fields.map((item, index) => (
                    <div
                        key={item.id}
                        className={styles.criminal_wrapper}
                    >
                        <div className={`${styles.row} ${styles.additional_row}`}>
                            <div className={styles.label}>
                                Additional information #{index + 1}
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
                                        Data type
                                    </div>
                                    <Select
                                        name={`criminals[${nestIndex}].additional[${index}].type`}
                                        placeholder="Data type"
                                        register={register}
                                        setValue={setValue}
                                        required={false}
                                        className={styles.select}
                                        options={[
                                            {
                                                value: "email",
                                                label: "Email"
                                            },
                                            {
                                                value: "phone",
                                                label: "Phone",
                                            },
                                            {
                                                value: "url",
                                                label: "Social media URL",
                                            },
                                            {
                                                value: "ip_address",
                                                label: "IP address",
                                            },
                                            {
                                                value: "other",
                                                label: "Other",
                                            }
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className={styles.column}>
                                <div className={styles.row}>
                                    <div className={styles.label}>
                                        Value
                                    </div>
                                    <Input
                                        name={`criminals[${nestIndex}].additional[${index}].value`}
                                        placeholder="Enter information"
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
                className={styles.add_information_wrapper}
            >
                <Button
                    onClick={() => append()}
                    style="outline"
                    className={styles.add_additional_information_button}
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
                    Add information
                </Button>
            </div>
        </>
    )
}

export default NestedArray;