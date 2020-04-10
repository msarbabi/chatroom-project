import { toast } from "react-toastify";

export const successMessage = (message) => {
    toast.success(`${message}`, {
        position: "top-right",
        onClose: true,
    });
};

export const errorMessege = (message) => {
    toast.error(`${message}`, {
        position: "top-right",
        onClose: true,
    });
};
