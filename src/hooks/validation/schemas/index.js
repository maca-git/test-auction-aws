import { getLotTitleSchema } from './lotTitle'
import { getLotDescriptionSchema } from './lotDescription'
import { getLotImageUrlSchema } from './lotImageUrl'
import { getLotMinStepSchema } from './lotMinStep'
import { getLotStartPriceSchema } from './lotStartPrice'

export const getSchemas = (requiredFields) => ({
  lotTitle: getLotTitleSchema(requiredFields.includes('lotTitle')),
  lotDescription: getLotDescriptionSchema(requiredFields.includes('lotDescription')),
  lotImageUrl: getLotImageUrlSchema(requiredFields.includes('lotImageUrl')),
  lotStartPrice: getLotStartPriceSchema(requiredFields.includes('lotStartPrice')),
  lotMinStep: getLotMinStepSchema(requiredFields.includes('lotMinStep')),
})
