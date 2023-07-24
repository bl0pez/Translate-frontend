import { useReducer } from "react";
import { TranslateReducer } from "../reducer/TranslateReducer";
import { FromLanguage, InitialStateReducer, Language } from "../interfaces";

const INITIAL_STATE:InitialStateReducer = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false,
}

export function useStore() {

    const [state, dispatch] = useReducer(TranslateReducer, INITIAL_STATE);

    const interchangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' });
    const setFromLanguage = (payload: FromLanguage) => dispatch({ type: 'SET_FROM_LANGUAGE', payload });
    const setToLanguage = (payload: Language) => dispatch({ type: 'SET_TO_LANGUAGE', payload });
    const setFromText = (payload: string) => dispatch({ type: 'SET_FROM_TEXT', payload });
    const setResult = (payload: string) => dispatch({ type: 'SET_RESULT', payload });

    return {
        ...state,
        // Methods
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult,
    }

}