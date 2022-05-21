import Header from "../Header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../styles/MoviePage.css";

export default function MoviePage() {
    return(
        <Container maxWidth="lm" disableGutters={true}>
            <Header defaultHeader></Header>
            <Grid container className="movie-data-container">
                <Paper elevation={5} className="movie-image-container">
                    
                </Paper>
                <Grid className="movie-info-container" align="center">
                    <h2>WŁADCA PIERŚCIENI</h2>
                    <p>10</p>
                    <p>description</p>
                </Grid>
            </Grid>
            <Grid className="movie-btns-container">
                <Button variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Oglądaj</p></Button>
                <Button variant="contained" className="movie-btn"><p style={{ fontSize: ".75rem" }}>Kup za 20zł</p></Button>
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