//min value for installments
function getMinValue() {
    const _minValue = 50;
    Object.freeze(_minValue);
    return _minValue
}

export const rules = {
    getMinValue
}