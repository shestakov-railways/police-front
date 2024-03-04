'use client'

import styles from "./style.module.scss"

const Footer = ({
    noBackground = false
}) => {
    return (
        <footer
            className={`${styles.block} ${noBackground ? styles.no_background : ""}`}
        >
            <div>
                © { new Date().getFullYear() } Cyber Police. All Rights Reserved.
            </div>
            
            <div>
                Disclaimer: This website is owned and operated by the Cyber Police department.
            </div>
        </footer>
    )
}

export default Footer;