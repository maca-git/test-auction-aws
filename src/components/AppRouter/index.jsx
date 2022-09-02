import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CreateLotPage } from '../../pages/CreateLot'
import { LotList } from '../../pages/LotList'
import { PageLayout } from '../PageLayout'

export const routesConfiguration = {
  createLot: {
    path: '/create-lot',
    Element: CreateLotPage,
  },
  lotList: {
    path: '/lots',
    Element: LotList,
  },
}

function renderPage({ Element }) {
  return (
    <PageLayout>
      <Element />
    </PageLayout>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routesConfiguration).map(([key, { path, Element }]) => {
          return <Route key={key} path={path} element={renderPage({ Element })} />
        })}
        <Route path="*" element={<Navigate to={routesConfiguration.lotList.path} />} />
      </Routes>
    </BrowserRouter>
  )
}
