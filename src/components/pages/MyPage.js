import "../styles/MyPage.css";
import Header from "../Header";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CustomTable from '../CustomTable';
import {useState, useEffect} from "react";
import {users} from "../../api";

export default function MyPage(props) {
    const [username, setUsername] = useState("name");
    const [userEmail, setUserEmail] = useState("email");

    useEffect( () => {
        users.getLoggedUser().then((response) => {
            setUsername(response.data.username);
            setUserEmail(response.data.email);
        });
    }, []);

    return(
        <>
            <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} tableToRender={props.tableToRender} setTableToRender={props.setTableToRender}></Header>
            <Container maxWidth="lm" disableGutters={true} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2rem" }}>
                <div className="user-info-container">
                    <p><b>Nazwa użytkownika:</b></p>
                    <p>{username}</p>
                    <p><b>E-mail:</b></p>
                    <p>{userEmail}</p>
                </div>
                <Grid align="center" sx={{ height: '60vh' }}>
                    <CustomTable getUserMovies={true}></CustomTable>
                </Grid>
            </Container>
        </>
    );
}