import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Breakingnews = () => {
    return (
        <div className="flex my-5 border-2 p-2">
            <button className="btn btn-danger bg-red-400">Latest news</button>
            <Marquee pauseOnHover={true} speed={100}>
           <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
           <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
           <Link className="mr-12" to="/">I can be a React component, multiple React components, or just some text.</Link>
           </Marquee>
        </div>



    );
};

export default Breakingnews;