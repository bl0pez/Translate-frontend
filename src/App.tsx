import { FromLanguage } from './components/FromLanguage';
import { LanguageToggle } from './components/LanguageToggle';
import { ToLanguage } from './components/ToLanguage';
import { TranslationProvider } from './context/TranslationContext';

function App() {

  return (
        <TranslationProvider>
             <h1 className='text-4xl text-center font-mono font-bold p-4'>
                Translate
             </h1>
             <div className='flex justify-center items-center gap-4 font-mono flex-col md:flex-row p-4 flex-1'>
            <FromLanguage />
            <LanguageToggle />
            <ToLanguage />
             </div>
        </TranslationProvider>
  )
}

export default App
