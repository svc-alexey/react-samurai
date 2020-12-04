import React from "react";
import classes from './Post.module.css';
import photo from "../../../../assets/img/photo.jpg";

const Post = (props) => {
    return (
        <div>
            <div className={classes.userPost}>
                <div className={classes.userInfo}>
                    <div className={classes.addPostPhoto}>
                        <img src={photo} alt="photouser"/>
                    </div>
                    <div className={classes.someUser}>
                        <p>Alexey Shvecov</p>
                        <p className={classes.time}>3 minutes ago</p>
                    </div>
                </div>
                <div className={classes.postText}>
                    <p>{props.postLabel}</p>
                    <p>{props.postText}</p>
                </div>
            </div>
        </div>
    )
}

export default Post;