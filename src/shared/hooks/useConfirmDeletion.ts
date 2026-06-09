import { useDeleteUser } from "@/api/deleteUser/useDeleteUser";
import { TOASTS } from "@/shared/ui/toaster/config/toastMessages";
import { handleLocalSuccessToast } from "@/shared/ui/toaster/model/handleLocalSuccessToast";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const useConfirmDeletion = () => {
    const { mutate } = useDeleteUser();
    const { t } = useTranslation("toasts");
    const navigate = useNavigate();

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
                navigate("/");
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