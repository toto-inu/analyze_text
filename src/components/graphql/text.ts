import {
  fetchTextList,
  updateText as updateTextQuery,
  createText as createTextQuery,
  deleteText as deleteTextQuery,
} from "@/graphql/gql";
import {
  createAsyncSlice,
  generateDispatchFuntion,
} from "@/components/graphql/common";

// type Text = {
//   id?: string | undefined;
//   name: string;
//   description: string;
//   imgSrc?: string | null | undefined;
//   commentChoices: string[];
// };

// メイン処理メソッド群
const fetch = async () => {
  const texts = await fetchTextList();
  return texts.data?.listAnalyzedTexts?.items;
};
const create = async (params: any) => {
  await createTextQuery(params);
};
const update = async (params: any) => {
  await updateTextQuery(params);
};
const del = async (params: any) => {
  await deleteTextQuery(params);
};

// common.tsにてsliceを生成
const textSlice = createAsyncSlice("text", {
  loading: false,
  error: null,
  items: [],
});

const {
  fetch: fetchText,
  mutations: [createText, updateText, deleteText],
} = generateDispatchFuntion(textSlice, {
  fetch: fetch,
  mutations: [create, update, del],
  mutationsOnly: [],
});

export { fetchText, createText, updateText, deleteText };
export const selectText = (state: any) => state.text.items;
export const textReducers = textSlice.reducer;
