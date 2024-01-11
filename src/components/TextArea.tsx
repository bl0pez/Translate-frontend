import { type FC } from 'react';
import { SectionType } from '../interfaces';

interface Props {
    type: SectionType
    autoFocus?: boolean
    loading?: boolean,
    onChange?: (text: string) => void,
    value: string
    className?: string
}

const getPlaceholder = ({type, loading} : {type: SectionType, loading?: boolean}) => {
    if (type === SectionType.From) return 'Introduzca el texto a traducir'
    if (loading === true) return 'Traduciendo...'
    return 'Texto traducido'
}

export const TextArea: FC<Props> = ({ type, loading, value, className, onChange }) => {

    return (
        <textarea
            autoFocus={type === SectionType.From}
            disabled={type === SectionType.To }
            placeholder={getPlaceholder({type, loading})}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`outline-none border shadow w-[300px] h-[200px] p-2 ${className} ${type === SectionType.To && 'bg-gray-100'}`}
        />
    )
}
