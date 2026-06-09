import { useForm, type SubmitHandler } from "react-hook-form";
import { normalizeUserDataToApi } from "@/entities/user/lib/normalizeData";
import { useCreateUser } from "@/api/createUser/useCreateUser";
import { handleLocalSuccessToast } from "@/shared/ui/toaster/model/handleLocalSuccessToast";
import { TOASTS } from "@/shared/ui/toaster/config/toastMessages";
import { useTranslation } from "react-i18next";
import type { UserFormData } from "@/api/createUser/types";
import { addUserImgLink } from "@/pages/user-creation-page/model/addUserImgLink";

export function useUserCreationPage() {
    const { t } = useTranslation("toasts");

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
                    t(TOASTS.USER_CREATED.title),
                    t(TOASTS.USER_CREATED.description));
            }
        });
    }

    return {
        isPending,
        onSubmit,
        form,
    }
}