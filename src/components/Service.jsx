import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const Service = () => {
    const [services ,setService] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/flowers')
         .then(res=>res.json())
          .then(data =>setService(data))
    },[])
    return (
        <div className="mt-12">
            <h2 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-200 to-violet-500 ">Service</h2>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-6">
                {
                    services.map(flower=><SingleService
                    key={flower._id}
                    flower={flower}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default Service;