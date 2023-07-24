import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useStore } from './hooks/useStore';

function App() {

  const { fromLanguage, setFromLanguage } = useStore();

  return (
    <>
      <h1>Traslate clone</h1>
      <button  onClick={() => {setFromLanguage('es')}}>Cambiar a español</button>
    </>
  )
}

export default App
