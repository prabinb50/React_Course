import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMess from "./WelcomeMess";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const { postList, fetching } = useContext(PostListData);

    return (
        <>
            {fetching && <LoadingSpinner></LoadingSpinner>}
            {!fetching && postList.length === 0 && <WelcomeMess></WelcomeMess>}
            {!fetching && postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
    )
}

export default PostList