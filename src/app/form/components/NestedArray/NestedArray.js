'use client'

import { useFieldArray } from "react-hook-form";
import {
    useEffect
} from "react"
import {
    Button,
} from "../../../components"
import {
    AdditionalItem
} from "../"

const NestedArray = ({
    register,
    styles,
    errors,
    setValue,
    control,
    nestIndex,
    getValues,
    trigger,
}) => {
    const { fields, remove, append } = useFieldArray({
        control,
        name: `criminals[${nestIndex}].additional`
    });

    useEffect(() => {
        if(fields.length == 0){
            append(
                {},
                {
                    shouldFocus: false,
                }
            );
        }
    }, []);

    return (
        <>
            {
                fields.map((item, index) => (
                    <AdditionalItem
                        key={index}
                        item={item}
                        index={index}
                        register={register}
                        styles={styles}
                        errors={errors}
                        setValue={setValue}
                        nestIndex={nestIndex}
                        getValues={getValues}
                        remove={remove}
                        trigger={trigger}
                    />
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