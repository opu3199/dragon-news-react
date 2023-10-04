import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";



const Root = () => {
    return (
        <div className="max-w-7xl  mx-auto my-10">
            <div><Toaster/></div>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;