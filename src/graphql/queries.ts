/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAnalyzedText = /* GraphQL */ `
  query GetAnalyzedText($id: ID!) {
    getAnalyzedText(id: $id) {
      id
      text
      engText
      positive
      negative
      createdAt
      updatedAt
    }
  }
`;
export const listAnalyzedTexts = /* GraphQL */ `
  query ListAnalyzedTexts(
    $id: ID
    $filter: ModelAnalyzedTextFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAnalyzedTexts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        text
        engText
        positive
        negative
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
