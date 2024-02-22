import Form from './Form';
import Table from './Table';
import Buttons from './Buttons';
import Header from './Header';
import Container from './Container';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Table />
        <Form />
        {/* <Buttons /> */}
        <div className="newValue js-newValue">
          Wartość waluty wynosi:
          <strong className="newCurrency js-result">B/D</strong>
        </div>
      </Container>
    </>
  );
}

export default App;
