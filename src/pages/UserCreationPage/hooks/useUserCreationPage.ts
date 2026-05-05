import { useForm, type SubmitHandler } from "react-hook-form";
import { normalizeUserDataToApi } from "@/utils/normalizeData";
import { useCreateUser } from "@/api/createUser/useCreateUser";
import { handleLocalSuccessToast } from "@/utils/handleLocalSuccessToast";
import { TOASTS } from "@/components/UI/Toaster/toastMessages";
import { useTranslation } from "react-i18next";
import type { UserFormData } from "@/api/createUser/types";
import { addUserImgLink } from "@/utils/addUserImgLink";

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
        const normalized = normalizeUserDataToApi(data);
        const withImg = addUserImgLink(normalized);

        mutate(withImg, {
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