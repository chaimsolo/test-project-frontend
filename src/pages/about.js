import Model from "../components/model/model";
import Navbar from "../components/navbar/navbar";
import { useState } from "react";



export default function About(){
    const [open, setOpen] = useState(false);
    return (
        <div>
           <Navbar/> 
           <Model open={open} setOpen={setOpen} title={"Are you sure you want to delete your imaage?"} />
         About
        </div>  
    )
}