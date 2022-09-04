import React from 'react'
import { FormControl, TextField } from '@mui/material'
import './index.css'

export const TextFormField = ({
  touched,
  error,
  handleBlur,
  handleChange,
  isLoading,
  ...fieldProps
}) => {
  const validationError = touched && error

  return (
    <div className="form-field">
      <FormControl fullWidth>
        <TextField
          {...fieldProps}
          color="primary"
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={validationError}
          error={!!validationError}
          disabled={fieldProps.disabled || isLoading}
        />
      </FormControl>
    </div>
  )
}
