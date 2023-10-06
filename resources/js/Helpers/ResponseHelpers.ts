import IErrorList from "@/Interfaces/IErrorList";

export const resetErrorList = (errors: IErrorList) => {
    for (const index in errors) {
        errors[index] = null;
    }
};

export const hasErrors = (errors: IErrorList): boolean => {
    for (const index in errors) {
        if (errors[index] !== null) {
            return true;
        }
    }

    return false;
};
