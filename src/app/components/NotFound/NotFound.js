import styles from "./style.module.scss"

const NotFound = () => {
    return (
        <div className={styles.block}>
            <h1>
                404<br />
                Page not found
            </h1>
        </div>
    )
}

export default NotFound;