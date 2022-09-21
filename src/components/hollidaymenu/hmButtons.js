import React from 'react'
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

export default function HMButtons(props){
    const [page, setPage] = React.useState(0);
    const [data, setData] = React.useState([])
    const {t}=useTranslation()
    try {
    return(
        <div className="buttons-container">
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(props.filter(props=> props.status=='Aprobat'));setPage(0)}}>
            {t('Button.Approved')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(props.filter(props=> props.status=='Refuzat'));setPage(0)}}>
            {t('Button.Refused')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() =>{setData(props.filter(props=> props.status=='In Asteptare'));setPage(0)}}>
            {t('Button.Pending')}
            </Button>
            <Button className="buttons"
              variant="contained"
              onClick={() => {setData(props);setPage(0)}}>
            Reset 
            </Button>
            </div>
    )
} catch (err) {
    console.log(err)
  }
}