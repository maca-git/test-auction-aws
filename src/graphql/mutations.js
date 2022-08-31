/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLot = /* GraphQL */ `
  mutation CreateLot(
    $input: CreateLotInput!
    $condition: ModelLotConditionInput
  ) {
    createLot(input: $input, condition: $condition) {
      id
      title
      description
      imageUrl
      startPrice
      currentPrice
      minStep
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateLot = /* GraphQL */ `
  mutation UpdateLot(
    $input: UpdateLotInput!
    $condition: ModelLotConditionInput
  ) {
    updateLot(input: $input, condition: $condition) {
      id
      title
      description
      imageUrl
      startPrice
      currentPrice
      minStep
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteLot = /* GraphQL */ `
  mutation DeleteLot(
    $input: DeleteLotInput!
    $condition: ModelLotConditionInput
  ) {
    deleteLot(input: $input, condition: $condition) {
      id
      title
      description
      imageUrl
      startPrice
      currentPrice
      minStep
      owner
      createdAt
      updatedAt
    }
  }
`;
