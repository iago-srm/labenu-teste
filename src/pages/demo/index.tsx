import React from 'react';
import './demo.css';
import Button from 'react-bootstrap/Button';
import ReactJson from 'react-json-view';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { pokemonApi } from '../../services';

export const DemoPage = () => {

  const [input, setInput] = React.useState("");
  const [response, setResponse] = React.useState({});

  const handleCatch = async () => {
    const pokemon = (await pokemonApi(input)).data;
    setResponse(pokemon.stats);
    console.log(pokemon);
  };

  return (
    <Container>
      <Row>
        <div className="Header">
          <h2>Fetching from API</h2>
        </div>
      </Row>
      <Row>
        <Col xs={2}>
          <input onChange={(e) => setInput(e.target.value)}></input>
          <Button  variant="primary" onClick={handleCatch}>Catch!</Button>
        </Col>
        <Col xs={12} md={{ span: 5, offset: 2 }}>
          <ReactJson src={response} />
        </Col>
      </Row>
    </Container>
  );
}

