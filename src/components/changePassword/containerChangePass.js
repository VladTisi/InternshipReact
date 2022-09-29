import React, { useEffect, useState } from 'react'
import 'assets/css/changepassword.css'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import { useQueryWithErrorHandling } from 'hooks/errorHandling'
import { Get_pass, Post_update } from './queries'
import { useMutation } from '@apollo/client'
import useUserData from 'components/login/useUserData'
import { useToast } from '@bit/totalsoft_oss.react-mui.kit.core'
import { dataIndexOf } from 'react-widgets/cjs/Accessors'

function ChangePasswordContainers() {
  const userData = useUserData()
  const [inputPass, setInputPass] = useState('')
  const [newPass, setNewPass] = useState('')
  const [newPassCopy, setNewPassCopy] = useState('')
  const [updatePassword] = useMutation(Post_update)
  const addToast = useToast()
  const [myFlag, setMyFlag] = useState(false)
  const { data: MyQueryData222, loading } = useQueryWithErrorHandling(Get_pass, {
    variables: { input: { angajatId: userData.id, oldPassword: inputPass } },
    skip: !myFlag
  })

  const handleClick = () => {
    setMyFlag(true)
  }

  //if (updatePassword({ variables: { newPassword: newPass, angajatId: userData.id } })) addToast('Parola a fost schimbata')

  return (
    <div className='container111'>
      <div className='title'>
        <div className='titletext'>
          <header>Schimbare parola </header>
        </div>
      </div>
      <div className='card0123'>
        <div className='camp22'>
          <TextField
            onChange={event => {
              setInputPass(event.target.value)
            }}
            label='Parola veche'
          ></TextField>
        </div>
        <div className='camp22'>
          <TextField
            onChange={event => {
              setNewPass(event.target.value)
            }}
            label='Parola noua'
          ></TextField>
        </div>
        <div className='camp22'>
          <TextField
            onChange={event => {
              setNewPassCopy(event.target.value)
            }}
            label='Confirmare parola noua '
          ></TextField>
        </div>
        <Button onClick={handleClick}>
          Salvare parola <DoneIcon />{' '}
        </Button>
      </div>
    </div>
  )
}
export default ChangePasswordContainers
