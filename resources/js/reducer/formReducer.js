export const formInitialState = {
    values: {
        zipCode: '',
        age: '',
        status: {
            isMarried: false,
            isCurrentlyInsured: false,
            isOwnMultipleVehicles: false,
            isOwnHome: false,
        },
    },
    validities: {
        isZipCodeValid: true,
        isAgeValid: true,
    },
    isFormValid: false,
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_ZIPCODE':{
            const updatedValues = {...state.values, zipCode: action.value};
            const updatedValidities = {...state.validities, isZipCodeValid: action.isValid};
            updatedValidities.isAgeValid = updatedValues.age === '' ? false : true;
            const updatedIsFormValid = (updatedValidities.isAgeValid && updatedValidities.isZipCodeValid);
            return {companies: {...state.companies}, values: updatedValues, validities: updatedValidities, isFormValid: updatedIsFormValid}
        }
        case 'UPDATE_AGE':
            const updatedValues = {...state.values, age: action.value};
            const updatedValidities = {...state.validities, isAgeValid: action.isValid};
            updatedValidities.isZipCodeValid = updatedValues.zipCode === '' ? false : true;
            const updatedIsFormValid = (updatedValidities.isAgeValid && updatedValidities.isZipCodeValid);
            return {companies: {...state.companies}, values: updatedValues, validities: updatedValidities, isFormValid: updatedIsFormValid}
        case 'UPDATE_STATUS': {
            const updatedValues = {...state.values};

            switch(action.value){
                case 'MARRIED':
                    updatedValues.status.isMarried = action.isChecked;
                    break;
                case 'INSURED':
                    updatedValues.status.isCurrentlyInsured = action.isChecked;
                    break;
                case 'MULTIPLE_VEHICLES':
                    updatedValues.status.isOwnMultipleVehicles = action.isChecked;
                    break;
                case 'HOME':
                    updatedValues.status.isOwnHome = action.isChecked;
                    break;
                default: return {...state}

            }
        }
        default: return {...state}
    }
}
