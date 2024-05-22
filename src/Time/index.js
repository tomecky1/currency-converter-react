import "./style.css";

setInterval(() => {
    Time();

}, 1000);

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


// const setTimer = setInterval(() => {
//     Time();
// }, 1000);

// function renderTime() {

//     return (
//         { setTimer }
//     );
// };

// renderTime();


export default Time;
