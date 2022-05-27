import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../CustomTable';
import '../styles/MoviesMainPage.css';
import {useEffect, useState} from "react";
import {movies} from "../../api";
import {IconButton, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

function MoviesMainPage(props) {

    let navigate = useNavigate();

    const [tableToRender, setTableToRender] = useState([]);

    useEffect( () => {
        movies.getAll().then(function (response){
            setTableToRender(response.data)
        })
    },[])


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
                <ImageList 
                    sx={{ width: "100vw", height: "100vh", mt: "3rem"}}
                    cols={5}
                    rowHeight={500}
                >
                    {tableToRender.map((row) => (
                        <ImageListItem 
                            key={row.url} 
                            sx={{ 
                                margin: "1rem",
                                transition: ".2s",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "scale(1.05, 1.05)",
                                    transition: ".2s"
                                }
                            }}
                            onClick={() => {navigate('/moviePage',{state:{row}})}}
                        >
                            <img
                                src={`${row.url}?w=248&fit=crop&auto=format`}
                                srcSet={`${row.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={row.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                title={row.title}
                            />
                        </ImageListItem>
                    ))}
              </ImageList>

          </Grid>
      </Container>
  );
}

export default MoviesMainPage;