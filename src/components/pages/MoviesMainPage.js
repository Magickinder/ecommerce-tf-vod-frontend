import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../CustomTable';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import {useState, useEffect} from "react";
import '../styles/MoviesMainPage.css';

function MoviesMainPage(props) {
  const [searchData, setSearchData] = useState("");

  return(
      <Container maxWidth="lm" disableGutters={true}>
          <Header tableToRender={props.tableToRender} setTableToRender={props.setTableToRender} isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} className="header-container"></Header>
          <Grid align="center" container className="content-container">
              <div className="search-bar">
                  <SvgIcon sx={{transition: '.5s'}}>
                      <SearchIcon/>
                  </SvgIcon>
                  <input type="text" name="search" className="search-bar" placeholder='Szukaj...' onChange={event => setSearchData(event.target.value)}></input>
                </div>  
          </Grid>
          
          <Grid align="center" sx={{ height: '83vh', overflow: "hidden" }}>
                <CustomTable tableToRender={props.tableToRender} setTableToRender={props.setTableToRender} searchData={searchData}></CustomTable>
          </Grid>
      </Container>
  );
}

export default MoviesMainPage;