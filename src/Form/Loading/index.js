import { ClockLoader } from "react-spinners";
import { LoadingText, LoadingBox } from "./styled";

export const Loading = () => (
  <LoadingBox>
    <ClockLoader color="#000000" size={100} speedMultiplier={3} />
    <LoadingText>Trwa wczytywanie kursów walut...</LoadingText>
  </LoadingBox>
);
