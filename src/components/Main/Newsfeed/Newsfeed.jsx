import React from "react";
import classes from './Newsfeed.module.css';
import PostContainer from "./Posts/PostsContainer";

const Newsfeed = (props) => {
    return (
        <div className={classes.wrap}>
            <PostContainer/>
        </div>
    )
}

export default Newsfeed;
