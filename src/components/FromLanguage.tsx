import { SectionType } from '../interfaces';
import { useTranslationContext } from '../hooks/useTranslationContext'
import { LanguageSelector } from './LanguageSelector'
import { TextArea } from './TextArea';

export const FromLanguage = () => {
  
    const {  fromLanguage,  fromText, setFromLanguage, setFromText, toLanguage  } = useTranslationContext();
    
    return (
    <div className='flex flex-col gap-2'>
        
        <LanguageSelector
            language={fromLanguage}
            type={SectionType.From}
            onChange={setFromLanguage}
            optionDisabled={toLanguage}
        />

        <TextArea 
            type={SectionType.From}
            onChange={setFromText}
            value={fromText}
        />

    </div>
  )
}
