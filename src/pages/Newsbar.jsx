/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Newsbar = ({newses}) => {
    const {_id,author,img,name,published_date,details,image_url,title,total_view,number,rating   }=newses
    return (
        <div className="space-y-5 mb-10 shadow-md p-4 rounded-md">
            <div className="p-2 flex items-center gap-10 bg-slate-200 ">
                <div>
                <img className="w-10 rounded-full" src={author.img} alt="" />
                </div>
                <div>
                <p>{author.name}</p>
                <p>{author.published_date}</p>
                </div>
            </div>
            <h2>{title}</h2>
            <img src={image_url} alt="" />
            {
                details.length>200?
                <p>{details.slice(0,200)}
                <Link to={`/news/${_id}`} className="text-amber-300 font-bold">Read more...</Link></p>
                :<p>{details}</p>
            }
            
            <div className="flex justify-between">
                <p>{rating.number}</p>
                <p>{total_view}</p>
            </div>
        </div>
    );
};

export default Newsbar;