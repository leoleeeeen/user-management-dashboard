import type { UserFormData } from "@/api/createUser/types";
import { Field, Input } from "@chakra-ui/react";
import type { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { useTranslation } from "react-i18next";

export type FieldConfig = {
    name: keyof UserFormData;
    i18nKey: string;
    options: Partial<RegisterOptions<UserFormData, keyof UserFormData>> | undefined;
}

type UserFormFieldProps = {
    fieldConfig: FieldConfig;
    errors: FieldErrors<UserFormData>;
    register: UseFormRegister<UserFormData>;
}

export function UserFormField({ fieldConfig, errors, register }: UserFormFieldProps) {
    const { t } = useTranslation("userForm");
    const fieldName: keyof UserFormData = fieldConfig.name;

    return (
        <Field.Root invalid={!!errors[fieldName]}>
            <Field.Label fontSize="16px" fontWeight="600">
                {t(fieldConfig.i18nKey)}
            </Field.Label>

            <Input py="20px" px="12px" rounded="lg" outline="none"
                {...register(fieldName, fieldConfig.options)} />

            <Field.ErrorText>{errors[fieldName]?.message && t(errors[fieldName].message)}</Field.ErrorText>
        </Field.Root>
    )
}

