import { Container } from '@mui/material'
import React from 'react'

export const PageLayout = ({ children }) => {
  return (
    <>
      <Container maxWidth="lg">{children}</Container>
    </>
  )
}
