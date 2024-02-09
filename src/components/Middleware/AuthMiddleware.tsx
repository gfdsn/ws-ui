import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router";

export default function AuthMiddleware(props: any) {
    const {user} = useContext(AuthContext)
    return user 
        ? 
            props.element
        : 
            (
                localStorage.removeItem('token'),
                <Navigate to="/login"  />
            )
}