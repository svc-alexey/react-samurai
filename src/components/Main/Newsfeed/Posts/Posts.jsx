import React from "react";
import classes from './Posts.module.css';
import photo from "../../../../assets/img/photo.jpg";
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {MaxLength, required} from "../../../../utilities/validators/validators";
import {Textarea} from "../../../../common/FormsContols";

const Posts = (props) => {
    let postElements = props.posts.map(post => <Post key={post.id} id={post.id} postLabel={post.postLabel}
                                                     postText={post.postText}/>);
    let sendPost = (value) => {
        debugger
        props.sendPost(value.newPostText);
    }
    return (
        <div>
            <PostsForm onSubmit={sendPost}/>
            {postElements}
        </div>
    )
}

let MaxLength30 = MaxLength(30);

let PostsForm = (props) => {
    return (
        <div className={classes.posts}>
            <form className={classes.addPost} onSubmit={props.handleSubmit}>
                <div className={classes.addPostPhoto}>
                    <img src={photo} alt="photouser"/>
                </div>
                <Field name={"newPostText"} component={Textarea} validate={[required, MaxLength30]}/>
                <button className={classes.addNewPost}>Add Post</button>
            </form>
        </div>
    )
}

PostsForm = reduxForm({
    form: 'addPostsForm'
})(PostsForm);

export default Posts;