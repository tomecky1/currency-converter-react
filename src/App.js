import Form from "./Form";
import Container from "./Container";
import { useWindowDimensions } from "./useWindowDimensions";
import { Title, Wrapper } from "./styled";

function App() {
  const dimensions = useWindowDimensions();

  return (
    <>
      <Container>
        <Title>KANTOR</Title>
        <Form />
        <Wrapper>
          Szerokość: {dimensions.width} Wysokość: {dimensions.height}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
