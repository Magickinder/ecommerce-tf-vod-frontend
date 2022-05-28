import Header from "../Header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../styles/MoviePage.css";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function MoviePage(props) {
    const {state} = useLocation();
    const movie = state;
    const navigate = useNavigate()
    
    return(
        <Container maxWidth="lm" disableGutters={true}>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} tableToRender={props.tableToRender} setTableToRender={props.setTableToRender}></Header>
            <Grid container className="movie-data-container">
                <Paper elevation={5} className="movie-image-container">
                    <img
                        src={`${movie.row.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${movie.row.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        loading="lazy"
                        alt="movie"
                    />
                </Paper>
                <Grid className="movie-info-container" align="center">
                    <h2>{movie.row.title}</h2>
                    <p>{movie.row.director.name}</p>
                    <p>{movie.row.category}</p>
                    <p>{movie.row.description}</p>
                    <p>{movie.row.rating}</p>
                </Grid>
            </Grid>
            <Grid className="movie-btns-container">
                <Button variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Oglądaj</p></Button>
                <Button onClick={() => {navigate('/checkout')}} variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Kup za 20zł</p></Button>
            </Grid>
            <Grid className="add-comment-container" align="center">
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    placeholder="Dodaj komentarz..."
                    minRows={5}
                    maxRows={5}
                    sx = {{
                        marginTop: "5rem",
                        '& .MuiOutlinedInput-root': {
                            color: "white"
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#4FB8FF !important'
                        }
                    }}
                />
                <Grid className="add-comment-bottom-part">
                    <p>Rating</p>
                    <Button variant="contained" className="comment-btn"><p style={{ fontSize: ".75rem" }}>Opublikuj</p></Button>
                </Grid>
            </Grid>
        </Container>
    );
}