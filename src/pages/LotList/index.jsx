import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { API, Storage } from 'aws-amplify'
import { listLots } from '../../graphql/queries'

import './index.css'

export const LotList = () => {
  const [lots, setLots] = useState([])

  const fetchLots = async () => {
    try {
      const { data } = await API.graphql({ query: listLots, authMode: 'API_KEY' })
      const lotsRequest = data.listLots.items.map((lot) => Storage.get(lot.imageUrl))
      const lotsData = await Promise.all(lotsRequest)
      data.listLots.items.forEach((lot, i) => {
        lot.imageUrl = lotsData[i]
      })
      setLots(data.listLots.items)
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
        return (
          <Paper key={lot.id} className="lot-item">
            <Typography>{lot.title}</Typography>
            <img src={lot.imageUrl} alt="" className="lot-main-img" />
            <Typography>{lot.description}</Typography>
            <Typography>Ціна: {lot.currentPrice}</Typography>
          </Paper>
        )
      })}
    </div>
  )
}
