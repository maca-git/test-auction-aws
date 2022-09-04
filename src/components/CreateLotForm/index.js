import React, { Fragment, useEffect } from 'react'
import { useFormik } from 'formik'

import { Button } from '@mui/material'

import { createLotRequiredFields } from '../../constants/forms/validation'
import { useValidation } from '../../hooks/validation/useValidation'
import { useFormData } from '../../hooks/useFormData'

import { createLotFields } from '../../constants/forms/lot'
import { TextFormField } from '../FormFields/TextFormField'

export const CreateLotForm = ({ onSuccessCreateLot }) => {
  const { formSchema } = useValidation(createLotRequiredFields)
  const { isDataChanged, checkIsDataChanged, isFormValid, checkIsFormValid } = useFormData()

  const createLotInitialData = {
    lotTitle: '',
    lotDescription: '',
    lotImageUrl: '',
    lotStartPrice: 1,
    lotMinStep: 1,
  }

  const { values, handleSubmit, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: createLotInitialData,

    validationSchema: formSchema,

    onSubmit: () => {
      onSuccessCreateLot(values)
    },
  })

  useEffect(() => {
    checkIsDataChanged(values, createLotInitialData)
  }, [values, createLotInitialData, checkIsDataChanged])

  useEffect(() => {
    checkIsFormValid(errors)
  }, [errors, checkIsFormValid])

  return (
    <form onSubmit={handleSubmit}>
      {Object.values(createLotFields).map((fieldProps, index) => {
        return (
          <Fragment key={index}>
            <TextFormField
              {...fieldProps}
              handleChange={handleChange}
              handleBlur={handleBlur}
              error={errors[fieldProps.name]}
              touched={touched[fieldProps.name]}
            />
          </Fragment>
        )
      })}

      <Button
        variant="contained"
        size="large"
        type="submit"
        disabled={!isFormValid || !isDataChanged}
      >
        Створити
      </Button>
    </form>
  )
}
