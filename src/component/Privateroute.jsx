import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    console.log(location)
    if(loading){
        return <span className="loading  loading-bars loading-lg"></span>
    }


    if(user){
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default Privateroute;