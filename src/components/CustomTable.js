import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {useState, useEffect} from "react";
import {movies} from "../api";
import { users } from "../api";

export default function CustomTable(props) {
    let navigate = useNavigate();

    const [moviesList, setMoviesList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);
    const [directorsList, setDirectorsList] = useState([]);

    useEffect( () => {
      if(props.tableToRender === "movies") {
        movies.getAll().then(function (response){
          setMoviesList(response.data.filter((item) => {
            if(item.title !== "" && item.url !== "") {
              if(localStorage.getItem("category")) {
                if(localStorage.getItem("category") === item.category) {
                  return item;
                }
              } else if(localStorage.getItem("director")) {
                if(localStorage.getItem("director") === item.director.name) {
                  return item;
                }
              } else {
                if (item.title.includes(props.searchData)) {
                  return item;
                }
              }
            }
          }));
        });
      } else if(props.tableToRender === "categories") {
        movies.getCategories().then(function (response){
          setCategoriesList(response.data.filter(category => {
            if (category.includes(props.searchData)) {
              return category;
            }
          }));
        });
      } else if(props.tableToRender === "directors") {
        movies.getDirectors().then(function (response) {
          setDirectorsList(response.data.filter(director => {
            if (director.includes(props.searchData)) {
              return director;
            }
          }));
        });
      }
    }, [props.tableToRender, localStorage.getItem("category"), localStorage.getItem("director"), props.searchData]);

    useEffect( () => {
      if(props.getUserMovies === true) {
        users.getUserMovies().then(response => console.log(response));
      }
    }, []);

    let toShow;

    if(props.tableToRender === "movies") {
      toShow = <ImageList 
                    sx={{ width: "100vw", height: "80vh", mt: "3rem"}}
                    cols={5}
                    rowHeight={500}
                >
                {moviesList.map((row) => (
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
    } else if(props.tableToRender === "directors") {
      const columns = [
        { 
          id: "name",
          label: "Imię i nazwisko" 
        }
      ];

      toShow = toShow = <TableContainer component={Paper}
                sx={{
                  width: "50%",
                  height: "95%",
                  bgcolor: "#33415C",
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  overflowY: 'scroll',
                  marginTop: "2rem",

                  '&::-webkit-scrollbar': {
                    display: 'none'
                  }
                }}
              >
                <Table 
                  stickyHeader={true}
                  sx={{ 
                    bgColor: '#33415C', 
                    '& td, th': { 
                      color: 'white'
                    }, 
                    '& th': {
                      fontWeight: 'bold'
                    },
                    '& tr:nth-child(2n)': {
                      backgroundColor: '#5c677d'
                    },
                    '& tr:hover': {
                      backgroundColor: "#4FB8FF",
                      opacity: ".75"
                    }
                  }}
                  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        sx={{ backgroundColor: "#33415C"}}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {directorsList.map((row) => (
                        <TableRow
                            key={row}
                            onClick={() => {
                              localStorage.removeItem("category");
                              localStorage.setItem("director", row);
                              props.setTableToRender("movies");
                            }}
                            sx = {{ cursor: "pointer" }}
                        >
                        {columns.map((column) => {
                        return (
                          <TableCell key={column.id} sx={{ borderBottom: 'none' }}>
                            {row}
                          </TableCell>
                        );
                      })}
                        </TableRow>
                      )
                    )}
                  </TableBody>
                  

                </Table>
              </TableContainer>
    } else if(props.tableToRender === "categories") {
      const columns = [
        { 
          id: "name",
          label: "Kategoria" 
        }
      ];

      toShow = <TableContainer component={Paper}
                sx={{
                  width: "50%",
                  height: "95%",
                  bgcolor: "#33415C",
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  overflowY: 'scroll',
                  marginTop: "2rem",

                  '&::-webkit-scrollbar': {
                    display: 'none'
                  }
                }}
              >
                <Table 
                  stickyHeader={true}
                  sx={{ 
                    bgColor: '#33415C', 
                    '& td, th': { 
                      color: 'white'
                    }, 
                    '& th': {
                      fontWeight: 'bold'
                    },
                    '& tr:nth-child(2n)': {
                      backgroundColor: '#5c677d'
                    },
                    '& tr:hover': {
                      backgroundColor: "#4FB8FF",
                      opacity: ".75"
                    }
                  }}
                  aria-label="simple table">
                  <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        sx={{ backgroundColor: "#33415C"}}
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {categoriesList.map((row) => (
                        <TableRow
                            key={row}
                            onClick={() => {
                              localStorage.removeItem("director");
                              localStorage.setItem("category", row);
                              props.setTableToRender("movies");
                            }}
                            sx = {{ cursor: "pointer" }}
                        >
                        {columns.map((column) => {
                        return (
                          <TableCell key={column.id} sx={{ borderBottom: 'none' }}>
                            {row}
                          </TableCell>
                        );
                      })}
                        </TableRow>
                      )
                    )}
                  </TableBody>
                  

                </Table>
              </TableContainer>
    }

    return(
      <>
        {toShow}
      </>
    )
}