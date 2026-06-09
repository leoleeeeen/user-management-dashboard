import { useTranslation } from "react-i18next"
import { Button, Fieldset, Spinner } from "@chakra-ui/react";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import type { UserFormData } from "@/api/createUser/types";
import { USER_FORM_CONFIGS } from "../model/userFormConfigs";
import { UserFormField } from "./UserFormField";

export type UserFormProps = {
    isPending: boolean;
    form: UseFormReturn<UserFormData>;
    onSubmit: SubmitHandler<UserFormData>;
}

export function UserForm({ isPending, form, onSubmit }: UserFormProps) {
    const { t } = useTranslation("userForm");

    const { register, handleSubmit, formState: { errors } } = form;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Fieldset.Root
                my="10px"
                mx="auto"
                maxW="600px"
                display="flex"
                flexDirection="column">
                <Fieldset.Content display="flex" gap="3" flexDirection="column">
                    {USER_FORM_CONFIGS.map((fieldConfig) =>
                        <UserFormField
                            key={fieldConfig.name}
                            fieldConfig={fieldConfig}
                            register={register}
                            errors={errors} />
                    )}
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


