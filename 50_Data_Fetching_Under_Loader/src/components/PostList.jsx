import { useContext } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMess from "./WelcomeMess";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

    const postList = useLoaderData();

    // const { postList } = useContext(PostListData);

    return (
        <>
            {/* {fetching && <LoadingSpinner></LoadingSpinner>} */}
            {postList.length === 0 && <WelcomeMess></WelcomeMess>}
            {postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
    )
}

export const postLoader = () => {
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            return data.posts;
            // addInitialPosts(data.posts);
            // setFetching(false);
        });
}

export default PostList