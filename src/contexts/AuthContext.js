import React, { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [token, setToken] = useState(false)
    const [user, setUser] = useState('')

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;