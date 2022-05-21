import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

export default function CustomTable(props) {
    let navigate = useNavigate();

    function createData(name, description, category, rating) {
        return { name, description, category, rating};
    }

    const columns = [
        { 
          id: "name",
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
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49),
        createData('Frozen yoghurt', 159, 6.0, 24),
        createData('Ice cream sandwich', 237, 9.0, 37),
        createData('Eclair', 262, 16.0, 24),
        createData('Cupcake', 305, 3.7, 67),
        createData('Gingerbread', 356, 16.0, 49)
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
                    {rows.map((row) => {
                      return (
                        <TableRow 
                            key={row.name} 
                            onClick={() => {navigate('/moviePage')}}
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
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
    );
}