import Form from "./Form";
import Container from "./Container";
import axios from "axios";
import { useWindowDimensions } from "./useWindowDimensions";
import { Title, Wrapper } from "./styled";

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
          Szerokość: {dimensions.width} Wysokość: {dimensions.height}
        </Wrapper>
      </Container>
    </>
  );
}

export default App;
