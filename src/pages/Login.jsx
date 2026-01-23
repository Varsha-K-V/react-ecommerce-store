import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";


export default function Login(){
    const [email,setEmail] = useState("");
    const {login} = useAuth();
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        login(email);
        navigate("/");
    }

    return (
        <div className="login-page">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}