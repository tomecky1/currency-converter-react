import "./style.css";
import React, { useState } from "react";
import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.75em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 2em;
  background: papayawhip;
`;

function Form() {
  const [amount, setAmount] = useState("");
  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Przeliczam");
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount(0); // reset input value
    document.querySelector(".js-result").textContent = "B/D"; // reset result value
    console.log("Resetuję");
  };

  const rateEUR = 4.658;
  const rateGBP = 5.1123;
  const rateUSD = 3.858;

  //oblicz walutę
  function onClickCalculate() {
    const currency = document.querySelector(".js-currency").value;
    const resultElement = document.querySelector(".js-result");
    switch (currency) {
      case "EUR":
        resultElement.textContent = (amount / rateEUR).toFixed(2) + " EUR";
        break;
      case "GBP":
        resultElement.textContent = (amount / rateGBP).toFixed(2) + " GBP";
        break;
      case "USD":
        resultElement.textContent = (amount / rateUSD).toFixed(2) + " USD";
        break;
      default:
        resultElement.textContent = "B/D";
    }
  }

  return (
    <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
      <fieldset className="form__fieldset">
        <Wrapper>
          <Title>Przelicznik walut</Title>
        </Wrapper>
        <p>
          <label>
            <span className="form__labelText">Kwota w zł*:</span>
            <input
              value={amount}
              onChange={onInputChange}
              className="form__field js-baseCurrency"
              type="number"
              step="any"
              min={0}
              required
              placeholder="wpisz kwotę w złotych"
              autoFocus
            />
          </label>
        </p>
        <p>
          <label>
            <span className="form__labelText">Waluta:</span>
            <select className="form__field js-currency" name="currencySelector">
              <option value="EUR">Euro</option>
              <option value="GBP">Funt brytyjski</option>
              <option value="USD">Dolar amerykański</option>
            </select>
          </label>
        </p>
      </fieldset>
      <>
        <button
          className="form__button"
          type="submit"
          onClick={onClickCalculate}
        >
          Przelicz kwotę
        </button>
        <button className="form__button" type="reset" onClick={onFormReset}>
          Wyzeruj wartośći
        </button>
        <p>pola oznaczone gwiazdką są obowiązkowe do wypełnienia</p>
      </>
    </form>
  );
}

export default Form;
