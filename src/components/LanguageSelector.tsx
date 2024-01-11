import { type FC } from "react";
import {
  AUTO_DETECT_LANGUAGE,
  SUPPORTED_LANGUAGES,
} from "../helpers/constants";
import { SectionType, type FromLanguage, type ToLanguage } from "../interfaces";

type Props = 
  | { type: SectionType.From, language: FromLanguage, onChange: (language: FromLanguage) => void, optionDisabled?: string }
  | { type: SectionType.To, language: ToLanguage, onChange: (language: ToLanguage) => void, optionDisabled?: string }

export const LanguageSelector: FC<Props> = ({ onChange, type, language, optionDisabled }) => {    
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //Con as forzamos el tipo de dato
    onChange(e.target.value as ToLanguage);
  };

  return (
    <select className="outline-none shadow border rounded-none p-1" value={language} onChange={handleChange}>
      
      {
        type === SectionType.From && (
          <option value={AUTO_DETECT_LANGUAGE}>Auto</option>
        )
      }
      
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key} disabled={optionDisabled === key} >
          {value}
        </option>
      ))}
    </select>
  );
};
