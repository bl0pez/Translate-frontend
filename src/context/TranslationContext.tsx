import React from 'react';
import { useStore } from '../hooks/useStore';

type TranslationContextType = ReturnType<typeof useStore>;

export const TranslationContext = React.createContext<TranslationContextType>({} as TranslationContextType)

interface Props {
    children: React.ReactNode
}

export const TranslationProvider = ({children }: Props) => {

    const state = useStore();  

    return (
        <TranslationContext.Provider value={{...state}}>
            <main className='min-h-screen flex flex-col'>
                {children}
            </main>
        </TranslationContext.Provider>
    )
}