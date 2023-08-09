import { API } from "./api"


export async function handleSignup(payload)
{
    const response = await fetch(`${API}/signup`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


export async function handleLogin(payload)
{
    const response = await fetch(`${API}/login`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


export async function handleForgot(payload)
{
    const response = await fetch(`${API}/forgot-password`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


export async function handleReset(payload)
{
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');

    console.log(token);

    const response = await fetch(`${API}/reset-password/${token}`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json",
        }
    });

    const data = await response.json();
    return data;
}


