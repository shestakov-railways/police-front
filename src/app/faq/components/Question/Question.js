'use client'

import styles from "./style.module.scss"
import { useState }from "react"

const Question = ({
    question = "",
    text = ""
}) => {
    const [opened, setOpened] = useState(false);
    const toggleOpened = () => setOpened(!opened);

    return (
        <div className={styles.block}>
            <div
                className={styles.question}
                onClick={toggleOpened}
            >
                { question }
            </div>
            <div
                className={`${styles.text} ${opened ? styles.opened : styles.closed}`}
            >
                { text }
            </div>
        </div>
    )
}

export default Question;