// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { RestLink } from 'apollo-link-rest';
// const restLink = new RestLink({ uri: "http://localhost:5031/api/" });
// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: restLink
//   });
//   import { gql } from '@apollo/client';

// const query = gql`
//   query Luke {
//     person @rest(type: "TipConcedii", path: "CerereConcediu/GetTipConcediu") {
//       name
//     }
//   }`;

//   client.query({ query }).then(response => {
//     console.log(response.data.person.name);
//   });



import React, { useEffect, useState } from 'react'
import ConcediiDataProvider from "./QueriesCC.js"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';



var data = [{id:0,name:"Concediu Odihna"},{id:1,name:"Concediu Maternitate"},{id:2,name:"Concediu Paternitate"}]
var data2 = [{id:0,name:"Inloc 1"},{id:1,name:"Inloc 2"},{id:2,name:"Inloc 3"}];
function CreareConcediu(){
    const [dataInceperii, setDataInceperii] = useState(new Date());
    const [dataSfarsitului, setDataSfarsitului] = useState(new Date());
    const [option, setOption] = useState("");
    useEffect(()=>{
        console.log(dataInceperii);
    },[dataInceperii,dataSfarsitului])

return(
    <div className="container">

<body>
Data inceperii:
<DatePicker selected={dataInceperii} onChange={(date) => setDataInceperii(date)} />
Data sfarsitului:
<DatePicker selected={dataSfarsitului} onChange={(date) => setDataSfarsitului(date)} />
<Autocomplete options={data}
id="cmbTipConcediu"
style={{width:300}}
getOptionLabel={(option) => option.name}
value={option.id}
renderInput={(params) => <TextField {...params} label="Tip Concediu" />}
 />
 <Autocomplete options={data2}
id="cmbInlocuitor"
style={{width:300}}
getOptionLabel={(option) => option.name}
value={option.id}
renderInput={(params) => <TextField {...params} label="Inlocuitor" />}
 />


</body>
</div>


)

}


export default CreareConcediu