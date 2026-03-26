import styles from "./UserList.module.css"

export function UserList() {
    return (
        <div className={styles.content}>
            <form className={styles.search_form}>
                <input className={styles.input} placeholder="Enter a name" />
                <button className="button">Search</button>
            </form>
            <div className={styles.user_card_container}>
                <div className={styles.user_card}>
                    <span><strong>Pupa</strong>, 18 – Lupa@email.ru</span>
                    <div className={styles.button_container}>
                        <button className="button">View</button>
                        <button className="button_secondary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

