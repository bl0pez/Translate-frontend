import { AUTO_DETECT_LANGUAGE } from "../helpers/constants";
import { useTranslationContext } from "../hooks/useTranslationContext"
import { ArrowsIcon } from "./Icons"

export const LanguageToggle = () => {

    const { fromLanguage, interchangeLanguages } = useTranslationContext();

  return (
    <button
        className="disabled:opacity-50 disabled:cursor-not-allowed p-2 shadow border hover:bg-gray-100 rounded-full" 
        disabled={fromLanguage === AUTO_DETECT_LANGUAGE} 
        onClick={interchangeLanguages}>
        <ArrowsIcon />
    </button>
  )
}
