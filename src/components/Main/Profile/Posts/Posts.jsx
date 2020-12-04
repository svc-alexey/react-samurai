import React from "react";
import classes from './Posts.module.css';
import photo from "../../../../assets/img/photo.jpg";
import Post from "../Post/Post";
import {sendPost, updatePostBody} from "../../../../redux/reducers/profileReducer";

const Posts = (props) => {
    let newPostElement = React.createRef();

    let postElements = props.posts.map(post => <Post key={post.id} id={post.id} postLabel={post.postLabel}
                                                     postText={post.postText}/>);
    let addPost = () => {
        props.sendPost();
    }
    let changePost = () => {
        debugger
        let text = newPostElement.current.value;
        props.updatePostBody(text);
    };
    return (
        <div className={classes.posts}>
            <div className={classes.addPost}>
                <div className={classes.addPostPhoto}>
                    <img src={photo} alt="photouser"/>
                </div>
                <textarea onChange={changePost} ref={newPostElement} value={props.body} cols="40" rows="3"/>
                <button className={classes.addNewPost} onClick={addPost}>Add Post</button>
            </div>
            {postElements}
        </div>
    )
}

export default Posts;