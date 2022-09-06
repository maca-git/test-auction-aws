import React from 'react'
import { v4 as uuid } from 'uuid'
import { Typography } from '@mui/material'
import { API, Storage } from 'aws-amplify'
import { CreateLotForm } from '../../components/CreateLotForm'
import { createLot } from '../../graphql/mutations'

export const CreateLotPage = () => {
  const onSuccessCreateLot = async ({
    lotTitle,
    lotStartPrice,
    lotMinStep,
    lotImageUrl,
    lotDescription,
  }) => {
    const id = uuid()
    const { key } = await Storage.put(`${id}.jpg`, lotImageUrl)

    const createLotInput = {
      id,
      title: lotTitle,
      description: lotDescription,
      imageUrl: key,
      startPrice: lotStartPrice,
      currentPrice: lotStartPrice,
      minStep: lotMinStep,
      owner: '11a071f7-8092-4340-8e20-61e880a48133',
    }

    console.log(createLotInput)

    await API.graphql({
      query: createLot,
      variables: { input: createLotInput },
      authMode: 'API_KEY',
    })
  }

  return (
    <>
      <Typography variant="h3">Створити Лот</Typography>
      <CreateLotForm onSuccessCreateLot={onSuccessCreateLot} />
    </>
  )
}
