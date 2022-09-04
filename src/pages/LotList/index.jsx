import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { API, Storage } from 'aws-amplify'
import { listLots } from '../../graphql/queries'

import './index.css'

export const LotList = () => {
  const [lots, setLots] = useState([])
  const [lotImageUrl, setLotImageUrl] = useState('')

  const fetchLots = async () => {
    try {
      const { data } = await API.graphql({ query: listLots, authMode: 'API_KEY' })
      setLots(data.listLots.items)
    } catch (e) {
      console.log(e)
    }
  }

  const getFileAccessURL = async (path) => {
    try {
      const storageUrl = await Storage.get(path, { expires: 60 })
      setLotImageUrl(storageUrl)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchLots()
  }, [])

  return (
    <div className="lots-list">
      {lots?.map((lot) => {
        getFileAccessURL(lot.imageUrl)
        return (
          <Paper key={lot.id} className="lot-item">
            <Typography>{lot.title}</Typography>
            <img src={lotImageUrl} alt="" className="lot-main-img" />
            <Typography>{lot.description}</Typography>
            <Typography>Ціна: {lot.currentPrice}</Typography>
          </Paper>
        )
      })}
    </div>
  )
}
