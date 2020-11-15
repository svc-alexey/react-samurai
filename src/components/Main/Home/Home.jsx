import React from "react";
import classes from './Home.module.css';
import photo from "../../../img/photo.jpg";
import PostsContainer from "./Posts/PostsContainer";

const Home = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.userProfile}>
                <div className={classes.profilePhoto}>
                    <img src={photo} alt="photo"/>
                </div>
                <p className={classes.userName}>Alexey Shvecov</p>
                <div className={classes.follows}>
                    <div className={classes.followsItems}>
                        <p>Following</p>
                        <div className={classes.count}>55</div>
                    </div>
                    <div className={classes.followsItems}>
                        <p>Follovers</p>
                        <div className={classes.count}>23</div>
                    </div>
                </div>
            </div>
            <PostsContainer/>
        </div>
    )
}

export default Home;