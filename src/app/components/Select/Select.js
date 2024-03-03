'use client';

import styles from "./style.module.scss"
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form"

const Select = ({
    name,
    placeholder,
    required = false,
    register,
    setValue,
    className = "",
    wrapperClassName = "",
    requiredMessage = "Please complete this required field",
    options = [],
    onClick = () => {},
    RenderBefore = () => <></>,
    RenderAfter = () => <></>,
    activeSelect,
    setActiveSelect,
    openAtTop = false
}) => {
    const {
        getValues,
        watch
    } = useFormContext();
    const wrapperRef = useRef(null);
    const [opened, setOpened] = useState(false);
    const value = watch({ name });
    const [activeIndex, setActiveIndex] = useState(0);

    const validation = required ? {
        required: requiredMessage
    } : {};

    useEffect(() => {
        const index = options.findIndex(x => x.value == getValues(name));
        setActiveIndex(index != -1 ? index : 0);
    }, [value]);

    useEffect(() => {
        if(opened && (!activeSelect || activeSelect !== name)) {
            setOpened(false);
        }
    }, [activeSelect]);

    useEffect(() => {
        const target = wrapperRef.current;

        const outOfBoundariesClick = (event) => {
            const withinBoundaries = event.composedPath().includes(target)
            
            if (!withinBoundaries) {
                setOpened(false);
            } 
        }

        document.addEventListener('mousedown', outOfBoundariesClick);

        return () => {
            document.removeEventListener('mousedown', outOfBoundariesClick);
        }
    }, []);

    return (
        <div
            className={`${styles.wrapper} ${wrapperClassName ? wrapperClassName : ""}`}
            ref={wrapperRef}
        >
            <div
                className={`${styles.select_box} ${className ? className : ""}`}
                onClick={() => {
                    setOpened(!opened);

                    if(activeSelect && activeSelect !== name) {
                        setActiveSelect(name);
                    }
                }}
            >
                <RenderBefore />
                <div>
                    { options.find((x, i) => i === activeIndex)?.label ?? placeholder }
                </div>
                <RenderAfter />
            </div>

            <div className={`${styles.select_options} ${openAtTop ? styles.select_options_to_top : ""} ${opened ? styles.active : ""}`}>
                <div className={styles.select_options_list}>
                    {
                        options.map(({
                            value,
                            label 
                        }) => {
                            return (
                                <div
                                    key={value}
                                    className={styles.select_option}
                                    onClick={() => {
                                        setOpened(false);
                                        setValue(name, value);
                                        onClick();
                                        setActiveIndex(options.findIndex(x => x.value === value));
                                    }}
                                >
                                    { label }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <select
                name={name}
                placeholder={placeholder}
                className={`${styles.select}`}
                {...register(name, validation)}
            >
                {
                    options.map(({
                        value,
                        label 
                    }) => {
                        return (
                            <option
                                key={value}
                                value={value}
                            >
                                { label }
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select;