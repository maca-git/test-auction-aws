import { mixed } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { requiredLotImageUrlError, lotImageMaxSize, lotImageMaxSizeError } = validation

export const getLotImageUrlSchema = (isRequired) => {
  let schema = mixed().test(
    'lotImageUrl',
    lotImageMaxSizeError,
    (value) => value === null || (value && value.size <= lotImageMaxSize)
  )

  schema = isRequired ? schema.required(requiredLotImageUrlError) : schema.notRequired()

  return schema
}
