import React from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {

    const menus = ["Home", "Services", "Portfolio", "Products", "Contact US"];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "white" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>

                    {menus.map((menu, index) => (
                        <Button
                            style={{ fontSize: "15px", color: "black", fontFamily: "Gloria Hallelujah", fontWeight: "bold" }}
                            key={index}>
                            {menu}
                        </Button>
                    ))}


                </Toolbar>
            </AppBar>
        </Box>

    )
};

export default Home;
