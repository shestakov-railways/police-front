import {
    Input,
    Select
} from "../../../components"

const ThirdStep = ({
    register,
    styles,
    errors,
    setStep,
    setValue,
}) => {
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

            <div className={styles.columns}>
                <div className={styles.column}>
                    <div className={styles.row}>
                        <div className={styles.label}>
                            Accident type <span className={styles.required}>*</span>
                        </div>
                        <Select
                            name="accident_type"
                            placeholder="Accident type"
                            register={register}
                            setValue={setValue}
                            required={true}
                            className={styles.select}
                            options={[
                                {
                                    value: "financial_fraud",
                                    label: "Financial fraud"
                                },
                                {
                                    value: "ransomware",
                                    label: "Ransomware",
                                },
                                {
                                    value: "identity_theft",
                                    label: "Identity theft",
                                },
                                {
                                    value: "property_theft",
                                    label: "Intellectual property theft",
                                },
                                {
                                    value: "illegal_goods_services",
                                    label: "Sale of illegal goods and services",
                                }
                            ]}
                        />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>
                            Related images (optional)
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdStep;