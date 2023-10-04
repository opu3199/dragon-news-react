import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Leftnabvar = () => {

    const [categories,setcategories]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcategories(data))
    },[])
    return (
        <div className="my-5 space-y-5">
           <h1 className="text-3xl font-bold">All Categories</h1>
           {
            categories.map(data=><Link className="block text-2xl font-bold"
            to={`/data/${data.id}`}
             key={data.id}>
                {data.name}</Link>)
           }
        </div>
    );
};

export default Leftnabvar;