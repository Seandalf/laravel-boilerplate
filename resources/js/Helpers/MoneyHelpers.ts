export const onlyNumber = (e: KeyboardEvent): boolean => {
    let keyCode = e.keyCode ? e.keyCode : e.which;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 45) {
        // 46 is dot, 45 is -
        e.preventDefault();

        return false;
    }

    if (keyCode === 46 && (e.target as HTMLInputElement).value.includes(".")) {
        // 46 is dot. We only need one dot in a number, so if
        // one exists, don't allow another
        e.preventDefault();

        return false;
    }

    if (keyCode === 45 && (e.target as HTMLInputElement).value.length > 0) {
        // 45 is -. We only allow one and it must be at the start
        e.preventDefault();

        return false;
    }

    return true;
};

export const onlyCurrency = (e: KeyboardEvent): void => {
    if (onlyNumber(e)) {
        let number = (e.target as HTMLInputElement).value;
        let split = number.split(".");

        if (split[1] && split[1].length === 2) {
            // If there exists a decimal point and we already have
            // two digits after it, we don't want any more
            e.preventDefault();
        }
    }
};
