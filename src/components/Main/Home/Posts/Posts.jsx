import React from "react";
import classes from './Posts.module.css';
import photo from "../../../../img/photo.jpg";
import Post from "../Post/Post";

const Posts = (props) => {
    let newPostElement = React.createRef();

    let postElements = props.posts.map(post => <Post id={post.id} postLabel={post.postLabel}
                                                     postText={post.postText}/>);
    let addPost = () => {
        props.send();
    }
    let changePost = () => {
        debugger
        let text = newPostElement.current.value;
        props.updatePost(text);
    };
    return (
        <div className={classes.posts}>
            <div className={classes.addPost}>
                <div className={classes.addPostPhoto}>
                    <img src={photo} alt="photo"/>
                </div>
                <textarea onChange={changePost} ref={newPostElement} value={props.body} cols="40" rows="3"/>
                <button className={classes.addNewPost} onClick={addPost}>Add Post</button>
            </div>
            {postElements}
        </div>
    )
}

export default Posts;