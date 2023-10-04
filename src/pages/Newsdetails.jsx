import { useParams } from "react-router-dom";
import Header from "../component/Header";
import RightNavbar from "./RightNavbar";
import Navbar from "../component/Nvabar/Navbar";

const Newsdetails = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4">
                <div className="lg:col-span-3">
                <h1 className="text-3xl font-bold" >Dragon News</h1>
                <p>{id}</p>
                </div>
            
            <RightNavbar></RightNavbar>
            
            </div>
        </div>
    );
};

export default Newsdetails;