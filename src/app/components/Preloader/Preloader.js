import styles from "./style.module.scss"

const Preloader = ({
    showPreloader = true
}) => {
    return (
        <div className={`${styles.wrapper} ${!showPreloader ? styles.hidden : ""}`}>
            <div className={styles.inner}>
                <div
                    className={styles.icon_wrapper}
                >
                    <img
                        src="./icons/icon-police-car.svg"
                        className={styles.icon}
                    />
                </div>
                <div className={styles.title}>
                    Loading
                    <span className={`${styles['dot']} ${styles['dot-one']}`}> .</span>
                    <span className={`${styles['dot']} ${styles['dot-two']}`}> .</span>
                    <span className={`${styles['dot']} ${styles['dot-three']}`}> .</span>
                </div>

                <div className={styles.text}>
                    <div>
                        © 2024 Cyberpolice. All Rights Reserved.
                    </div>
                    <div>
                        Disclaimer: This website is owned and operated by the Cyberpolice department.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;