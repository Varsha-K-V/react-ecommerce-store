import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const[user,setUser] = useState(()=>{
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    function login(email){
        const rawName = email.split("@")[0];
        const capitalizedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
        const userData={
            email,
            name:capitalizedName
        };
        setUser(userData);
        localStorage.setItem("user",JSON.stringify(userData));
        console.log(JSON.parse(localStorage.getItem("user"))
)
    }

    function logout(){
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    );


}
export function useAuth(){
    return useContext(AuthContext);
}