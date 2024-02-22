import "./style.css";

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
};

const Buttons = () => (
    <>
        <button className="form__button"
            type="submit"
            onClick={
                () => {


                    console.log("Przeliczam");
                }
            }>PRZELICZ</button>
        <button className="form__button" type="reset">RESETUJ</button>
    </>
);

export default Buttons;