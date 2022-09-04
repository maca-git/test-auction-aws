import { object } from 'yup'
import { getSchemas } from './schemas'

export const useValidation = (requiredFields) => {
  const schemas = getSchemas(requiredFields)

  const formSchema = object().shape({
    ...schemas,
  })

  return {
    formSchema,
  }
}
