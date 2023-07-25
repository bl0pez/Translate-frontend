import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

import { useStore } from './hooks/useStore';
import { AUTO_DETECT_LANGUAGE } from './helpers/constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './interfaces';
import { TextArea } from './components/TextArea';
import './App.css';

function App() {

  const { fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, fromText, result, setFromText, setResult, loading} = useStore();

  return (
    <Container fluid>
      <h1>Traslate clone</h1>
      <Row>
        <Col>
          <Stack gap={3}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <TextArea
              type={SectionType.From}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs="auto">
          <Button variant='link' disabled={fromLanguage === AUTO_DETECT_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
          <Stack gap={3}>
            <LanguageSelector
              type={SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}
            />
            <TextArea
              type={SectionType.To}
              value={result}
              onChange={setResult}
              loading={loading}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
