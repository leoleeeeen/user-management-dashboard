import type { NormalizedUserData, UserFormData } from "@/api/createUser/types";
import { useEditUser } from "@/api/editUser/useEditUser";
import { useGetUser } from "@/api/getUser/useGetUser";
import { TOASTS } from "@/shared/ui/toaster/config/toastMessages";
import { normalizeUserDataToApi, normalizeUserDataToFormValues } from "@/entities/user/lib/normalizeData";
import { handleLocalSuccessToast } from "@/shared/ui/toaster/model/handleLocalSuccessToast";
import { setField } from "@/entities/user/lib/setField";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function useUserEditionPage() {
    const { t: tToast } = useTranslation("toasts");
    const userId = Number(useParams().userId);

    const { data: user } = useGetUser(userId);

    const {
        mutate,
        isPending
    } = useEditUser(userId);

    const form = useForm<UserFormData>({
        mode: "onChange",
        defaultValues: {
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            phone: ""
        }
    });

    useEffect(() => {
        if (user) {
            form.reset(normalizeUserDataToFormValues(user));
        }
    }, [user, form]);

    const onSubmit: SubmitHandler<UserFormData> = (data) => {

        const normalized = normalizeUserDataToApi(data);
        const changedData: Partial<NormalizedUserData> = {};

        for (const key of Object.keys(form.formState.dirtyFields) as (keyof NormalizedUserData)[]) {
            setField(changedData, key, normalized[key]);
        }

        mutate(changedData, {
            onSuccess: (updatedUser) => {
                form.reset(normalizeUserDataToFormValues(updatedUser));
                handleLocalSuccessToast(
                    TOASTS.USER_EDITED.id,
                    tToast(TOASTS.USER_EDITED.title),
                    tToast(TOASTS.USER_EDITED.description));
            }
        });
    }

    return {
        isPending,
        onSubmit,
        form,
        userId
    }
}