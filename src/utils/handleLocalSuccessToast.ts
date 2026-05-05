import { toaster } from "@/components/UI/Toaster/toasterCreate";

export const handleLocalSuccessToast = (id: string, title: string, description: string) => {
    toaster.create({
        id,
        title,
        description,
        type: "success",
        closable: true
    });
}


