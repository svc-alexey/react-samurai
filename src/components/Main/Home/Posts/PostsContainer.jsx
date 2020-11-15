import React from "react";
import {connect} from "react-redux";
import Posts from "./Posts";
import {sendPost, updatePostBody} from "../../../../redux/reducers/postReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts,
        body: state.postsPage.postBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (body) => {
            dispatch(updatePostBody(body));
        },
        send: () => {
            dispatch(sendPost());
        }
    }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostContainer;