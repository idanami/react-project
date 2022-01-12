export const updateZipCodeAction = (value, isValid) => ({
    type: 'UPDATE_ZIPCODE',
    value,
    isValid
});
export const updateAgeAction = (value, isValid) => ({
    type: 'UPDATE_AGE',
    value,
    isValid
});
export const updateStatusAction = (value, isChecked) => ({
    type: 'UPDATE_STATUS',
    value,
    isChecked
});
