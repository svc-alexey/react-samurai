import {connect} from "react-redux";
import Posts from "./Posts";
import {sendPost} from "../../../../redux/reducers/feedReducer";
import {postsSelector} from "../../../../redux/selectors/postsSelectors";

let mapStateToProps = (state) => {
    return {
        posts: postsSelector(state)
    }
}

const PostContainer = connect(mapStateToProps, {sendPost})(Posts);

export default PostContainer;