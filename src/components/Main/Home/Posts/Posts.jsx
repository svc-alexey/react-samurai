import React from "react";
import classes from './Posts.module.css';
import photo from "../../../../img/photo.jpg";
import Post from "../Post/Post";

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div className={classes.addPost}>
                <div className={classes.addPostPhoto}>
                    <img src={photo} alt="photo"/>
                </div>
                <textarea cols="40" rows="3"/>
                <button className={classes.addNewPost}>Add Post</button>
            </div>
            <Post postlabel={'First Post'} postText={'Hello its my first post'}/>
            <Post postlabel={'Second Post'} postText={'Yo-Yo-Yo'}/>
        </div>
    )
}

export default Posts;