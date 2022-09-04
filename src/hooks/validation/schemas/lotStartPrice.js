import { number } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { requiredLotStartPriceError, minLotStartPrice, minLotStartPriceError } = validation

export const getLotStartPriceSchema = (isRequired) => {
  let schema = number().min(minLotStartPrice, minLotStartPriceError)

  schema = isRequired ? schema.required(requiredLotStartPriceError) : schema.notRequired()

  return schema
}
