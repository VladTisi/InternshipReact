import React, {useState} from "react"
import lista from "./data"
import Box from '@mui/material/Box'
import 'assets/css/employeesmenu.css'
import  { DataGrid } from "@mui/x-data-grid"
import { Button } from "@mui/material"
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import TextField from '@material-ui/core/TextField';

const cache = createCache({
    key: 'css',
    prepend: true,
  });



function RenderingArrayOfObjects() {
    const [filt, setFilt] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hidden: true, hideable: false },
        {
          field: 'nume',
          headerName: 'Nume',
          width: 150,
          editable: false,
          hideable: false,
          headerAlign: 'center',
          align: 'center',
          flex:1,
        },
        {
          field: 'prenume',
          headerName: 'Prenume',
          width: 150,
          editable: false,
          hideable: false,
          headerAlign: 'center',
          align: 'center',
          flex:1,
        },
        {
            field: 'functie',
            headerName: 'Functie',
            width: 150,
            editable: false,
            hideable: false,
            headerAlign: 'center',
            align: 'center',
            flex:1,
            disablePortal: true
          },
      ];
      
      const rows=lista
    return(
        <CacheProvider value={cache}>
        <Box sx={{ height: 400, width: '100%',
        '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          }, }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            sx={{"& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#321313",
              color: "#f4991a",
              fontWeight: 'bold',
              fontSize: 16
            }}}
            rowsPerPageOptions={[5]}
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnSelector
            initialState={{
                columns: {
                  columnVisibilityModel: {
                    // Hide columns status and traderName, the other columns will remain visible
                    id: false,
                  },
                },
              }}
              filterModel={{
                items: filt
              }}
            className="table" />
            <div className="buttons-container">

           
            </div>
        </Box>
        </CacheProvider>
        )

}

export default RenderingArrayOfObjects