import { gql } from "@apollo/client"

export const GET_APROBATE = gql`
query aprobate($aprobateId: Int){
    aprobate(id : $aprobateId){
        idAngajatFromAngajat
        dataInceput
        dataSfarsit
        stareConcediuId
    }
}
`

export const GET_ALL = gql`
query all($allId: Int){
    all(id : $allId){
        idAngajatFromAngajat
        dataInceput
        dataSfarsit
        stareConcediuId
    }
}
`