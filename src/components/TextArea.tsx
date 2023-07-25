import { type FC } from 'react';
import { Form } from 'react-bootstrap';
import { SectionType } from '../interfaces';

interface Props {
    type: SectionType
    autoFocus?: boolean
    loading?: boolean,
    onChange: (text: string) => void,
    value: string
}

const commonStyles = { border: 0, height: '200px' } //resize: 'none'

const getPlaceholder = ({type, loading} : {type: SectionType, loading?: boolean}) => {
    if (type === SectionType.From) return 'Intro texto a traducir'
    if (loading === true) return 'Traduciendo...'
    return 'Texto traducido'
}

export const TextArea: FC<Props> = ({ type, loading, value, onChange }) => {

    const styles = type === SectionType.From
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5' };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    }

    return (
        <Form.Control
            autoFocus={type === SectionType.From}
            as="textarea"
            placeholder={getPlaceholder({type, loading})}
            style={styles}
            value={value}
            onChange={handleChange}
        />
    )
}
