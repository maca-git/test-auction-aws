import React, { Fragment, useEffect } from 'react'
import { useFormik } from 'formik'

import { Button } from '@mui/material'

import { createLotRequiredFields } from '../../constants/forms/validation'
import { useValidation } from '../../hooks/validation/useValidation'
import { useFormData } from '../../hooks/useFormData'

import { createLotFields } from '../../constants/forms/lot'
import { TextFormField } from '../FormFields/TextFormField'
import { InputFileFormField } from '../FormFields/InputFileFormField'

export const CreateLotForm = ({ onSuccessCreateLot }) => {
  const { formSchema } = useValidation(createLotRequiredFields)
  const { isDataChanged, checkIsDataChanged, isFormValid, checkIsFormValid } = useFormData()

  const createLotInitialData = {
    lotTitle: '',
    lotDescription: '',
    lotImageUrl: '',
    lotStartPrice: 0,
    lotMinStep: 0,
  }

  const { values, handleSubmit, handleChange, handleBlur, errors, touched, setFieldValue } =
    useFormik({
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
            {fieldProps.type === 'text' && (
              <TextFormField
                {...fieldProps}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors[fieldProps.name]}
                touched={touched[fieldProps.name]}
              />
            )}
            {fieldProps.type === 'number' && (
              <TextFormField
                {...fieldProps}
                handleChange={handleChange}
                handleBlur={handleBlur}
                error={errors[fieldProps.name]}
                touched={touched[fieldProps.name]}
              />
            )}
            {fieldProps.type === 'file' && (
              <InputFileFormField
                {...fieldProps}
                error={errors[fieldProps.name]}
                setFieldValue={setFieldValue}
              />
            )}
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
