import React, { useEffect } from 'react'
import {useQuerry, gql} from '@apollo/client'
import {LOAD_DATA} from '../userpageContainer/QueriesData'

function GetData() {
 
const {error, loading, data} = useQuerry(LOAD_DATA)

useEffect(() => {
console.log(data);
}, [data])
    return(

        <p>buna</p>
    )

}

export default GetData