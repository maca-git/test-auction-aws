/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLot = /* GraphQL */ `
  query GetLot($id: ID!) {
    getLot(id: $id) {
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
export const listLots = /* GraphQL */ `
  query ListLots(
    $filter: ModelLotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLots(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
