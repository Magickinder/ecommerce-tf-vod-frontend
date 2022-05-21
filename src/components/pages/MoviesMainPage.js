import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../CustomTable';
import '../styles/MoviesMainPage.css';
import {useEffect, useState} from "react";
import {movies} from "../../api";

function MoviesMainPage() {

    const [tableToRender, setTableToRender] = useState();

    useEffect( () => {
        movies.getAll().then(function (response){
            setTableToRender(response.data)
        })
    },[])


  return(
      <Container maxWidth="lm" disableGutters={true}>
          <Header tableToRender={tableToRender} setTableToRender={setTableToRender} className="header-container"></Header>
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
            <CustomTable tableToRender={tableToRender}/>
          </Grid>
      </Container>
  );
}

export default MoviesMainPage;