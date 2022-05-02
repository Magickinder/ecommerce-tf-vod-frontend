import './styles/Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../assets/logo.png';

function Header() {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "#33415C", alignItems: "center" }}>
                <Toolbar>
                    <img src={Logo} alt="logo"/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;