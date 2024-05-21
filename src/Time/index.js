import "./style.css";

function Time() {
    const date = new Date();
    const newDate = date.toLocaleString("pl-PL");
    const day = date.toLocaleDateString("pl-PL", { weekday: "long" });


    return (
        <>
            <p>Dzisiaj jest {day}, {newDate}</p>
        </>
    );
};

export default Time;
