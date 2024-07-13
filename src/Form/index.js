import React, { useState } from "react";
import Time from "../Time";
import styled from "styled-components";
import { useApiRates, getApiData } from "../useApiRates";

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.75em;
  text-align: center;
  color: #bf4f74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 1.5em;
  background: papayawhip;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
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
  border-radius: 10px;

  &:hover {
    background-color: hsl(180, 100%, 40%);
  }
`;

const Currency = styled.span`
  display: inline-block;
  width: 100%;
  padding: 15px;
  max-width: 400px;
`;

const Amount = styled.input`
  border: 1px solid darkgray;
  padding: 15px;
  width: 100%;
  max-width: 400px;
`;

const Fieldset = styled.fieldset`
  border: 0;
  padding: 10px;
`;

const Select = styled.select`
  width: 100%;
  display: inline-block;
`;

function Form() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const ratesData = useApiRates;
  const onInputChange = ({ target }) => {
    setCurrency(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log("Przeliczam");
    onClickCalculate();
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount(0); // reset input value
    document.querySelector(".js-result").textContent = " B/D"; // reset result value
    console.log("Resetuję");
  };

  //oblicz walutę
  function onClickCalculate() {
    const rate = ratesData.data[currency].value;
    const resultElement = document.querySelector(".js-result");

    setAmount({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const getExchangeDate = (ratesData) => {
    return new Date(ratesData.date).toLocaleDateString();
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
      <Time />
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
              min={0.1}
              required
              placeholder="podaj kwotę w złotych"
              autoFocus
            />
          </label>
        </p>
        <p>
          <label>
            <Currency>Waluta:</Currency>
            <Select className="js-currency" name="currencySelector">
              {Object.keys(ratesData.data || {}).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </Select>
          </label>
        </p>
        <Button type="submit" onClick={onClickCalculate}>
          Przelicz kwotę
        </Button>
        <Button type="reset" onClick={onFormReset}>
          Wyzeruj wartośći
        </Button>
      </Fieldset>
      <>
        <p>Kursy walut pobierane są z różnych instytucji finansowych.</p>
        <p>Aktualne na dzień: {getExchangeDate(ratesData)}</p>
      </>
    </FormWrapper>
  );
}

export default Form;
