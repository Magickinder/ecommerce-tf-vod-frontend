import Header from "../Header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../styles/MoviePage.css";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import SvgIcon from '@mui/material/SvgIcon';
import {useState, useEffect} from "react";
import CommentContainer from "../CommentContainer";
import {users} from "../../api";
import { comments } from "../../api";

import axios from 'axios';


export default function MoviePage(props) {
    const {state} = useLocation();
    const [userData, setUserData] = useState([]);
    const [message, setMessage] = useState("");
    const [rate, setRate] = useState(1);
    const [videoComments, setVideoComments] = useState([]);
    const movie = state;
    const navigate = useNavigate()

    const sendComment = () => {
        /*users.getLoggedUser().then(function(response) {
            comments.addComment(movie.row.id, response.data.id, message).then(response => console.log(response));
        });

        comments.addRate(movie.row.id, rate).then(response => console.log(response));*/

        comments.getVideoComments(movie.row.id).then(response => setVideoComments(response.data));
        console.log(videoComments);
    }

    useEffect( () => {
        comments.getVideoComments(movie.row.id).then(response => setVideoComments(response.data));
    }, []);

    videoComments.map((val) => {
        console.log(val.comment);
    });
    
    return(
        <Container maxWidth="lm" disableGutters={true}>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} tableToRender={props.tableToRender} setTableToRender={props.setTableToRender}></Header>
            <Grid container className="movie-data-container">
                <Paper elevation={5} className="movie-image-container">
                    <img
                        className="movie-image"
                        src={`${movie.row.url}?w=248&fit=crop&auto=format`}
                        srcSet={`${movie.row.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        loading="lazy"
                        alt="movie"
                    />
                </Paper>
                <Grid className="movie-info-container" align="center">
                    <h2>{movie.row.title}</h2>
                    <p><b>Reżyser: {movie.row.director.name}</b></p>
                    <p><b>{movie.row.category}</b></p>
                    <p>{movie.row.description}</p>
                    <p className="movie-rating-container">
                        <SvgIcon sx={{transition: '.5s'}} onClick={() => {
                            localStorage.removeItem("category");
                            localStorage.removeItem("director");
                            props.setTableToRender("movies");
                            navigate("/mainPage");
                        }}>
                            <StarIcon/>
                        </SvgIcon>
                        {(movie.row.rating).toFixed(2)}
                    </p>
                </Grid>
            </Grid>
            <Grid className="movie-btns-container">
                <Button variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Oglądaj</p></Button>
                <Button onClick={() => {navigate('/checkout', {state:{movie}})}} variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Kup za 20zł</p></Button>
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
                    onChange={(event) => setMessage(event.target.value)}
                />
                <Grid className="add-comment-bottom-part">
                    <Grid className="movie-comment-rate-container">
                        <SvgIcon>
                            <StarIcon/>
                        </SvgIcon>
                        <select className="movie-rate-select" onChange={(event) => setRate(event.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </Grid>
                    <Button variant="contained" className="comment-btn" onClick={sendComment}><p style={{ fontSize: ".7rem" }}>Opublikuj</p></Button>
                </Grid>
            </Grid>
            <Grid className="movie-comments-container" align="center">
                {videoComments.map((obj) => {
                    return <CommentContainer username={obj.user.username} comment={obj.comment}></CommentContainer>
                })}
            </Grid>
        </Container>
    );
}