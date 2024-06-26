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

const FormWrapper = styled.form`
  background-color: #fff;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 15px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

const Button = styled.button`
  width: 50%;
  border: none;
  background-color: teal;
  color: white;
  padding: 10px;

  &:hover {
    background-color: hsl(180, 100%, 40%);
  }
`;

const Currency = styled.span`
  display: inline-block;
  width: 200px;
  margin-right: 5px;
`;

const Amount = styled.input`
  border: 1px solid darkgray;
  padding: 10px;
  width: 100%;
  max-width: 400px;
`;

const Fieldset = styled.fieldset`
  border: 0;
  padding: 10px;
`;

const Select = styled.select`
  width: 100%;
  display: block;
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
    document.querySelector(".js-result").textContent = " B/D"; // reset result value
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
        resultElement.textContent = " B/D";
    }
  }

  return (
    <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Wrapper>
          <Title>Przelicznik walut</Title>
        </Wrapper>
        <p>
          <label>
            <Currency>Kwota w zł*:</Currency>
            <Amount
              value={amount}
              onChange={onInputChange}
              className="js-baseCurrency"
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
            <Currency>Waluta:</Currency>
            <Select className="js-currency" name="currencySelector">
              <option value="EUR">Euro</option>
              <option value="GBP">Funt brytyjski</option>
              <option value="USD">Dolar amerykański</option>
            </Select>
          </label>
        </p>
      </Fieldset>
      <>
        <Button type="submit" onClick={onClickCalculate}>
          Przelicz kwotę
        </Button>
        <Button type="reset" onClick={onFormReset}>
          Wyzeruj wartośći
        </Button>
        <p>pola oznaczone gwiazdką są obowiązkowe do wypełnienia</p>
      </>
    </FormWrapper>
  );
}

export default Form;
