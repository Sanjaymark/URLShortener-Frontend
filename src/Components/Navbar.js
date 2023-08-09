import { AppBar, Box, Button, Toolbar} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () =>{

    const urlSearchParams = new URLSearchParams(window.location.search);
        const token = urlSearchParams.get('token');
    const Navigate = useNavigate();
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={() => Navigate("/")}>Dashboard</Button>
                        <Button color="inherit" onClick={() => Navigate("/login")}>Login</Button>
                        <Button color="inherit" onClick={() => Navigate("/signup")}>Signup</Button>
                        <Button color="inherit" onClick={() => Navigate("/forgot-password")}>Forgot Password</Button> 
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}