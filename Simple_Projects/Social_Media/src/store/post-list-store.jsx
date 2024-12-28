import { createContext, useReducer } from "react";

// const DEFAULT_CONTEXT = {
//     postList: [],
//     addPost: () => { },
//     deletePost: () => { }
// }

const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {
    return currentPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = () => {

    }

    const deletePost = () => {

    }

    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>
        {children}
    </PostList.Provider >
}

export default PostListProvider;