import React, {useState} from "react"
import lista from "./data"
import Box from '@mui/material/Box'
import 'assets/css/hollidaymenu.css'
import  { DataGrid } from "@mui/x-data-grid"
import { Button } from "@material-ui/core"
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
  key: 'css',
  prepend: true,
});

function RenderingArrayOfObjects() {
  
    const [filt, setFilt] = useState([])
    const columns = [
        { field: 'id', headerName: 'ID', width: 90, hidden: true, hideable: false },
        {
          field: 'inceput',
          headerName: 'HollidayMenu.Inceput',
          width: 150,
          editable: false,
          hideable: false,
          headerAlign: 'center',
          align: 'center',
          flex:1,
        },
        {
          field: 'sfarsit',
          headerName: 'HollidayMenu.Sfarsit',
          width: 150,
          editable: false,
          hideable: false,
          headerAlign: 'center',
          align: 'center',
          flex:1,
        },
        {
            field: 'status',
            headerName: 'Status',
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
            <Button className="buttons"
            variant="contained"
            onClick={() =>
            setFilt([
                {
                    columnField: "status",
                    operatorValue: "startsWith",
                    value: "Aprobat"
                 }
            ])
            }
            >
                Aprobate
            </Button>
            <Button className="buttons"
            variant="contained"
            onClick={() =>
            setFilt([
                {
                    columnField: "status",
                    operatorValue: "startsWith",
                    value: "Refuzat"
                 }
            ])
            }
            >
                Refuzate
            </Button>
            <Button className="buttons"
            variant="contained"
            onClick={() =>
            setFilt([
                {
                    columnField: "status",
                    operatorValue: "startsWith",
                    value: "In Asteptare"
                 }
            ])
            }
            >
                In Asteptare
            </Button>
            <Button className="buttons"
            variant="contained"
                onClick={() => setFilt([])}
            >
            Reset Filters
            </Button>
            </div>
        </Box>
        </CacheProvider>
        )

}

export default RenderingArrayOfObjects