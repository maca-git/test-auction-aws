import React from 'react'

export const InputFileFormField = ({ error, setFieldValue, ...fieldProps }) => {
  return (
    <div className="form-field">
      <input {...fieldProps} onChange={(e) => setFieldValue(fieldProps.name, e.target.files[0])} />
      {error && <p>{error}</p>}
    </div>
  )
}
