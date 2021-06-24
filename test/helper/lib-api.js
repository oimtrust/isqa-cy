import url from "url";

export const getParams = (parameter) => {
    const params = new url.URLSearchParams(parameter);
    return params;
}