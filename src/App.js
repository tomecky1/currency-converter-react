import React from 'react';
import Form from './Form';
import Table from './Table';
import Buttons from './Buttons';
import Header from './Header';
import Container from './Container';

function App() {
  return (
    <body className="body">
      <Header />
      <Container>
        <Table />
        {/* <script>
          const tableBody = document.querySelector(".js-table-body");
          fetch("https://api.nbp.pl/api/exchangerates/tables/A")
            .then((response) => response.json())
            .then((data) => {
              data[0].rates.forEach((rate) => {
                const row = document.createElement("tr");
                const nameCell = document.createElement("td");
                const codeCell = document.createElement("td");
                const midCell = document.createElement("td");

                nameCell.textContent = rate.currency;
                codeCell.textContent = rate.code;
                midCell.textContent = rate.mid;

                row.appendChild(nameCell);
                row.appendChild(codeCell);
                row.appendChild(midCell);

                tableBody.appendChild(row);
              });
            });
        </script> */}
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
