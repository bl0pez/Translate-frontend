import { AUTO_DETECT_LANGUAGE } from '../helpers/constants';
import { FromLanguage, InitialStateReducer, Language } from '../interfaces';

type TranslateAction = 
    | { type: 'INTERCHANGE_LANGUAGES' }
    | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
    | { type: 'SET_TO_LANGUAGE', payload: Language }
    | { type: 'SET_FROM_TEXT', payload: string }
    | { type: 'SET_RESULT', payload: string }



export const TranslateReducer =  (state:InitialStateReducer, action: TranslateAction): InitialStateReducer => {
  switch (action.type) {

  case 'INTERCHANGE_LANGUAGES':
    /**
     * Lógica para intercambiar los idiomas
     * de esta forma evitamos lógica en el componente
     */
    if ( state.fromLanguage === AUTO_DETECT_LANGUAGE ) return state;
    return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
    }
    case 'SET_FROM_LANGUAGE':
        return {
            ...state,
            fromLanguage: action.payload,
            result: '',
        }
    case 'SET_TO_LANGUAGE':
        return {
            ...state,
            toLanguage: action.payload,
        }
    case 'SET_FROM_TEXT':
        return {
            ...state,
            loading: true,
            fromText: action.payload,
        }
    case 'SET_RESULT':
        return {
            ...state,
            loading: false,
            result: action.payload,
        }

  default:
    return state
  }
}
