import { useCallback, useState } from 'react'

const ignoreFields = []

export function useFormData() {
  const [isDataChanged, setIsDataChanged] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)

  const checkIsDataChanged = (values, initialValues) => {
    const changedFields = Object.keys(values).filter(
      (field) => !ignoreFields.includes(field) && values[field] !== initialValues[field]
    )
    setIsDataChanged(!!changedFields.length)
  }

  const checkIsFormValid = useCallback((errors) => {
    setIsFormValid(!Object.keys(errors).length)
  }, [])

  const getInitialErrorFields = useCallback((values, errors) => {
    const isFullDataSettled = Object.values(values).every(Boolean)
    const errorFields = Object.keys(errors)
    return isFullDataSettled && !!errorFields.length ? errorFields : []
  }, [])

  return {
    isDataChanged,
    checkIsDataChanged,
    isFormValid,
    checkIsFormValid,
    getInitialErrorFields,
  }
}
