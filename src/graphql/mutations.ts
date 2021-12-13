/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnalyzedText = /* GraphQL */ `
  mutation CreateAnalyzedText(
    $input: CreateAnalyzedTextInput!
    $condition: ModelAnalyzedTextConditionInput
  ) {
    createAnalyzedText(input: $input, condition: $condition) {
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
export const updateAnalyzedText = /* GraphQL */ `
  mutation UpdateAnalyzedText(
    $input: UpdateAnalyzedTextInput!
    $condition: ModelAnalyzedTextConditionInput
  ) {
    updateAnalyzedText(input: $input, condition: $condition) {
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
export const deleteAnalyzedText = /* GraphQL */ `
  mutation DeleteAnalyzedText(
    $input: DeleteAnalyzedTextInput!
    $condition: ModelAnalyzedTextConditionInput
  ) {
    deleteAnalyzedText(input: $input, condition: $condition) {
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
