import { useLoaderData } from "react-router-dom";
import Header from "../component/Header";
import Navbar from "../component/Nvabar/Navbar";
import Breakingnews from "./Breakingnews";
import Leftnabvar from "./Leftnabvar";
import Newsbar from "./Newsbar";
import RightNavbar from "./RightNavbar";


const Home = () => {
    const news=useLoaderData()
    return (
        <div className="text-center ">
            <Header></Header>
            <Breakingnews></Breakingnews>
            <Navbar></Navbar>
          

           <div className="my-10 grid gap-4 md:grid-cols-4  text-center">
            <div ><Leftnabvar></Leftnabvar></div>
            <div className="md:col-span-2  p-5 ">
            {
                news?.map(newses=> <Newsbar key={newses._id} newses={newses}></Newsbar>)
            }
            </div>
            
            <div className="p-5 "><RightNavbar></RightNavbar></div>
           </div>
        </div>
    );
};

export default Home;