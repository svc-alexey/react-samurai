import React from "react";
import classes from './ProfileData.module.css';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/Forms/FormsContols";

let ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.aboutMe}>
                <strong>Full Name:</strong>
                <Field name={'fullName'} component={Textarea} validate={[]}/>
                <strong>About Me:</strong>
                <Field name={'aboutMe'} component={Textarea} validate={[]}/>
            </div>
            <div className={classes.lookingForAJob}>
                <strong>Looking for a job:</strong>
                <Field name={'lookingForAJob'} component={'input'} type={"checkbox"} validate={[]}/>
            </div>
            <div className={classes.lookingForAJobDescription}>
                <Field name={'lookingForAJobDescription'} component={Textarea} validate={[]}/>
            </div>
            <div className={classes.contacts}>
                <p>My contacts:</p>
                {Object.keys(props.profileData.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}</b>:
                        <Field name={`contacts.` + key} component={Textarea} validate={[]}/>
                    </div>
                })}
            </div>
            {props.error && <div className={classes.errorField}>{props.error}</div>}
            <button className={classes.submitBtn}>Submit</button>
        </form>
    )
}

ProfileDataForm = reduxForm(
    {
        form: 'profile'
    }
)(ProfileDataForm);

export default ProfileDataForm;
