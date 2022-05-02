import Header from '../Header';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
    return(
        <div className='container'>
            <Header></Header>
            <Grid>
                <Paper elevation={5} className="login-form-container">
                    <Grid align='center' className="header-container">
                        <h2>Zaloguj się</h2>
                    </Grid>
                    <Grid align='center' className="btns-container">
                        <TextField 
                            label='Nazwa użytkownika' 
                            placeholder='Podaj nazwę użytkownika' 
                            variant="filled" 
                            focused={true}
                            sx={{
                                bgcolor: '#435069',
                                width: "80%",
                                marginTop: "3rem",
                                borderRadius: '0.4rem 0.4rem 0 0',
                                '& .MuiFilledInput-input': {
                                    color: 'white'
                                },
                                '& .MuiFilledInput-underline:after': {
                                    borderBottomColor: '#4FB8FF'
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#4FB8FF !important'
                                },
                                '@media only screen and (max-width: 900px)': {
                                    marginTop: "0",
                                    '& .MuiFilledInput-input': {
                                        fontSize: ".75rem"
                                    },
                                }
                            }}
                        />
                        <TextField 
                            label='Hasło' 
                            placeholder='Podaj hasło' 
                            type='password'
                            variant="filled" 
                            focused={true}
                            sx={{
                                bgcolor: '#435069',
                                width: "80%",
                                marginTop: "2rem",
                                borderRadius: '0.4rem 0.4rem 0 0',
                                '& .MuiFilledInput-input': {
                                    color: 'white'
                                },
                                '& .MuiFilledInput-underline:after': {
                                    borderBottomColor: '#4FB8FF'
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#4FB8FF'
                                },
                                '@media only screen and (max-width: 900px)': {
                                    marginTop: "1.2rem",
                                    '& .MuiFilledInput-input': {
                                        fontSize: ".75rem"
                                    },
                                }
                            }}
                        />
                        <Button 
                            variant="contained" 
                            sx={{ 
                                marginTop: "4rem", 
                                width: "80%", 
                                height: "15%", 
                                bgcolor: "#5c677d",
                                fontSize: '.95rem',
                                fontWeight: '550',
                                '&:hover': {
                                    bgcolor: '#4FB8FF'
                                },
                                '@media only screen and (max-width: 900px)': {
                                    marginTop: "1.75rem"
                                }
                            }}
                        >Zaloguj</Button>
                    </Grid>
                    <Grid  align='center'>
                        <Link to='/register' className='register-link'>Nie masz konta? Zarejestruj się.</Link>
                    </Grid>
                </Paper>
            </Grid>
        </div>
    );
}

export default LoginPage;