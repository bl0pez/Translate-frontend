import { useTranslationContext } from "../hooks/useTranslationContext";
import { SectionType } from "../interfaces";
import { LanguageSelector } from "./LanguageSelector";
import { TextArea } from "./TextArea";

export const ToLanguage = () => {
    const {  fromLanguage, result, loading, setToLanguage, setResult, toLanguage  } = useTranslationContext();
  
    return (
    <div className='flex flex-col gap-2'>
        
        <LanguageSelector
            language={toLanguage}
            type={SectionType.To}
            onChange={setToLanguage}
            optionDisabled={fromLanguage}
        />

        <TextArea 
            loading={loading}
            type={SectionType.To}
            value={result}
            onChange={setResult}
        />

    </div>
  )
}
