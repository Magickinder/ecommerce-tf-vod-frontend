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
import { SettingsBackupRestoreOutlined } from '@mui/icons-material';

export default function CustomTable(props) {
    let navigate = useNavigate();

    const [moviesList, setMoviesList] = useState([]);
    const [categoriesList, setCategoriesList] = useState([]);

    useEffect( () => {
      if(props.tableToRender === "movies") {
        movies.getAll().then(function (response){
          setMoviesList(response.data.filter((item) => {

            if(item.title !== "" && item.url !== "") {
              console.log(localStorage.getItem("category"), item.category);
              if(localStorage.getItem("category")) {
                if(localStorage.getItem("category") === item.category) {
                  return item;
                }
              } else {
                return item;
              }
            }
          }));
        });
      } else if(props.tableToRender === "categories") {
        movies.getCategories().then(function (response){
          setCategoriesList(response.data)
        });
      }
    }, [props.tableToRender, localStorage.getItem("category")])

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
                  height: "100%",
                  bgcolor: "#33415C",
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none',
                  overflowY: 'scroll',

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
                              console.log(row);
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