import { AUTO_DETECT_LANGUAGE, SUPPORTED_LANGUAGES } from '../helpers/constants';

//Le decimos que el tipo de dato sera el mismo que el de las llaves de SUPPORTED_LANGUAGES
export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_DETECT_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export interface InitialStateReducer {
    fromLanguage: string;
    toLanguage: string;
    fromText: string;
    result: string;
    loading: boolean;
}