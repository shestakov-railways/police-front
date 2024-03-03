import styles from "./style.module.scss";

const Input = ({
    name,
    placeholder,
    value = "",
    required = false,
    requiredMessage = "Please complete this required field",
    register,
    errors,
    validation,
    displayErrors = true,
    type = "text",
    icon = null,
    wrapperClassName = "",
    className = "",
    autoComplete = "new-password",
    defaultValue = "",
    maxLength = 255
}) => {
    const validationObject = {};

    if(required) validationObject.required = requiredMessage;
    if(validation) validationObject.validate = validation;

    return (
        <>
            <div
                className={`${styles.wrapper} ${wrapperClassName ? wrapperClassName : ""}`}
            >
                <input
                    type={type}
                    name={name}
                    defaultValue={value}
                    placeholder={placeholder}
                    className={`${styles.input} ${className ? className : ""}`}
                    autoComplete={autoComplete}
                    maxLength={maxLength}
                    {...register(name, validationObject)}
                />

                {
                    icon ? icon : <></>
                }
            </div>

            {
                displayErrors
                &&
                errors[name]
                &&
                <span className="error-message">
                    { errors[name]?.message }
                </span>
            }
        </>
    )
};

export default Input;