import {
    Input
} from "../../../components"
import {
    isValidEmail,
    isValidPhone
} from "../../../utils/validation"

const FirstStep = ({
    register,
    styles,
    errors,
}) => {
    return (
        <>
            <div className={styles.title}>
                Personal information
            </div>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <div className={styles.row} data-row="first">
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

                    <div className={styles.row} data-row="third">
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

                    <div className={styles.row} data-row="fourth">
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
                    <div className={styles.row} data-row="second">
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

                    <div className={styles.row} data-row="fifth">
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
        </>
    )
}

export default FirstStep;