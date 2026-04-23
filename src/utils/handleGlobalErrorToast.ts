import { toaster } from "@/components/UI/Toaster/toasterCreate";

export const handleGlobalErrorToast = (error: Error, title: string) => {
    toaster.create({
        id: "global-error",
        title: title,
        description: error.message,
        type: "error",
        closable: true
    });
};