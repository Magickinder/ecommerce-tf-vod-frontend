import './styles/Header.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';
import SvgIcon from '@mui/material/SvgIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let header;
    let navigate = useNavigate();

    if(!props.isLoggedIn) {
        header = <Box sx={{ flexGrow: 1 }}>
                    <AppBar 
                        position="static" 
                        sx={{ 
                            bgcolor: "#2d3650", 
                            alignItems: "center",
                            justifyContent: "center",
                            '@media only screen and (max-height: 450px)': {
                                height: "15vh"
                            } 
                        }}
                    >
                        <Toolbar>
                            <img src={Logo} alt="logo"/>
                        </Toolbar>
                    </AppBar>
                </Box>
    } else {
        header = <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ bgcolor: "#2d3650", flexDirection: "row" }}>
                        <Grid container>
                            <Grid item xs={1}>
                                <img src={Logo} alt="logo"/>
                            </Grid>
                            <Grid item xs={11} sx={{ display: "flex", gap: "2rem", justifyContent: "flex-end", alignItems: "center" }}>
                                <Avatar 
                                    alt="Home" 
                                    sx={{ 
                                        bgcolor: "#424a61", 
                                        width: "3.5%", 
                                        height: "62%", 
                                        cursor: "pointer",

                                        '&:hover': {
                                            '& .MuiSvgIcon-root': {
                                                color: '#4FB8FF',
                                                transition: '.2s'
                                            }   
                                        }
                                    }}
                                >
                                    <SvgIcon sx={{transition: '.5s'}} onClick={() => {
                                        props.setTableToRender("movies");
                                        navigate("/mainPage");
                                    }}>
                                        <HomeOutlinedIcon/>
                                    </SvgIcon>
                                </Avatar>

                                <Button variant="contained" className='header-btns' onClick={() => props.setTableToRender('categories')}>Kategorie</Button>
                                <Button variant="contained" className='header-btns' onClick={() => props.setTableToRender('directors')}>Reżyserowie</Button>
                                <Button variant="contained" className='header-btns'>Moje konto</Button>
                                <Button variant="contained" className='header-btns' onClick={() => navigate("/helpPage")}>Pomoc</Button>
                                <Button variant="contained" className='header-btns' sx={{ marginRight: "2rem" }} onClick={() => {
                                    props.setIsLoggedIn(false);
                                    localStorage.removeItem("logStatus");
                                    navigate("/");
                                }}>Wyloguj</Button>
                            </Grid>
                        </Grid>
                    </AppBar>
                </Box>
    }

    return(
        header
    );
}

export default Header;