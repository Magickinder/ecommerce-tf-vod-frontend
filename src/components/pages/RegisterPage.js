import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link, useNavigate} from 'react-router-dom';
import '../styles/RegisterPage.css';
import {useState} from "react";
import {auth} from "../../api";

function RegisterPage() {

    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [error, setError] = useState('')
    const [isRegisterSuccessful, setIsRegisterSuccessful] = useState(true);

    const buttonHandler = () => {

        const body = {
            username: login,
            email: email,
            password: password,
        }
        auth.register(body).then(function (response) {
            navigate("/");
        }).catch(function (err) {
            console.log(err.response)
            setIsRegisterSuccessful(false);
            setError(err.response.data);
        });
    };

    return(
        <Container maxWidth="lm" disableGutters={true}>
            <Header></Header>
            <Paper elevation={5} className="register-form-container">
                <Grid align='center' className="header-container" sx={{ height: "17%" }}>
                    <h2>Zarejestruj się</h2>
                </Grid>
                <Grid align='center' className="btns-container">
                    <TextField
                        onChange={(event) => setEmail(event.target.value)}
                        error={!isRegisterSuccessful}
                        helperText={!isRegisterSuccessful ? [error] : ""}
                        label='E-mail' 
                        placeholder='Podaj e-mail' 
                        variant="filled" 
                        focused={true}
                        sx={{
                            bgcolor: '#435069',
                            width: "80%",
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
                        onChange={(event) => setLogin(event.target.value)}
                        error={!isRegisterSuccessful}
                        label='Nazwa użytkownika' 
                        placeholder='Podaj nazwę użytkownika' 
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
                                color: '#4FB8FF !important'
                            },
                            '@media only screen and (max-width: 900px)': {
                                marginTop: "1.2rem",
                                '& .MuiFilledInput-input': {
                                    fontSize: ".75rem"
                                },
                            }
                        }}
                    />
                    <TextField
                        onChange={(event) => setPassword(event.target.value)}
                        error={!isRegisterSuccessful}
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
                        onClick={buttonHandler}
                        variant="contained" 
                        sx={{ 
                            marginTop: "3rem", 
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
                    >Zarejestruj</Button>
                </Grid>
                <Grid  align='center' sx={{ marginTop: "1.5rem" }}>
                    <Link to='/' className='login-link'>Masz już konto? Zaloguj się.</Link>
                </Grid>
            </Paper>
        </Container>
    );
}

export default RegisterPage;