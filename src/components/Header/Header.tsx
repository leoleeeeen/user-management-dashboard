import styles from "./Header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <p className={styles.project_name}>User Management Dashboard</p>
            </div>
        </header>
    )
}


