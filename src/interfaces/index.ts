import { AUTO_DETECT_LANGUAGE, SUPPORTED_LANGUAGES } from '../helpers/constants';

/**
 * Le decimos que el tipo de dato sera el mismo que el de las llaves de SUPPORTED_LANGUAGES
 * con keyof solo le decimos que el tipo de dato sera el mismo que el de las llaves de SUPPORTED_LANGUAGES
 */
export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_DETECT_LANGUAGE;
export type FromLanguage = Language | AutoLanguage;

export interface InitialStateReducer {
    fromLanguage: FromLanguage;
    toLanguage: Language;
    fromText: string;
    result: string;
    loading: boolean;
}

export enum SectionType {
    From = 'from',
    To = 'to',
}