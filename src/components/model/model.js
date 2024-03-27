import "./model.css";
import { Button } from "@mui/material";;



export default function Model(open, setOpen, title) {
    return (
        <div
            style={{ visibility: open ? "visible" : "hidden" }

            } ClassName="column model-container"
        >
        <h1>{title}</h1>
<div className="row model-button" >
    <Button variant="contained" onClick={() => setOpen(false)}  >Yes </Button>


</div>

        </div>
    )
}