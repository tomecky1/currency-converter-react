import Form from './Form';
import Time from './Time';
import Header from './Header';
import Container from './Container';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  return (
    <>
      <Container>

        {/* <Table /> */}
        <Header />
        <Time />
        <Form />
        <div className="newValue js-newValue">
          Wartość waluty wynosi:
          <strong className="newCurrency js-result">B/D</strong>
        </div>
      </Container>
    </>
  );
}

export default App;
