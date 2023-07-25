import { type FC } from 'react';
import { Form } from 'react-bootstrap';
import { AUTO_DETECT_LANGUAGE, SUPPORTED_LANGUAGES } from '../helpers/constants';
import { SectionType, type FromLanguage, type Language } from '../interfaces';

type Props = 
    | { type: SectionType.From, value: FromLanguage; onChange: (language: FromLanguage) => void }
    | { type: SectionType.To, value: Language; onChange: (language: Language) => void}

export const LanguageSelector:FC<Props> = ({ onChange, type, value }) => {

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        //Con as forzamos el tipo de dato
        onChange(e.target.value as Language);
    }

    return (
        <Form.Select
            aria-label="Selecciona el idioma"
            value={value}
            onChange={handleChange}>
            {type === 'from' && <option value={AUTO_DETECT_LANGUAGE}>Detectar idioma</option>}
            {
                Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
                    <option key={key} value={key}>{value}</option>
                ))
            }
        </Form.Select>
    )
}
