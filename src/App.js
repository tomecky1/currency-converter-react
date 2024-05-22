import Form from './Form';
import Time from './Time';
import Header from './Header';
import Container from './Container';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState(new Date().toLocaleString("pl-PL"));
  console.log(time);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleString("pl-PL"));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }
    , []);

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
