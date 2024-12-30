import { useContext, useEffect } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMess from "./WelcomeMess";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
            });
    }, []);

    return (
        <>
            {postList.length === 0 && <WelcomeMess></WelcomeMess>}
            {postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
    )
}

export default PostList