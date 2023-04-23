import { createContext, userReducer } from "react";

export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN' :  
            return {userLoggedIn: action.payload}
        case 'REGISTER' :  
            return {userLoggedIn: action.payload}
        case 'LOGOUT':
            return { userLoggedIn: null}
        default:
            return state
    }

}

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        userLoggedIn: null
    })

    console.log('Auth Context state: ', state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}