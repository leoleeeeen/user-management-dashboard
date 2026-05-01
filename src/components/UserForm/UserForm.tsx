import { useTranslation } from "react-i18next"
import styles from "./UserForm.module.css"
import { Button, Field, Fieldset, Input, Spinner } from "@chakra-ui/react";
import type { UserFormProps } from "./types";

export function UserForm({ isPending, form, onSubmit }: UserFormProps) {
    const { t } = useTranslation("userForm");

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset.Root className={styles.form}>
                <Fieldset.Content display="flex" gap="3" flexDirection="column">
                    <Field.Root invalid={!!errors.firstName}>
                        <Field.Label className={styles.label}>
                            {t("first_name")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none"
                            {...register(
                                "firstName", {
                                setValueAs: (value) => value.trim(),
                                required: "validation.required",
                                minLength: {
                                    value: 2,
                                    message: "validation.name.min_length"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "validation.name.max_length"
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                                    message: "validation.name.only_letters"
                                }
                            })} />

                        <Field.ErrorText>{errors.firstName?.message && t(errors.firstName.message)}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.lastName}>
                        <Field.Label className={styles.label}>
                            {t("last_name")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none"
                            {...register(
                                "lastName", {
                                setValueAs: (value) => value.trim(),
                                required: "validation.required",
                                minLength: {
                                    value: 2,
                                    message: "validation.name.min_length"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "validation.name.max_length"
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                                    message: "validation.name.only_letters"
                                }
                            })} />

                        <Field.ErrorText>{errors.lastName?.message && t(errors.lastName.message)}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.age}>
                        <Field.Label className={styles.label}>
                            {t("age")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none"
                            {...register(
                                "age", {
                                setValueAs: (value) => value.trim(),
                                required: "validation.required",
                                min: {
                                    value: 0,
                                    message: "validation.age.min_age"
                                },
                                max: {
                                    value: 120,
                                    message: "validation.age.max_age"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "validation.age.only_numbers"
                                }
                            })} />

                        <Field.ErrorText>{errors.age?.message && t(errors.age.message)}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.email}>
                        <Field.Label className={styles.label}>
                            {t("email")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none" type="email"
                            {...register(
                                "email", {
                                setValueAs: (value) => value.trim(),
                                required: "validation.required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "validation.email.incorrect_email"
                                }
                            })} />

                        <Field.ErrorText>{errors.email?.message && t(errors.email.message)}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.phone}>
                        <Field.Label className={styles.label}>
                            {t("phone")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none" type="tel"
                            {...register(
                                "phone", {
                                setValueAs: (value) => value.trim(),
                                required: "validation.required",
                                pattern: {
                                    value: /^[0-9+\-()\s]+$/,
                                    message: "validation.phone.incorrect_phone"
                                }
                            })} />

                        <Field.ErrorText>{errors.phone?.message && t(errors.phone.message)}</Field.ErrorText>
                    </Field.Root>
                </Fieldset.Content>

                <Button
                    variant="primary"
                    type="submit"
                    mt="6"
                    loading={isPending ? true : false}
                    spinner={<Spinner size="sm" color="white" />}>{t("save_button")}</Button>
            </Fieldset.Root>
        </form>
    )
}


