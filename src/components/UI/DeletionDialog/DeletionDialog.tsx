import { Dialog, Button, Portal, CloseButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type DeletionDialogProps = {
    confirm: () => void;
    cancel: () => void;
    isOpen: boolean;
}

export function DeletionDialog({ confirm, cancel, isOpen }: DeletionDialogProps) {
    const { t } = useTranslation("confirmDeletion");

    return (
        <Dialog.Root
            open={isOpen}
            onOpenChange={cancel}
            placement="center"
            motionPreset="slide-in-bottom"
        >
            <Portal>
                <Dialog.Backdrop />

                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>{t("confirm_title")}</Dialog.Title>
                        </Dialog.Header>

                        <Dialog.Body>
                            <p>
                                {t("confirm_body")}
                            </p>
                        </Dialog.Body>

                        <Dialog.Footer>
                            <Button
                                onClick={confirm}
                                variant="delete">
                                {t("delete_button")}
                            </Button>

                            <Dialog.ActionTrigger asChild>
                                <Button
                                    onClick={cancel}
                                    variant="secondary">
                                    {t("cancel_button")}
                                </Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>

                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}
