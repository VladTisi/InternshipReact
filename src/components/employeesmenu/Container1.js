import React, {useState, useEffect} from "react"
import lista from "./data1"
import SearchAppBar from "./SearchBox"
import Box from '@mui/material/Box'
import 'assets/css/employeesmenu.css'
import  { DataGrid } from "@mui/x-data-grid"
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import ReactDOM from 'react-dom';
import { Input } from "@material-ui/core"



const cache = createCache({
    key: 'css',
    prepend: true,
  });


function RenderingArrayOfObjects() {
    const [filt, setFilt] = useState([])

    const columns = [
        
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
            sx={{borderColor: '#321313',
            border: 1,"& .MuiDataGrid-columnHeaders": {
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
              
            className="table" />

            
            <div className="buttons-container">

           
            </div>
        </Box>
        </CacheProvider>
        )

}

export default RenderingArrayOfObjects