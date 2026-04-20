import { useTranslation } from "react-i18next"
import styles from "./UserForm.module.css"
import { Button, Field, Fieldset, Input } from "@chakra-ui/react";
import { useForm, type SubmitHandler } from "react-hook-form"

type UserFormData = {
    firstName: string;
    lastName: string;
    age: string;
    email: string;
    phone: string;
}

export function UserForm() {
    const { t } = useTranslation("userForm");

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<UserFormData>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<UserFormData> = (data) => {
        console.log(data);
    }

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
                                required: "This field is required",
                                minLength: {
                                    value: 2,
                                    message: "At least 2 characters"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Maximum of 20 characters"
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                                    message: "Only letters"
                                }
                            })} />

                        <Field.ErrorText>{errors.firstName?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.lastName}>
                        <Field.Label className={styles.label}>
                            {t("last_name")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none"
                            {...register(
                                "lastName", {
                                setValueAs: (value) => value.trim(),
                                required: "This field is required",
                                minLength: {
                                    value: 2,
                                    message: "At least 2 characters"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Maximum of 20 characters"
                                },
                                pattern: {
                                    value: /^[A-Za-zА-Яа-яЁё]+$/,
                                    message: "Only letters"
                                }
                            })} />

                        <Field.ErrorText>{errors.lastName?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.age}>
                        <Field.Label className={styles.label}>
                            {t("age")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none"
                            {...register(
                                "age", {
                                setValueAs: (value) => value.trim(),
                                required: "This field is required",
                                min: {
                                    value: 0,
                                    message: "The age cannot be less than 0"
                                },
                                max: {
                                    value: 120,
                                    message: "Too old"
                                },
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Only numbers"
                                }
                            })} />

                        <Field.ErrorText>{errors.age?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.email}>
                        <Field.Label className={styles.label}>
                            {t("email")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none" type="email"
                            {...register(
                                "email", {
                                setValueAs: (value) => value.trim(),
                                required: "This field is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Incorrect email address"
                                }
                            })} />

                        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                    </Field.Root>

                    <Field.Root invalid={!!errors.phone}>
                        <Field.Label className={styles.label}>
                            {t("phone")}
                        </Field.Label>

                        <Input py="20px" px="12px" rounded="lg" outline="none" type="tel"
                            {...register(
                                "phone", {
                                setValueAs: (value) => value.trim(),
                                required: "This field is required",
                                pattern: {
                                    value: /^[0-9+\-()\s]+$/,
                                    message: "Incorrect phone number"
                                }
                            })} />

                        <Field.ErrorText>{errors.phone?.message}</Field.ErrorText>
                    </Field.Root>
                </Fieldset.Content>

                <Button variant="primary" type="submit" mt="6">{t("save_button")}</Button>
            </Fieldset.Root>
        </form>
    )
}


