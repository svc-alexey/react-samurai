import React from "react";
import classes from "./FormsControls.module.css";


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl}>
            <textarea {...input} {...props}/>
            <div>{hasError ? <span className={classes.error}>{meta.error}</span> : null}</div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl}>
            <input {...input} {...props} className={(hasError ? classes.errorInput : classes.noError)}/>
            <div>{hasError ? <span className={classes.error}>{meta.error}</span> : null}</div>
        </div>
    )
}