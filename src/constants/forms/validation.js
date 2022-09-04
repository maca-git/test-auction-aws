export const validation = {
  maxCharsLotTitle: 50,
  maxCharsLotTitleError: 'Має містити не більше ніж 50 символів',
  requiredLotTitleError: "Обов'язкове поле 'Назва' не заповнене.",

  maxCharsLotDescription: 500,
  maxCharsLotDescriptionError: 'Має містити не більше ніж 500 символів',
  requiredLotDescriptionError: "Обов'язкове поле 'Опис' не заповнене.",

  requiredLotImageUrlError: "Обов'язкове поле 'Зображення' не заповнене.",

  minLotStartPrice: 1,
  minLotStartPriceError: 'Початкова ціна не може бути меншою ніж 1',
  requiredLotStartPriceError: "Обов'язкове поле 'Початкова ціна' не заповнене.",

  minLotMinStep: 1,
  minLotMinStepError: 'Мінімальний крок не може бути меншим ніж 1',
  requiredLotMinStepError: "Обов'язкове поле 'Мінімальний крок' не заповнене.",
}

export const createLotRequiredFields = [
  'lotTitle',
  'lotDescription',
  'lotImageUrl',
  'lotStartPrice',
  'lotMinStep',
]
