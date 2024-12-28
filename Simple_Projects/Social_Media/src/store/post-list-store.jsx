import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currentPostList, action) => {
    return currentPostList;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

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