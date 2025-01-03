import Post from "./Post"
import WelcomeMess from "./WelcomeMess";
import { useLoaderData } from "react-router-dom";

const PostList = () => {

    const postList = useLoaderData();

    return (
        <>
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
        });
}

export default PostList