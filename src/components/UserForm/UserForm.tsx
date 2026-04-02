import { useTranslation } from "react-i18next"
import styles from "./UserForm.module.css"
import { Button, Field, Fieldset, Input } from "@chakra-ui/react";

export function UserForm() {
    const { t } = useTranslation("userForm");
    return (
        <form>
            <Fieldset.Root className={styles.form}>
                <Fieldset.Content display="flex" gap="3" flexDirection="column">
                    <Field.Root>
                        <Field.Label className={styles.label}>
                            {t("name")}
                        </Field.Label>
                        <Input className="input" />
                        <Field.ErrorText>...</Field.ErrorText>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label className={styles.label}>
                            {t("last_name")}
                        </Field.Label>
                        <Input className="input" />
                        <Field.ErrorText>...</Field.ErrorText>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label className={styles.label}>
                            {t("age")}
                        </Field.Label>
                        <Input className="input" />
                        <Field.ErrorText>...</Field.ErrorText>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label className={styles.label}>
                            {t("email")}
                        </Field.Label>
                        <Input className="input" type="email" />
                        <Field.ErrorText>...</Field.ErrorText>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label className={styles.label}>
                            {t("phone")}
                        </Field.Label>
                        <Input className="input" />
                        <Field.ErrorText>...</Field.ErrorText>
                    </Field.Root>
                </Fieldset.Content>
                <Button variant="primary" type="submit" mt="6">{t("save_button")}</Button>
            </Fieldset.Root>
        </form>
    )
}


