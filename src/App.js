import Form from './Form';
import Table from './Table';
import Buttons from './Buttons';
import Header from './Header';
import Container from './Container';

function App() {

  const calculateResult = (amount, currency) => {
    const rateEUR = 4.658;
    const rateGBP = 5.1123;
    const rateUSD = 3.858;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "GBP":
        return amount / rateGBP;

      case "USD":
        return amount / rateUSD;
    }
  }

  return (
    <body className="body">
      <Header />
      <Container>
        <Table />
        <Form />
        <Buttons />
        <div className="newValue js-newValue">
          Wartość waluty wynosi:
          <strong className="newCurrency js-result">B/D</strong>
        </div>
      </Container>
    </body>
  );
}

export default App;
