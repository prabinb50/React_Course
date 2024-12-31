import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store"
import WelcomeMess from "./WelcomeMess";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);

    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        setFetching(true);

        const controller = new AbortController(); // used advanced useEffect
        const signal = controller.signal;

        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
                setFetching(false);
            });

        return () => {
            controller.abort();
        }
    }, []);

    return (
        <>
            {fetching && <LoadingSpinner></LoadingSpinner>}
            {!fetching && postList.length === 0 && <WelcomeMess></WelcomeMess>}
            {!fetching && postList.map((post) => <Post key={post.id} post={post}></Post>)}
        </>
    )
}

export default PostList