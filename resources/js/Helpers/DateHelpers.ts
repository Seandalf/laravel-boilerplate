import { onlyNumber } from "./NumberHelpers";

export const onlyBetweenRange = (
    e: KeyboardEvent,
    min = 0,
    max = 999999999
): void => {
    if (onlyNumber(e) === true) {
        const inputNumber = (e.target as HTMLInputElement).value.toString();

        // Can't have more digits than is allowed
        if (inputNumber.length === max.toString().length) {
            e.preventDefault();
        }

        const number = parseInt(
            (e.target as HTMLInputElement).value.toString() + e.key.toString()
        );

        // If somehow the number is not a number, then don't allow it
        if (isNaN(number)) {
            e.preventDefault();
            return;
        }

        if (number > max) {
            e.preventDefault();
            return;
        }

        if (number < min) {
            e.preventDefault();
            return;
        }
    }
};

export const onlyDayField = (e: KeyboardEvent) => {
    // 0 is to allow for DD format - e.g. 01
    onlyBetweenRange(e, 0, 31);
};

export const onlyMonthField = (e: KeyboardEvent) => {
    // 0 is to allow for MM format - e.g. 01
    onlyBetweenRange(e, 0, 12);
};

export const onlyYearField = (e: KeyboardEvent) => {
    onlyBetweenRange(e, 1, 2999);
};

export const getMaximumDateFromMonthAndYear = (
    month: number | string,
    year: number | string
): number => {
    // If we can't parse the month or year into a numeric value, return 31 as default

    if (
        (typeof month === "string" && isNaN(parseInt(month))) ||
        (typeof year === "string" && isNaN(parseInt(year)))
    ) {
        return 31;
    }

    const monthValue = typeof month === "string" ? parseInt(month) : month;
    const yearValue = typeof year === "string" ? parseInt(year) : year;

    // 30 days hath Sep, Apr, Jun, Nov
    // All the rest have 31
    // except Feb who is 28 or 29 to introduce programming complexity

    const thirtyDayMonths = [9, 4, 6, 11];
    const thirtyOneDayMonths = [1, 3, 5, 7, 8, 10, 12];
    const february = 2;

    if (thirtyDayMonths.includes(monthValue)) {
        return 30;
    }

    if (thirtyOneDayMonths.includes(monthValue)) {
        return 31;
    }

    if (monthValue === february) {
        return isLeapYear(yearValue) ? 29 : 28;
    }

    return 31;
};

export const isLeapYear = (year: number): boolean => {
    // A year is a leap year if:
    // Divisible by 4
    // but NOT divisible by 100, UNLESS it is divisible by 400
    // Leap year rules are fucking stupid

    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }

    return false;
};

export const isDateValid = (
    day: number | string,
    month: number | string,
    year: number | string
): boolean => {
    if (
        (typeof day === "string" && isNaN(parseInt(day))) ||
        (typeof month === "string" && isNaN(parseInt(month))) ||
        (typeof year === "string" && isNaN(parseInt(year)))
    ) {
        return false;
    }

    // Doing this because typescript is dumb
    const dayValue = day as number;
    const monthValue = month as number;
    const yearValue = year as number;

    const maximumDate = getMaximumDateFromMonthAndYear(month, year);

    if (dayValue > maximumDate || dayValue < 1) {
        return false;
    }

    if (monthValue < 1 || monthValue > 12) {
        return false;
    }

    if (yearValue < 1901 || yearValue > 2999) {
        return false;
    }

    return true;
};
