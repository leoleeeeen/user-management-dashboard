import { useForm, type SubmitHandler } from "react-hook-form";
import { normalizeUserData } from "@/utils/buildUserDataPayload";
import { useCreateUser } from "@/api/createUser/useCreateUser";
import { handleLocalSuccessToast } from "@/utils/handleLocalSuccessToast";
import { TOASTS } from "@/components/UI/Toaster/toastMessages";
import { useTranslation } from "react-i18next";
import type { UserFormData } from "@/api/createUser/types";

export function useUserCreationPage() {
    const { t: tToast } = useTranslation("toasts");

    const {
        mutate,
        isPending
    } = useCreateUser();

    const form = useForm<UserFormData>({
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<UserFormData> = (data) => {
        const normalized = normalizeUserData(data);
        mutate(normalized, {
            onSuccess: () => {
                form.reset();
                handleLocalSuccessToast(
                    TOASTS.USER_CREATED.id,
                    tToast(TOASTS.USER_CREATED.title),
                    tToast(TOASTS.USER_CREATED.description));
            }
        });
    }

    return {
        isPending,
        onSubmit,
        form,
    }
}