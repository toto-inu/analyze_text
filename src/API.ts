/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAnalyzedTextInput = {
  id?: string | null,
  text: string,
  engText: string,
  positive: number,
  negative: number,
};

export type ModelAnalyzedTextConditionInput = {
  text?: ModelStringInput | null,
  engText?: ModelStringInput | null,
  positive?: ModelIntInput | null,
  negative?: ModelIntInput | null,
  and?: Array< ModelAnalyzedTextConditionInput | null > | null,
  or?: Array< ModelAnalyzedTextConditionInput | null > | null,
  not?: ModelAnalyzedTextConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type AnalyzedText = {
  __typename: "AnalyzedText",
  id: string,
  text: string,
  engText: string,
  positive: number,
  negative: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAnalyzedTextInput = {
  id: string,
  text?: string | null,
  engText?: string | null,
  positive?: number | null,
  negative?: number | null,
};

export type DeleteAnalyzedTextInput = {
  id: string,
};

export type ModelAnalyzedTextFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  engText?: ModelStringInput | null,
  positive?: ModelIntInput | null,
  negative?: ModelIntInput | null,
  and?: Array< ModelAnalyzedTextFilterInput | null > | null,
  or?: Array< ModelAnalyzedTextFilterInput | null > | null,
  not?: ModelAnalyzedTextFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAnalyzedTextConnection = {
  __typename: "ModelAnalyzedTextConnection",
  items?:  Array<AnalyzedText | null > | null,
  nextToken?: string | null,
};

export type CreateAnalyzedTextMutationVariables = {
  input: CreateAnalyzedTextInput,
  condition?: ModelAnalyzedTextConditionInput | null,
};

export type CreateAnalyzedTextMutation = {
  createAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAnalyzedTextMutationVariables = {
  input: UpdateAnalyzedTextInput,
  condition?: ModelAnalyzedTextConditionInput | null,
};

export type UpdateAnalyzedTextMutation = {
  updateAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAnalyzedTextMutationVariables = {
  input: DeleteAnalyzedTextInput,
  condition?: ModelAnalyzedTextConditionInput | null,
};

export type DeleteAnalyzedTextMutation = {
  deleteAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAnalyzedTextQueryVariables = {
  id: string,
};

export type GetAnalyzedTextQuery = {
  getAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAnalyzedTextsQueryVariables = {
  id?: string | null,
  filter?: ModelAnalyzedTextFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAnalyzedTextsQuery = {
  listAnalyzedTexts?:  {
    __typename: "ModelAnalyzedTextConnection",
    items?:  Array< {
      __typename: "AnalyzedText",
      id: string,
      text: string,
      engText: string,
      positive: number,
      negative: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAnalyzedTextSubscription = {
  onCreateAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAnalyzedTextSubscription = {
  onUpdateAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAnalyzedTextSubscription = {
  onDeleteAnalyzedText?:  {
    __typename: "AnalyzedText",
    id: string,
    text: string,
    engText: string,
    positive: number,
    negative: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
