import { createContext, useState} from "react";

export const PostContext = createContext()






export const PostProvider = ({children}) => {
    const [postsArray, setPostsArray] = useState([]);

    return (
        <PostContext.Provider value={{postsArray, setPostsArray}}>
            {children}
        </PostContext.Provider>
    )

}
