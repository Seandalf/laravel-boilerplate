export const isEmptyString = (string: string) => {
    if (typeof string !== "string") {
        return false;
    }

    return (
        string.length === 0 ||
        string === "" ||
        string === "undefined" ||
        string === null
    );
};
