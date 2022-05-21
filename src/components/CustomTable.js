import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from "react";
import {movies} from "../api";

export default function CustomTable(props) {
    let navigate = useNavigate();

    const [tableToRender, setTableToRender] = useState([])

    if(props.tableToRender!==undefined){
        if(tableToRender.length === 0){
            setTableToRender(props.tableToRender)
        }
    }



    function createData(name, description, category, rating) {
        return { name, description, category, rating};
    }

    const columns = [
        { 
          id: "title",
          label: "Nazwa filmu" 
        },
        {
          id: "description",
          label: "Opis",
          align: "right"
        },
        {
          id: "category",
          label: "Kategoria",
          align: "right"
        },
        {
          id: "rating",
          label: "Ocena",
          align: "right"
        }
      ];


    return(
        <TableContainer component={Paper}
                sx={{
                  width: "50%",
                  height: "100%",
                  bgcolor: "#33415C",
                  msOverflowStyle: 'none', /* for Internet Explorer, Edge */
                  scrollbarWidth: 'none', /* for Firefox */
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
                    {tableToRender.map((row) => (
                        <TableRow
                            key={row.name}
                            onClick={() => {navigate('/moviePage',{state:{row}})}}
                            sx = {{ cursor: "pointer" }}
                        >
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} sx={{ borderBottom: 'none' }}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                        </TableRow>
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
    );
}