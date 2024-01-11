import React from 'react';
import { TranslationContext } from '../context/TranslationContext';

export const useTranslationContext = () => React.useContext(TranslationContext);