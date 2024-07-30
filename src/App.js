import Form from "./Form";
import Container from "./Container";
import styled from "styled-components";
import axios from "axios";
import { useWindowDimensions } from "./useWindowDimensions";

const Title = styled.h1`
  text-shadow: 1px 2px 5px yellow;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 10px;
  background-color: #ccc;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

function App() {
  axios
    .get("currencies.json")
    .then((Response) => console.log(Response.data))
    .catch((error) => console.log(error));

  const dimensions = useWindowDimensions();

  return (
    <>
      <Container>
        <Title>KANTOR</Title>
        <Form />
        <Wrapper>
          <p className="kwota">Wartość waluty wynosi:</p>
          <strong className="newCurrency js-result"> B/D</strong>
          <br />
          Szerokość: {dimensions.width} Wysokość: {dimensions.height}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
