export const required = value =>{
    if(value) return undefined;
    return 'Field is required';
}

export const MaxLength = (MaxLength) => (value) => {
    if(value.length > MaxLength) return `Max Length is ${MaxLength} symbols`;
    return undefined;
}
