import { string } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { requiredLotImageUrlError } = validation

export const getLotImageUrlSchema = (isRequired) => {
  let schema = string()

  schema = isRequired ? schema.required(requiredLotImageUrlError) : schema.notRequired()

  return schema
}
