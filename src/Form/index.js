import React, { useState } from "react";
import Time from "../Time";
import {
  Title,
  Wrapper,
  FormWrapper,
  Button,
  Currency,
  Amount,
  Fieldset,
  Select,
} from "./styled";
import { useApiRates } from "../useApiRates";
import { Result } from "./Result";
import { Loading } from "./Loading";

function Form() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState(null);
  const ratesData = useApiRates();
  const onInputChange = ({ target }) => {
    setAmount(target.value);
  };

  //oblicz walutę
  function onClickCalculate(currency, amount) {
    const rate = ratesData.data[currency].value;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    onClickCalculate(currency, amount);
  };

  const onFormReset = (event) => {
    event.preventDefault();
    setAmount(0); // reset input value
    setCurrency("ADA");
  };

  const getExchangeDate = (ratesData) => {
    return new Date(ratesData.date).toLocaleDateString("pl-PL");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} onReset={onFormReset}>
      {ratesData.status === "loading" ? (
        <Loading />
      ) : (
        <>
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
                  min={0.01}
                  required
                  placeholder="podaj kwotę w złotych"
                  autoFocus
                />
              </label>
            </p>
            <p>
              <label>
                <Currency
                  value={currency}
                  onChange={({ target }) => setCurrency(target.value)}
                >
                  Waluta:
                  <Select className="js-currency" name="currencySelector">
                    {Object.keys(ratesData.data || {}).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </Select>
                </Currency>
              </label>
            </p>
            <Button type="submit" onClick={onClickCalculate}>
              Przelicz kwotę
            </Button>
            <Button type="reset" onClick={onFormReset}>
              Wyzeruj
            </Button>
          </Fieldset>
          <>
            <p>Kursy walut pobierane są z różnych instytucji finansowych.</p>
            <p>Aktualne na dzień: {getExchangeDate(ratesData)}</p>
          </>
          <Result result={result} />
        </>
      )}
    </FormWrapper>
  );
}

export default Form;
