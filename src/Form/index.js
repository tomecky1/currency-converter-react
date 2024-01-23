import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">
                przelicznik walut - pola oznaczone <strong>gwiazdką</strong> są
                obowiązkowe do wypełnienia
            </legend>
            <p>
                <label>
                    <span className="form__labelText">* Waluta w PLN:</span>
                    <input
                        className="form__field js-baseCurrency"
                        type="number"
                        min="0"
                        step="any"
                        required
                        placeholder="podaj dowolną kwotę w PLN"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">* WALUTA:</span>
                    <select className="form__field js-currency" name="currencySelector">
                        <option value="EUR">Euro</option>
                        <option value="GBP">Funt brytyjski</option>
                        <option value="USD">Dolar amerykański</option>
                    </select>
                </label>
            </p>
        </fieldset>
    </form>
);

export default Form;