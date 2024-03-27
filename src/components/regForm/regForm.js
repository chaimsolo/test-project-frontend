import "./regForm.css";
import { TextField, Button } from "@mui/material"

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((v, k) => {
        data[k] = v;
    });
    console.log(data);
}


export default function RegForm() {
    return (
        <div className="column form-container">
            <form onSubmit={handleSubmit}>
                <h1>register</h1>
                <TextField name="name" label="Name" />
                <TextField name="dob"
                    type="text"
                    label="Date of birth"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}

                />
                <TextField name="password" label="Password" type="password" />
                <TextField name="name" label="Name" />
                <Button variant="outlined" type="submit">
                    Submit
                </Button>

            </form>
        </div>
    );
}

