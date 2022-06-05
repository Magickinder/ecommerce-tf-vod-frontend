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
              {/*<Grid item xs={6} className='content'>
                <div className="search-bar">
                  <SvgIcon sx={{transition: '.5s'}}>
                      <SearchIcon/>
                  </SvgIcon>
                  <input type="text" name="search" className="search-bar" placeholder='Szukaj...'></input>
                </div>  
              </Grid>*/}
              <div className="search-bar">
                  <SvgIcon sx={{transition: '.5s'}}>
                      <SearchIcon/>
                  </SvgIcon>
                  <input type="text" name="search" className="search-bar" placeholder='Szukaj...' onChange={event => setSearchData(event.target.value)}></input>
                </div>  
              {/*<Autocomplete
                id="combo-box-demo"
                options={top100Films}
                renderInput={(params) => <TextField {...params} label="Szukaj..."/>}
                sx={{
                   width: "15vw",
                   '& .MuiAutocomplete-popper': {
                    backgroundColor: "red"
                   },
                   '& .MuiOutlinedInput-input': {
                    color: "white !important"
                   },
                   '& .MuiInputLabel-root': {
                    color: "white"
                   },
                   '&:hover': {
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: "#4FB8FF"
                    }
                   },
                   '& .MuiOutlinedInput-notchedOutline': {
                     borderColor: "#4FB8FF"
                   }
                }}
                />*/}
          </Grid>
          
          <Grid align="center" sx={{ height: '83vh', overflow: "hidden" }}>
                <CustomTable tableToRender={props.tableToRender} setTableToRender={props.setTableToRender} searchData={searchData}></CustomTable>
          </Grid>
      </Container>
  );
}

export default MoviesMainPage;