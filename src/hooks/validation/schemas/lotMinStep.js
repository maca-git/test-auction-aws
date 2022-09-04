import { number } from 'yup'
import { validation } from '../../../constants/forms/validation'

const { minLotMinStep, minLotMinStepError, requiredLotMinStepError } = validation

export const getLotMinStepSchema = (isRequired) => {
  let schema = number().min(minLotMinStep, minLotMinStepError)

  schema = isRequired ? schema.required(requiredLotMinStepError) : schema.notRequired()

  return schema
}
