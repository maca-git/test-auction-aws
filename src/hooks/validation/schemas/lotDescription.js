import { string } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { maxCharsLotDescription, maxCharsLotDescriptionError, requiredLotDescriptionError } =
  validation

export const getLotDescriptionSchema = (isRequired) => {
  let schema = string().max(maxCharsLotDescription, maxCharsLotDescriptionError)

  schema = isRequired ? schema.required(requiredLotDescriptionError) : schema.notRequired()

  return schema
}
