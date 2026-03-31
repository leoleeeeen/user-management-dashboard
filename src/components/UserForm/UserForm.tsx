import styles from "./UserForm.module.css"

export function UserForm() {
    return (
        <form className={styles.form}>
            <div className={styles.inputs}>
                <label htmlFor="username"><strong>Name</strong>
                    <input
                        type="text"
                        id="username"
                        className="input" />
                </label>
                <label htmlFor="email"><strong>Email</strong>
                    <input
                        type="email"
                        id="email"
                        className="input" />
                </label>
                <label htmlFor="age"><strong>Age</strong>
                    <input
                        type="number"
                        id="age"
                        className="input" />
                </label>
                <label htmlFor="phone"><strong>Phone</strong>
                    <input
                        type="tel"
                        id="phone"
                        className="input" />
                </label>
            </div>
            <button className="button">Save</button>
        </form>
    )
}


