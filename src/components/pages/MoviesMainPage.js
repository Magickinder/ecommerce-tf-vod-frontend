import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../CustomTable';
import '../styles/MoviesMainPage.css';
import {useEffect, useState} from "react";
import {movies} from "../../api";
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import { useNavigate } from 'react-router-dom';

function MoviesMainPage(props) {

    let navigate = useNavigate();

    const [tableToRender, setTableToRender] = useState("movies");

    /*useEffect( () => {
        movies.getAll().then(function (response){
            setTableToRender(response.data)
        })
    },[])*/

    /*useEffect(() => {
        setTableToRender("movies");
    }, []);*/


  //const [tableToRender, setTableToRender] = useState("movies");

  return(
      <Container maxWidth="lm" disableGutters={true}>
          <Header tableToRender={tableToRender} setTableToRender={setTableToRender} isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} className="header-container"></Header>
          <Grid align="center" container className="content-container">
              <Grid item xs={6} className='content'>
                <div className="search-bar">
                  <SvgIcon sx={{transition: '.5s'}}>
                      <SearchIcon/>
                  </SvgIcon>
                  <input type="text" name="search" className="search-bar" placeholder='Szukaj...'></input>
                </div>
              </Grid>
          </Grid>
          <Grid align="center" sx={{ height: '84.5vh' }}>
                <CustomTable tableToRender={tableToRender}></CustomTable>
          </Grid>
      </Container>
  );
}

export default MoviesMainPage;