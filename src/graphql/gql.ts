import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api";

import { listAnalyzedTexts } from "@/graphql/queries";
import {
  updateAnalyzedText as update_text,
  createAnalyzedText as create_text,
  deleteAnalyzedText as delete_text,
} from "@/graphql/mutations";
import { ListAnalyzedTextsQuery } from "@/API";

export const fetchTextList = async () => {
  const result = (await API.graphql(
    graphqlOperation(listAnalyzedTexts)
  )) as GraphQLResult<ListAnalyzedTextsQuery>;
  return result;
};

export const createText = async (params: any) => {
  const result = await API.graphql(
    graphqlOperation(create_text, { input: params })
  );
  return result;
};

// 使い方
// const result = fetchTextList() as GraphQLResult<ListTextsQuery>;

export const updateText = async (params: any) => {
  const result = await API.graphql(
    graphqlOperation(update_text, { input: params })
  );
  return result;
};

export const deleteText = async (params: any) => {
  const result = await API.graphql(
    graphqlOperation(delete_text, { input: params })
  );
  return result;
};
