import Header from '../Header';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import CustomTable from '../CustomTable';
import '../styles/MoviesMainPage.css';

function MoviesMainPage(props) {
  return(
      <Container maxWidth="lm" disableGutters={true}>
          <Header tableToRender={props.tableToRender} setTableToRender={props.setTableToRender} isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} className="header-container"></Header>
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
                <CustomTable tableToRender={props.tableToRender} setTableToRender={props.setTableToRender}></CustomTable>
          </Grid>
      </Container>
  );
}

export default MoviesMainPage;