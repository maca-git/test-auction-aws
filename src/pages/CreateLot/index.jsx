import React from 'react'
import { Typography } from '@mui/material'
import { CreateLotForm } from '../../components/CreateLotForm'

export const CreateLotPage = () => {
  const onSuccessCreateLot = (lot) => {
    console.log(lot)
  }
  return (
    <div>
      <Typography variant="h3">Створити Лот</Typography>
      <CreateLotForm onSuccessCreateLot={onSuccessCreateLot} />
    </div>
  )
}
