'use client'

import {
    Button,
    Input,
    Select,
} from "../../../components"
import {
    isValidEmail,
    isValidPhone,
    isValidURL,
    isValidIP
} from "../../../utils/validation"
import {
    useEffect
} from "react"

const AdditionalItem = ({
    item,
    register,
    styles,
    errors,
    setValue,
    nestIndex,
    index,
    getValues,
    remove,
    trigger,
}) => {
    const fieldName = `criminals[${nestIndex}].additional[${index}].value`;
    const type = getValues(`criminals[${nestIndex}].additional[${index}].type`);

    const validation = (v) => {
        switch(type){
            case "email": return isValidEmail(v);
            case "phone": return isValidPhone(v);
            case "url": return isValidURL(v);
            case "ip_address": return isValidIP(v);
        }
    }

    useEffect(() => {
        if(getValues(fieldName)) trigger(fieldName);
      }, [type]);

    return (
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
                            validation={validation}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdditionalItem;