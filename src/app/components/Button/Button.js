'use client';

import styles from "./style.module.scss"

const Button = ({
    type = "button",
    children,
    onClick = () => {},
    disabled = false,
    className = "",
    style = "light"
}) => {
    return (
        <button
            type={type}
            className={`
                ${styles.button}
                ${styles[`button-${style}`]}
                ${disabled ? styles.disabled : ""}
                ${className ? className : ""}
            `}
            onClick={onClick}
            disabled={disabled ? true : false}
        >
            { children }
        </button>
    )
}

export default Button;