import { Container } from '@mui/material'
import React from 'react'
import Header from '../Header'

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}
