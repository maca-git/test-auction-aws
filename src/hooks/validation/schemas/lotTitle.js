import { string } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { maxCharsLotTitle, maxCharsLotTitleError, requiredLotTitleError } = validation

export const getLotTitleSchema = (isRequired) => {
  let schema = string().max(maxCharsLotTitle, maxCharsLotTitleError)

  schema = isRequired ? schema.required(requiredLotTitleError) : schema.notRequired()

  return schema
}
