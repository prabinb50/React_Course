import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMess from "./WelcomeMess";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);

    const handleGetPostsClick = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
            });
    }

    return (
        <>
            {postList.length === 0 && <WelcomeMess onGetPostsClick={handleGetPostsClick}></WelcomeMess>}
            {postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
    )

}

export default PostList