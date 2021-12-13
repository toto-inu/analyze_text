import { createSlice } from "@reduxjs/toolkit";

export const createAsyncSlice = (actionName: string, initialValues: any) =>
  createSlice({
    name: actionName, // reducers名
    initialState: initialValues as any, // initialState
    reducers: {
      // reducers
      start: (state) => {
        state.loading = true;
        state.error = null;
        return state;
      },
      success: (state, action) => {
        return { ...state, loading: false, error: null, items: action.payload };
      },
      failed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        return state;
      },
    },
  });

type Functions = {
  fetch: (params?: any) => Promise<any>;
  mutations: ((params?: any) => Promise<void>)[];
  mutationsOnly: ((params?: any) => Promise<void>)[];
};

type ReturnFunctions = {
  fetch: (params?: any) => (dispatch: any) => Promise<void>;
  mutations: ((params?: any) => (dispatch: any) => Promise<void>)[];
  mutationsOnly: ((params?: any) => (dispatch: any) => Promise<void>)[];
};

export const generateDispatchFuntion = (
  asyncSlice: any,
  functions: Functions
): ReturnFunctions => {
  const { start, success, failed } = asyncSlice.actions;

  const fetchFunction = (params: any) => async (dispatch: any) => {
    try {
      dispatch(start());
      dispatch(success(await functions.fetch(params)));
    } catch (err) {
      dispatch(failed(err));
    }
  };
  return {
    fetch: (params) => fetchFunction(params),
    mutations: functions.mutations.map((func) => {
      return (params) => async (dispatch) => {
        try {
          dispatch(start());
          await func(params);
          dispatch(fetchFunction(params));
        } catch (err) {
          dispatch(failed(err));
        }
      };
    }),
    mutationsOnly: functions.mutationsOnly.map((func) => {
      return (params) => async (dispatch) => {
        try {
          dispatch(start());
          dispatch(success(await func(params)));
        } catch (err) {
          dispatch(failed(err));
        }
      };
    }),
  };
};
