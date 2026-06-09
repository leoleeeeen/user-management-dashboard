import { toaster } from "@/shared/ui/toaster/model/toasterCreate";

export const handleLocalSuccessToast = (id: string, title: string, description: string) => {
    toaster.create({
        id,
        title,
        description,
        type: "success",
        closable: true
    });
}


