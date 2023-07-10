export interface InitialStateReducer {
    fromLanguage: string;
    toLanguage: string;
    fromText: string;
    result: string;
    loading: boolean;
}