import type { UserFormData } from "@/api/createUser/types";
import { handleLocalSuccessToast } from "@/utils/handleLocalSuccessToast";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import type { MutateFunction, ToastMessage } from "../types";

export function useUserForm(mutate: MutateFunction, toastMessage: ToastMessage) {
    const { t: tToast } = useTranslation("toasts");

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
        }
    } = useForm<UserFormData>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<UserFormData> = (data) => {
        mutate(data, {
            onSuccess: () => {
                reset();
                handleLocalSuccessToast(
                    toastMessage.id,
                    tToast(toastMessage.title),
                    tToast(toastMessage.description));
            }
        });
    }

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    }
}