import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {

    let newPostList = currentPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    } else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    const addPost = (post) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: post
        })
    }

    const addInitialPosts = (posts) => {
        dispatchPostList({
            type: 'ADD_INITIAL_POSTS',
            payload: {
                posts: posts
            }
        })
    }

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId: postId
            }
        })
    }, [dispatchPostList]
    )

    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>
        {children}
    </PostList.Provider >
}

export default PostListProvider;