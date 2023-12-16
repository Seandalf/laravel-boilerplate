import { onlyNumber } from "./NumberHelpers";

export const onlyCurrency = (e: KeyboardEvent): void => {
    if (onlyNumber(e)) {
        const number = (e.target as HTMLInputElement).value;
        const split = number.split(".");

        if (split[1] && split[1].length === 2) {
            // If there exists a decimal point and we already have
            // two digits after it, we don't want any more
            e.preventDefault();
        }
    }
};
