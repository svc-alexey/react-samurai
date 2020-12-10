import {connect} from "react-redux";
import Posts from "./Posts";
import {sendPost} from "../../../../redux/reducers/feedReducer";

let mapStateToProps = (state) => {
    return {
        posts: state.feedPage.posts,
    }
}

const PostContainer = connect(mapStateToProps, {sendPost})(Posts);

export default PostContainer;