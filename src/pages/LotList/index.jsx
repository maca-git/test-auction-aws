import React, { useEffect, useState } from 'react'
import { API, Storage } from 'aws-amplify'
import { listLots } from '../../graphql/queries'

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
    <>
      {lots?.map((lot) => {
        getFileAccessURL(lot.imageUrl)
        return (
          <div key={lot.id}>
            <div>{lot.title}</div>
            <div>{lot.description}</div>
            <div>{lot.currentPrice}</div>
            <img src={lotImageUrl} alt="" style={{ width: '100px' }} />
          </div>
        )
      })}
    </>
  )
}
