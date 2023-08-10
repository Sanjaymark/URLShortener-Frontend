import React, { useState } from "react";
import { handleForgot } from "../Services/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";

export const ForgotPassword = () =>
{
    const [email,setEmail] = useState("");
    const [error, setError] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const Navigate = useNavigate();

    const forgotUser = async () =>
    {

        const payload = {email};

        handleForgot(payload).then((data)=>
        {
            if(data.error)
            {
                setError(data.error);
                setSuccessMsg("")
            }
            else
            {
                setError("")
                setSuccessMsg(data.message);
                localStorage.setItem("token", data.token);
                
            }

        })

    }

    return (
        <div>
            <ForgotForm email={email} setEmail={setEmail} forgotUser={forgotUser}/>
            {error ? <div className="err-msg">{error}</div> : ""}
            {successMsg ? <div className="success-msg">{successMsg}</div> : ""}
        </div>)
};

function ForgotForm({email,setEmail,forgotUser})
{
    return(
        <form className="forms">
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Button variant="contained" onClick={()=> forgotUser() }>Forgot Password</Button>
        </form>
    )
}