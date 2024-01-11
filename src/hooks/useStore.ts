import { useEffect, useReducer } from "react";
import { TranslateReducer } from "../reducer/TranslateReducer";
import type {
  FromLanguage,
  InitialStateReducer,
  ToLanguage,
} from "../interfaces";
import { translateUseCase } from "../use-cases/translate.use-case";

const INITIAL_STATE: InitialStateReducer = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

export function useStore() {
  const [state, dispatch] = useReducer(TranslateReducer, INITIAL_STATE);

  const interchangeLanguages = () =>
    dispatch({ type: "INTERCHANGE_LANGUAGES" });

  const setFromLanguage = (payload: FromLanguage) =>
    dispatch({ type: "SET_FROM_LANGUAGE", payload });

  const setToLanguage = (payload: ToLanguage) => {
    dispatch({ type: "SET_TO_LANGUAGE", payload });
  };

  const setFromText = (payload: string) => {
    dispatch({ type: "SET_FROM_TEXT", payload });
  };

  const setResult = (payload: string) => {
    dispatch({ type: "SET_RESULT", payload });
  };

  useEffect(() => {
    if (state.fromText.length < 2) return;

    translateUseCase({
      from: state.fromLanguage,
      to: state.toLanguage,
      text: state.fromText,
    }).then((result) => {
      setResult(result.message);
    });
  }, [state.fromLanguage, state.fromText, state.toLanguage]);

  return {
    ...state,
    // Methods
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
