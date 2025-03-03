import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {

    let newPostList = currentPostList;

    if (action.type === 'DELETE_POST') {
        newPostList = currentPostList.filter(post => post.id !== action.payload.postId)
    } else if (action.type === 'ADD_POST') {
        newPostList = [action.payload, ...currentPostList];
    }
    return newPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reactions, tags) => {
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id: Date.now(),
                title: postTitle,
                body: postBody,
                reaction: reactions,
                userId: userId,
                tags: tags
            }
        })

    }

    const deletePost = (postId) => {
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId: postId
            }
        })
    }

    return <PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>
        {children}
    </PostList.Provider >
}

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to America',
    body: 'Hi Friends, I am going to America for my vacations.',
    reaction: 2,
    userId: 'user-9',
    tags: ['Vacation', 'America', 'Enjoying']
},
{
    id: '2',
    title: 'Prabin Joshi',
    body: 'My permanent address is Dhangdhai, Kailali.',
    reaction: 5,
    userId: 'user-11',
    tags: ['Address', 'Name']
}]

export default PostListProvider;