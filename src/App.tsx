import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react';
import { TranslateReducer } from './reducer/TranslateReducer';
import { InitialStateReducer } from './interfaces';

const INITIAL_STATE:InitialStateReducer = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

function App() {

  const [state, dispatch] = useReducer(TranslateReducer, INITIAL_STATE);

  return (
    <>
    
    </>
  )
}

export default App
