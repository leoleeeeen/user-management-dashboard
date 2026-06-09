import type { FieldConfig } from "../ui/UserFormField";

export const USER_FORM_CONFIGS: FieldConfig[] = [
    {
        name: "firstName",
        i18nKey: "first_name",
        options: {
            setValueAs: (value: string) => value.trim(),
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
        }
    },
    {
        name: "lastName",
        i18nKey: "last_name",
        options: {
            setValueAs: (value: string) => value.trim(),
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
        }
    },
    {
        name: "age",
        i18nKey: "age",
        options: {
            setValueAs: (value: string) => value.trim(),
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
        }
    },
    {
        name: "email",
        i18nKey: "email",
        options: {
            setValueAs: (value: string) => value.trim(),
            required: "validation.required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "validation.email.incorrect_email"
            }
        }
    },
    {
        name: "phone",
        i18nKey: "phone",
        options: {
            setValueAs: (value: string) => value.trim(),
            required: "validation.required",
            pattern: {
                value: /^[0-9+\-()\s]+$/,
                message: "validation.phone.incorrect_phone"
            }
        }
    }
]