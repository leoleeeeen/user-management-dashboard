import { useDeleteUser } from "@/api/deleteUser/useDeleteUser";
import { TOASTS } from "@/components/UI/Toaster/toastMessages";
import { handleLocalSuccessToast } from "@/utils/handleLocalSuccessToast";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useConfirmDeletion = () => {
    const { mutate } = useDeleteUser();
    const { t } = useTranslation("toasts");

    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    const handleDeleteUser = (userId: number) => {
        setIsConfirmOpen(true);
        setSelectedUserId(userId);
    }

    const handleConfirmDelete = () => {
        if (selectedUserId === null) return;
        mutate(selectedUserId, {
            onSuccess: () => {
                setIsConfirmOpen(false);
                setSelectedUserId(null);
                handleLocalSuccessToast(
                    TOASTS.USER_DELETED.id,
                    t(TOASTS.USER_DELETED.title),
                    t(TOASTS.USER_DELETED.description));
            }
        });
    }

    const handleCloseModal = () => {
        setIsConfirmOpen(false);
        setSelectedUserId(null);
    }

    return {
        isConfirmOpen,
        handleDeleteUser,
        handleConfirmDelete,
        handleCloseModal
    }
}