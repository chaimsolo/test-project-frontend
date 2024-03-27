import { Button, TextField } from "@mui/material";
import Navbar from "../components/navbar/navbar";
import { useRef } from "react";


export default function Contacts() {
    const formRef = useRef(null);

    function resetForm() {
        formRef.current.reset();
    }


    return (
        <div>
            <Navbar />
            <form ref={formRef} className="column form form-container">
                <TextField type="text" placeholder="Name..." />
                <TextField type="phone" placeholder="Phone number..." />
                <Button variant="outlined" type="submit">Contact</Button>
                <Button variant="outlined" onClick={resetForm}>reset</Button>
            </form>
        </div>
    )
}