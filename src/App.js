import Form from "./Form";
import Time from "./Time";
import Container from "./Container";
import styled from "styled-components";

const Title = styled.h1`
  text-shadow: 1px 2px 5px yellow;
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  padding: 10px;
  background-color: #ccc;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

function App() {
  return (
    <>
      <Container>
        <Title>KANTOR</Title>
        <Time />
        <Form />
        <Wrapper>
          Wartość waluty wynosi:
          <strong className="newCurrency js-result"> B/D</strong>
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
