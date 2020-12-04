import {connect} from "react-redux";
import Posts from "./Posts";
import {sendPost, updatePostBody} from "../../../../redux/reducers/profileReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        body: state.profilePage.postBody
    }
}

const PostContainer = connect(mapStateToProps, {updatePostBody, sendPost})(Posts);

export default PostContainer;