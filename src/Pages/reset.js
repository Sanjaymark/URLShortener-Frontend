import React, { useState } from "react";
import { handleReset } from "../Services/auth";
import { Button, TextField } from "@mui/material";

export const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const resetPassword = async () => 
    {
        
        const payload = { password};

        handleReset(payload).then((data)=>
        {
            if(data.error)
            {
                setError(data.error);
                setSuccessMsg("");
            }
            else
            {
                setError("")
                setSuccessMsg(data.message);
                localStorage.setItem("token",data.token);
            }

        })
    };

    return (
        <div>
            <ResetForm
                password={password}
                setPassword={setPassword}
                resetPassword={resetPassword}
            />
            {error ? <div className="err-msg">{error}</div> : ""}
            {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
        </div>
    );
};

function ResetForm({ password, setPassword, resetPassword }) 
{
    return (
        <form className="forms">
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <Button variant="contained" onClick={()=> resetPassword }>Reset Password</Button>
        </form>
    );
}
